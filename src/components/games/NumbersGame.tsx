import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { AreaPill } from '../common/AreaPill';
import { ProgressBar } from '../common/ProgressBar';
import { useAudio } from '../../hooks/useAudio';
import { NUMBER_NAMES } from '../../data/syllabus';

interface NumbersGameProps { onDone: (stars: number) => void; }

type Mode = 'count' | 'name' | 'between';

const EMOJIS = ['🍎', '⭐', '🌸', '🐟', '🎈', '🍪', '🦋', '🌻', '🐝', '🍬'];

function shuffleBySeed<T>(arr: T[], seed: number): T[] {
    return arr
        .map((v, i) => ({ v, k: (seed * 9301 + i * 49297) % 233280 }))
        .sort((a, b) => a.k - b.k)
        .map(x => x.v);
}

function numberChoices(correct: number, seed: number, min: number, max: number, count: number) {
    const opts = new Set<number>([correct]);
    let i = 0;
    while (opts.size < count && i < 100) {
        const n = min + ((seed + i * 11) % (max - min + 1));
        opts.add(n);
        i++;
    }
    return shuffleBySeed([...opts], seed);
}

export function NumbersGame({ onDone }: NumbersGameProps) {
    const { speak } = useAudio();
    const [mode, setMode] = useState<Mode>('count');
    const [round, setRound] = useState(0);
    const [stars, setStars] = useState(0);
    const totalRounds = 6;

    const countTarget = useMemo(() => ((round * 7) % 10) + 1, [round]);
    const countEmoji = useMemo(() => EMOJIS[(round * 3 + 5) % EMOJIS.length], [round]);

    const nameKeys = useMemo(() => Object.keys(NUMBER_NAMES).map(Number).sort((a, b) => a - b), []);
    const nameTarget = useMemo(() => nameKeys[(round * 5 + 1) % nameKeys.length], [nameKeys, round]);

    const betweenA = useMemo(() => ((round * 3 + 1) % 8) + 1, [round]);
    const betweenC = betweenA + 2;
    const betweenAnswer = betweenA + 1;

    const speakPrompt = useCallback(() => {
        if (mode === 'count') speak(`Count the ${countEmoji}. How many do you see?`);
        else if (mode === 'name') speak(`What is the name of number ${nameTarget}?`);
        else speak(`What number comes between ${betweenA} and ${betweenC}?`);
    }, [mode, countTarget, countEmoji, nameTarget, betweenA, betweenC, speak]);

    useEffect(() => { speakPrompt(); }, [speakPrompt]);

    function advance() {
        if (round + 1 >= totalRounds) {
            setTimeout(() => onDone(Math.max(1, stars + 1)), 500);
        } else {
            setRound(r => r + 1);
            setMode(m => m === 'count' ? 'name' : m === 'name' ? 'between' : 'count');
        }
    }

    const countChoices = useMemo(() => {
        return numberChoices(countTarget, round + 11, 1, 10, 4);
    }, [countTarget, round]);

    const nameChoices = useMemo(() => {
        const correct = NUMBER_NAMES[nameTarget] || String(nameTarget);
        const allNames = Object.values(NUMBER_NAMES);
        const others = shuffleBySeed(allNames.filter(n => n !== correct), round + 23).slice(0, 3);
        return shuffleBySeed([...others, correct], round + 29);
    }, [nameTarget, round]);

    const betweenChoices = useMemo(() => {
        return numberChoices(betweenAnswer, round + 41, 1, 10, 4);
    }, [betweenAnswer, round]);

    return (
        <div className="screen">
            <div className="screenHeader">
                <AreaPill color="#84CC16">Numbers</AreaPill>
                <div className="screenPrompt">
                    {mode === 'count' && 'Count them!'}
                    {mode === 'name' && `Name of ${nameTarget}?`}
                    {mode === 'between' && `${betweenA} _ ${betweenC}`}
                </div>
                <button className="secondary" onClick={speakPrompt}>🔊</button>
            </div>

            {mode === 'count' && (
                <>
                    <div className="objectWrap">
                        {Array.from({ length: countTarget }).map((_, i) => (
                            <motion.span key={i} className="objectItem"
                                initial={{ scale: 0 }} animate={{ scale: 1 }}
                                transition={{ delay: i * 0.08 }}>
                                {countEmoji}
                            </motion.span>
                        ))}
                    </div>
                    <div className="choiceGrid choiceGrid--4">
                        {countChoices.map(n => (
                            <motion.button key={n} className="choiceBtn choiceBtn--number"
                                onClick={() => {
                                    if (n === countTarget) { speak('Correct!', 'cheerful'); setStars(s => s + 1); advance(); }
                                    else speak('Try again.', 'encouraging');
                                }} whileTap={{ scale: 0.9 }}>
                                {n}
                            </motion.button>
                        ))}
                    </div>
                </>
            )}

            {mode === 'name' && (
                <>
                    <motion.div className="targetDisplay" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <span className="targetEmoji" style={{ fontSize: '5rem' }}>{nameTarget}</span>
                    </motion.div>
                    <div className="choiceGrid choiceGrid--4">
                        {nameChoices.map(name => (
                            <motion.button key={name} className="choiceBtn choiceBtn--word"
                                onClick={() => {
                                    if (name === (NUMBER_NAMES[nameTarget] || String(nameTarget))) {
                                        speak(`Yes! ${nameTarget} is ${name}.`, 'cheerful');
                                        setStars(s => s + 1); advance();
                                    } else speak('Try again.', 'encouraging');
                                }} whileTap={{ scale: 0.9 }}>
                                {name}
                            </motion.button>
                        ))}
                    </div>
                </>
            )}

            {mode === 'between' && (
                <>
                    <div className="betweenDisplay">
                        <span className="betweenNum">{betweenA}</span>
                        <span className="betweenBlank">?</span>
                        <span className="betweenNum">{betweenC}</span>
                    </div>
                    <div className="choiceGrid choiceGrid--4">
                        {betweenChoices.map(n => (
                            <motion.button key={n} className="choiceBtn choiceBtn--number"
                                onClick={() => {
                                    if (n === betweenAnswer) { speak(`Yes! ${betweenA}, ${betweenAnswer}, ${betweenC}.`, 'cheerful'); setStars(s => s + 1); advance(); }
                                    else speak('Try again.', 'encouraging');
                                }} whileTap={{ scale: 0.9 }}>
                                {n}
                            </motion.button>
                        ))}
                    </div>
                </>
            )}

            <div className="screenFooter">
                <ProgressBar current={round} total={totalRounds} color="#84CC16" />
                <div className="statusLine">⭐ {stars}</div>
                <button className="primary" onClick={() => onDone(Math.max(1, stars))}>Finish</button>
            </div>
        </div>
    );
}
