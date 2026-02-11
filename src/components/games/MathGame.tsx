import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { AreaPill } from '../common/AreaPill';
import { ProgressBar } from '../common/ProgressBar';
import { useAudio } from '../../hooks/useAudio';
import { generateMathProblems, PATTERNS } from '../../data/syllabus';

interface MathGameProps { onDone: (stars: number) => void; }

type Mode = 'add' | 'pattern' | 'compare';

export function MathGame({ onDone }: MathGameProps) {
    const { speak } = useAudio();
    const [mode, setMode] = useState<Mode>('add');
    const [round, setRound] = useState(0);
    const [stars, setStars] = useState(0);
    const totalRounds = 6;

    const problems = useMemo(() => generateMathProblems(20, 30, ['+', '-']), []);
    const problem = problems[round % problems.length];
    const patternItem = PATTERNS[round % PATTERNS.length];

    const [compA] = useState(() => Math.floor(Math.random() * 9) + 1);
    const [compB] = useState(() => {
        let b = Math.floor(Math.random() * 9) + 1;
        while (b === compA) b = Math.floor(Math.random() * 9) + 1;
        return b;
    });

    const speakPrompt = useCallback(() => {
        if (mode === 'add') {
            const opWord = problem.op === '+' ? 'plus' : 'minus';
            speak(`What is ${problem.a} ${opWord} ${problem.b}?`);
        } else if (mode === 'pattern') {
            speak('What comes next in the pattern?');
        } else {
            speak(`Which is bigger? ${compA} or ${compB}?`);
        }
    }, [mode, problem, compA, compB, speak]);

    useEffect(() => { speakPrompt(); }, [speakPrompt]);

    const addChoices = useMemo(() => {
        const opts = new Set([problem.answer]);
        while (opts.size < 4) opts.add(Math.floor(Math.random() * 18) + 1);
        return [...opts].sort(() => Math.random() - 0.5);
    }, [problem]);

    function advance() {
        if (round + 1 >= totalRounds) {
            setTimeout(() => onDone(Math.max(1, stars + 1)), 500);
        } else {
            setRound(r => r + 1);
            setMode(m => m === 'add' ? 'pattern' : m === 'pattern' ? 'compare' : 'add');
        }
    }

    return (
        <div className="screen">
            <div className="screenHeader">
                <AreaPill color="#14B8A6">Math Fun</AreaPill>
                <div className="screenPrompt">
                    {mode === 'add' && `${problem.a} ${problem.op} ${problem.b} = ?`}
                    {mode === 'pattern' && '🔮 Pattern'}
                    {mode === 'compare' && 'Which is bigger?'}
                </div>
                <button className="secondary" onClick={speakPrompt}>🔊</button>
            </div>

            {mode === 'add' && (
                <>
                    <div className="mathVisual">
                        <div className="mathGroup">
                            {Array.from({ length: problem.a }).map((_, i) => (
                                <motion.span key={`a${i}`} className="objectItem"
                                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                                    transition={{ delay: i * 0.05 }}>{problem.visual}</motion.span>
                            ))}
                        </div>
                        <span className="mathOp">{problem.op}</span>
                        <div className="mathGroup">
                            {Array.from({ length: problem.b }).map((_, i) => (
                                <motion.span key={`b${i}`} className="objectItem"
                                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                                    transition={{ delay: (problem.a + i) * 0.05 }}>{problem.visual}</motion.span>
                            ))}
                        </div>
                    </div>
                    <div className="choiceGrid choiceGrid--4">
                        {addChoices.map(n => (
                            <motion.button key={n} className="choiceBtn choiceBtn--number"
                                onClick={() => {
                                    if (n === problem.answer) { speak(`Yes! ${problem.a} ${problem.op === '+' ? 'plus' : 'minus'} ${problem.b} equals ${problem.answer}.`, 'cheerful'); setStars(s => s + 1); advance(); }
                                    else speak('Try again.', 'encouraging');
                                }} whileTap={{ scale: 0.9 }}>{n}</motion.button>
                        ))}
                    </div>
                </>
            )}

            {mode === 'pattern' && (
                <>
                    <div className="patternDisplay">
                        {patternItem.seq.map((s, i) => (
                            <span key={i} className="patternItem">{s}</span>
                        ))}
                        <span className="patternItem patternItem--blank">?</span>
                    </div>
                    <div className="choiceGrid choiceGrid--3">
                        {patternItem.options.map(opt => (
                            <motion.button key={opt} className="choiceBtn choiceBtn--emoji"
                                onClick={() => {
                                    if (opt === patternItem.answer) { speak('Great! You found the pattern!', 'excited'); setStars(s => s + 1); advance(); }
                                    else speak('Look at the pattern again.', 'encouraging');
                                }} whileTap={{ scale: 0.9 }}>
                                <span style={{ fontSize: '2rem' }}>{opt}</span>
                            </motion.button>
                        ))}
                    </div>
                </>
            )}

            {mode === 'compare' && (
                <div className="choiceGrid choiceGrid--2">
                    <motion.button className="choiceBtn choiceBtn--big"
                        onClick={() => {
                            if (compA > compB) { speak(`Yes! ${compA} is bigger than ${compB}.`, 'cheerful'); setStars(s => s + 1); advance(); }
                            else { speak(`No, ${compB} is bigger.`, 'encouraging'); advance(); }
                        }} whileTap={{ scale: 0.9 }}>
                        <span className="compareNum">{compA}</span>
                        <span className="compareObjects">{Array.from({ length: compA }).map(() => '🍎').join('')}</span>
                    </motion.button>
                    <motion.button className="choiceBtn choiceBtn--big"
                        onClick={() => {
                            if (compB > compA) { speak(`Yes! ${compB} is bigger than ${compA}.`, 'cheerful'); setStars(s => s + 1); advance(); }
                            else { speak(`No, ${compA} is bigger.`, 'encouraging'); advance(); }
                        }} whileTap={{ scale: 0.9 }}>
                        <span className="compareNum">{compB}</span>
                        <span className="compareObjects">{Array.from({ length: compB }).map(() => '⭐').join('')}</span>
                    </motion.button>
                </div>
            )}

            <div className="screenFooter">
                <ProgressBar current={round} total={totalRounds} color="#14B8A6" />
                <div className="statusLine">⭐ {stars}</div>
                <button className="primary" onClick={() => onDone(Math.max(1, stars))}>Finish</button>
            </div>
        </div>
    );
}
