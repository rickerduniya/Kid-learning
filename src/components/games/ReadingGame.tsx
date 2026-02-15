import { useState, useMemo, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { AreaPill } from '../common/AreaPill';
import { ProgressBar } from '../common/ProgressBar';
import { useAudio } from '../../hooks/useAudio';
import { CVC_WORDS, SIGHT_WORDS, VOWELS, CONSONANTS } from '../../data/syllabus';

interface ReadingGameProps { onDone: (stars: number) => void; }

type Mode = 'sight' | 'cvc' | 'vowel';

function shuffleBySeed<T>(arr: T[], seed: number): T[] {
    return arr
        .map((v, i) => ({ v, k: (seed * 9301 + i * 49297) % 233280 }))
        .sort((a, b) => a.k - b.k)
        .map(x => x.v);
}

export function ReadingGame({ onDone }: ReadingGameProps) {
    const { speak } = useAudio();
    const [mode, setMode] = useState<Mode>('sight');
    const [round, setRound] = useState(0);
    const [stars, setStars] = useState(0);
    const totalRounds = 6;

    // Sight words mode: pick the spoken word
    const sightWords = useMemo(() =>
        shuffleBySeed([...SIGHT_WORDS], 101).slice(0, 20), []);
    const sightTarget = sightWords[round % sightWords.length];
    const sightChoices = useMemo(() => {
        const others = sightWords.filter(w => w !== sightTarget).slice(0, 3);
        return shuffleBySeed([...others, sightTarget], round + 11);
    }, [round, sightTarget, sightWords]);

    // CVC mode: spell the word
    const cvcWords = useMemo(() => shuffleBySeed([...CVC_WORDS], 303), []);
    const cvcTarget = cvcWords[round % cvcWords.length];

    // Vowel/consonant sort
    const allLetters = useMemo(() => shuffleBySeed([...VOWELS, ...CONSONANTS.slice(0, 5)], 707), []);
    const sortTarget = allLetters[round % allLetters.length];

    const speakPrompt = useCallback(() => {
        if (mode === 'sight') speak(`Find the word: ${sightTarget}`);
        else if (mode === 'cvc') speak(`Spell the word: ${cvcTarget.audio}`);
        else speak(`Is ${sortTarget} a vowel or a consonant?`);
    }, [mode, sightTarget, cvcTarget, sortTarget, speak]);

    useEffect(() => { speakPrompt(); }, [speakPrompt]);

    function advance() {
        if (round + 1 >= totalRounds) {
            setTimeout(() => onDone(Math.max(1, stars + 1)), 500);
        } else {
            setRound(r => r + 1);
            setMode(m => m === 'sight' ? 'cvc' : m === 'cvc' ? 'vowel' : 'sight');
        }
    }

    return (
        <div className="screen">
            <div className="screenHeader">
                <AreaPill color="#F472B6">Reading</AreaPill>
                <div className="screenPrompt">
                    {mode === 'sight' && `🔊 Listen and find the word`}
                    {mode === 'cvc' && `🔊 Listen and find the word`}
                    {mode === 'vowel' && `Is "${sortTarget}" a vowel?`}
                </div>
                <button className="secondary" onClick={speakPrompt}>🔊</button>
            </div>

            {mode === 'sight' && (
                <div className="choiceGrid choiceGrid--4">
                    {sightChoices.map(w => (
                        <motion.button key={w} className="choiceBtn choiceBtn--word"
                            onClick={() => {
                                if (w === sightTarget) { speak('Correct!'); setStars(s => s + 1); advance(); }
                                else speak('Try again.');
                            }} whileTap={{ scale: 0.9 }}>
                            {w}
                        </motion.button>
                    ))}
                </div>
            )}

            {mode === 'cvc' && (
                <div className="cvcDisplay">
                    <div className="cvcEmoji" style={{ fontSize: '4rem' }}>{cvcTarget.emoji}</div>
                    <div className="choiceGrid choiceGrid--3">
                        {shuffleBySeed([cvcTarget.label, ...CVC_WORDS.filter(c => c.id !== cvcTarget.id).slice(0, 2).map(c => c.label)], round + 31).map(w => (
                            <motion.button key={w} className="choiceBtn choiceBtn--word"
                                onClick={() => {
                                    if (w === cvcTarget.label) { speak('Perfect!'); setStars(s => s + 1); advance(); }
                                    else speak('Try again.');
                                }} whileTap={{ scale: 0.9 }}>
                                {w}
                            </motion.button>
                        ))}
                    </div>
                </div>
            )}

            {mode === 'vowel' && (
                <div className="vowelSort">
                    <motion.div className="targetDisplay" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <span className="targetEmoji" style={{ fontSize: '4rem' }}>{sortTarget}</span>
                    </motion.div>
                    <div className="choiceGrid choiceGrid--2">
                        <motion.button className="choiceBtn choiceBtn--big"
                            style={{ background: '#FDE68A' }}
                            onClick={() => {
                                const isVowel = VOWELS.includes(sortTarget);
                                if (isVowel) { speak('Yes! It is a vowel.'); setStars(s => s + 1); advance(); }
                                else { speak('No, it is a consonant.'); advance(); }
                            }} whileTap={{ scale: 0.9 }}>
                            Vowel
                        </motion.button>
                        <motion.button className="choiceBtn choiceBtn--big"
                            style={{ background: '#BBF7D0' }}
                            onClick={() => {
                                const isConsonant = CONSONANTS.includes(sortTarget);
                                if (isConsonant) { speak('Yes! It is a consonant.'); setStars(s => s + 1); advance(); }
                                else { speak('No, it is a vowel.'); advance(); }
                            }} whileTap={{ scale: 0.9 }}>
                            Consonant
                        </motion.button>
                    </div>
                </div>
            )}

            <div className="screenFooter">
                <ProgressBar current={round} total={totalRounds} color="#F472B6" />
                <div className="statusLine">⭐ {stars}</div>
                <button className="primary" onClick={() => onDone(Math.max(1, stars))}>Finish</button>
            </div>
        </div>
    );
}
