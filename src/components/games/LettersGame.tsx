import { useState, useMemo, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { AreaPill } from '../common/AreaPill';
import { ProgressBar } from '../common/ProgressBar';
import { useAudio } from '../../hooks/useAudio';
import { LETTERS } from '../../data/syllabus';

interface LettersGameProps { onDone: (stars: number) => void; }

type Mode = 'find' | 'phonics' | 'match';

export function LettersGame({ onDone }: LettersGameProps) {
    const { speak } = useAudio();
    const [mode, setMode] = useState<Mode>('find');
    const [round, setRound] = useState(0);
    const [stars, setStars] = useState(0);
    const totalRounds = 6;

    const shuffled = useMemo(() => [...LETTERS].sort(() => Math.random() - 0.5), []);
    const target = shuffled[round % shuffled.length];

    // Build 6 choices including target
    const choices = useMemo(() => {
        const others = LETTERS.filter(l => l.id !== target.id).sort(() => Math.random() - 0.5).slice(0, 5);
        return [...others, target].sort(() => Math.random() - 0.5);
    }, [target]);

    const speakPrompt = useCallback(() => {
        if (mode === 'find') speak(`Find the letter ${target.label}.`);
        else if (mode === 'phonics') speak(`${target.audio}. Can you find ${target.label}?`);
        else speak(`Which letter is for ${target.clue}?`);
    }, [mode, target, speak]);

    useEffect(() => { speakPrompt(); }, [speakPrompt]);

    function handlePick(id: string) {
        if (id === target.id) {
            speak(`Yes! ${target.audio}`, 'cheerful');
            setStars(s => s + 1);
            if (round + 1 >= totalRounds) {
                setTimeout(() => onDone(Math.max(1, stars + 1)), 600);
            } else {
                setRound(r => r + 1);
                // Rotate modes
                setMode(m => m === 'find' ? 'phonics' : m === 'phonics' ? 'match' : 'find');
            }
        } else {
            speak('Try again.', 'encouraging');
        }
    }

    return (
        <div className="screen">
            <div className="screenHeader">
                <AreaPill color="#FACC15">ABC Phonics</AreaPill>
                <div className="screenPrompt">
                    {mode === 'find' && `Find the letter ${target.label}`}
                    {mode === 'phonics' && `🔊 ${target.audio}`}
                    {mode === 'match' && `Which letter is for ${target.clue}?`}
                </div>
                <button className="secondary" onClick={speakPrompt}>🔊</button>
            </div>

            {/* Show target emoji for match mode */}
            {mode === 'match' && (
                <motion.div className="targetDisplay"
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}>
                    <span className="targetEmoji">{target.emoji}</span>
                    <span className="targetLabel">{target.clue}</span>
                </motion.div>
            )}

            <div className="choiceGrid choiceGrid--6">
                {choices.map((l) => (
                    <motion.button
                        key={l.id}
                        className="choiceBtn choiceBtn--letter"
                        onClick={() => handlePick(l.id)}
                        whileTap={{ scale: 0.9 }}
                    >
                        {/* find & phonics modes: show ONLY emoji + clue word (no letter)
                            so the kid must recall "N for Nose" from memory */}
                        {(mode === 'find' || mode === 'phonics') && (
                            <>
                                <span className="choiceBtn__emoji">{l.emoji}</span>
                                <span className="choiceBtn__main">{l.clue}</span>
                            </>
                        )}
                        {/* match mode: show ONLY the letter (no emoji)
                            kid sees the clue image above and must recall the letter */}
                        {mode === 'match' && (
                            <span className="choiceBtn__main" style={{ fontSize: '2.2rem' }}>{l.label}</span>
                        )}
                    </motion.button>
                ))}
            </div>

            <div className="screenFooter">
                <ProgressBar current={round} total={totalRounds} color="#FACC15" />
                <div className="statusLine">⭐ {stars}</div>
                <button className="primary" onClick={() => onDone(Math.max(1, stars))}>Finish</button>
            </div>
        </div>
    );
}
