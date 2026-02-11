import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { AreaPill } from '../common/AreaPill';
import { ProgressBar } from '../common/ProgressBar';
import { useAudio } from '../../hooks/useAudio';
import { EMOTIONS, SAFETY_RULES } from '../../data/syllabus';

interface EmotionsGameProps { onDone: (stars: number) => void; }

type Mode = 'identify' | 'scenario' | 'safety';

const SCENARIOS = [
    { text: 'Your friend shares their toy with you.', answer: 'happy', emoji: '🧸' },
    { text: 'You lost your favorite crayon.', answer: 'sad', emoji: '🖍️' },
    { text: 'Someone took your seat.', answer: 'angry', emoji: '💺' },
    { text: 'You hear a loud noise at night.', answer: 'scared', emoji: '🌙' },
    { text: 'You get a surprise birthday cake!', answer: 'surprised', emoji: '🎂' },
    { text: 'You finished a painting all by yourself.', answer: 'proud', emoji: '🎨' },
    { text: 'Mom gives you a big hug.', answer: 'loved', emoji: '🤗' },
    { text: 'You played all day and feel sleepy.', answer: 'tired', emoji: '😴' },
];

export function EmotionsGame({ onDone }: EmotionsGameProps) {
    const { speak } = useAudio();
    const [mode, setMode] = useState<Mode>('identify');
    const [round, setRound] = useState(0);
    const [stars, setStars] = useState(0);
    const totalRounds = 6;

    const shuffledEmotions = useMemo(() => [...EMOTIONS].sort(() => Math.random() - 0.5), []);
    const target = shuffledEmotions[round % shuffledEmotions.length];

    const scenario = SCENARIOS[round % SCENARIOS.length];
    const safetyItem = SAFETY_RULES[round % SAFETY_RULES.length];

    const choices = useMemo(() => {
        const others = EMOTIONS.filter(e => e.id !== target.id).sort(() => Math.random() - 0.5).slice(0, 3);
        return [...others, target].sort(() => Math.random() - 0.5);
    }, [target]);

    const scenarioChoices = useMemo(() => {
        const correct = EMOTIONS.find(e => e.id === scenario.answer)!;
        const others = EMOTIONS.filter(e => e.id !== scenario.answer).sort(() => Math.random() - 0.5).slice(0, 3);
        return [...others, correct].sort(() => Math.random() - 0.5);
    }, [scenario]);

    useEffect(() => {
        if (mode === 'identify') speak(`Which emoji shows ${target.label}?`);
        else if (mode === 'scenario') speak(scenario.text + ' How would you feel?');
        else speak(safetyItem.audio || safetyItem.label);
    }, [mode, target, scenario, safetyItem, speak]);

    function advance() {
        if (round + 1 >= totalRounds) {
            setTimeout(() => onDone(Math.max(1, stars + 1)), 500);
        } else {
            setRound(r => r + 1);
            setMode(m => m === 'identify' ? 'scenario' : m === 'scenario' ? 'safety' : 'identify');
        }
    }

    return (
        <div className="screen">
            <div className="screenHeader">
                <AreaPill color="#2DD4BF">Feelings</AreaPill>
                <div className="screenPrompt">
                    {mode === 'identify' && `Which emoji shows ${target.label}?`}
                    {mode === 'scenario' && `How do you feel?`}
                    {mode === 'safety' && `Safety Rule`}
                </div>
                <button className="secondary" onClick={() => {
                    if (mode === 'identify') speak(`Which emoji shows ${target.label}?`);
                    else if (mode === 'scenario') speak(scenario.text);
                    else speak(safetyItem.audio || safetyItem.label);
                }}>🔊</button>
            </div>

            {mode === 'identify' && (
                <div className="choiceGrid choiceGrid--4">
                    {choices.map(e => (
                        <motion.button key={e.id} className="choiceBtn choiceBtn--emotion"
                            onClick={() => {
                                if (e.id === target.id) { speak(`Yes! This is ${e.label}. ${e.audio}`); setStars(s => s + 1); advance(); }
                                else speak('Try again.');
                            }} whileTap={{ scale: 0.9 }}>
                            <span className="choiceBtn__emoji">{e.emoji}</span>
                        </motion.button>
                    ))}
                </div>
            )}

            {mode === 'scenario' && (
                <>
                    <motion.div className="scenarioCard" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="scenarioEmoji">{scenario.emoji}</span>
                        <span className="scenarioText">{scenario.text}</span>
                    </motion.div>
                    <div className="choiceGrid choiceGrid--4">
                        {scenarioChoices.map(e => (
                            <motion.button key={e.id} className="choiceBtn choiceBtn--emotion"
                                onClick={() => {
                                    if (e.id === scenario.answer) { speak(`Yes! You would feel ${e.label}.`); setStars(s => s + 1); advance(); }
                                    else speak('Think again. How would you feel?');
                                }} whileTap={{ scale: 0.9 }}>
                                <span className="choiceBtn__emoji">{e.emoji}</span>
                                <span className="choiceBtn__label">{e.label}</span>
                            </motion.button>
                        ))}
                    </div>
                </>
            )}

            {mode === 'safety' && (
                <motion.div className="safetyCard" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
                    <span className="safetyEmoji">{safetyItem.emoji}</span>
                    <span className="safetyTitle">{safetyItem.label}</span>
                    <span className="safetyAudio">{safetyItem.audio}</span>
                    <button className="primary" onClick={() => { speak('Great! Remember this rule.'); setStars(s => s + 1); advance(); }} style={{ marginTop: '1rem' }}>
                        I understand! ✅
                    </button>
                </motion.div>
            )}

            <div className="screenFooter">
                <ProgressBar current={round} total={totalRounds} color="#2DD4BF" />
                <div className="statusLine">⭐ {stars}</div>
                <button className="primary" onClick={() => onDone(Math.max(1, stars))}>Finish</button>
            </div>
        </div>
    );
}
