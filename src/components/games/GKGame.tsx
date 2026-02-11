import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AreaPill } from '../common/AreaPill';
import { ProgressBar } from '../common/ProgressBar';
import { useAudio } from '../../hooks/useAudio';
import { FRUITS, VEGETABLES, DAYS, MONTHS, OPPOSITES, GOOD_HABITS, type SyllabusItem } from '../../data/syllabus';

interface GKGameProps { onDone: (stars: number) => void; }

type Topic = 'fruits' | 'veggies' | 'days' | 'opposites' | 'habits';
const TOPIC_LABELS: Record<Topic, string> = { fruits: '🍎 Fruits', veggies: '🥕 Vegetables', days: '📅 Days & Months', opposites: '↔️ Opposites', habits: '✅ Good Habits' };

export function GKGame({ onDone }: GKGameProps) {
    const { speak } = useAudio();
    const [topic, setTopic] = useState<Topic | null>(null);
    const [round, setRound] = useState(0);
    const [stars, setStars] = useState(0);
    const totalRounds = 5;

    useEffect(() => { if (!topic) speak('Pick a Smart Kids topic!'); }, [topic, speak]);

    function advance() {
        if (round + 1 >= totalRounds) {
            setTimeout(() => onDone(Math.max(1, stars + 1)), 500);
        } else { setRound(r => r + 1); }
    }

    if (!topic) {
        return (
            <div className="screen">
                <div className="screenHeader">
                    <AreaPill color="#06B6D4">Smart Kids</AreaPill>
                    <div className="screenPrompt">Pick a topic</div>
                </div>
                <div className="choiceGrid choiceGrid--3">
                    {(Object.keys(TOPIC_LABELS) as Topic[]).map(t => (
                        <motion.button key={t} className="choiceBtn choiceBtn--topic"
                            onClick={() => { setTopic(t); setRound(0); }}
                            whileTap={{ scale: 0.9 }}>
                            <span style={{ fontSize: '1.3rem' }}>{TOPIC_LABELS[t]}</span>
                        </motion.button>
                    ))}
                </div>
            </div>
        );
    }

    if (topic === 'fruits' || topic === 'veggies') {
        return <ItemQuiz items={topic === 'fruits' ? FRUITS : VEGETABLES} topic={TOPIC_LABELS[topic]} color="#06B6D4" round={round} totalRounds={totalRounds} stars={stars} setStars={setStars} advance={advance} onDone={onDone} onBack={() => setTopic(null)} />;
    }

    if (topic === 'days') {
        return <DaysMonthsQuiz round={round} totalRounds={totalRounds} stars={stars} setStars={setStars} advance={advance} onDone={onDone} onBack={() => setTopic(null)} />;
    }

    if (topic === 'opposites') {
        return <OppositesQuiz round={round} totalRounds={totalRounds} stars={stars} setStars={setStars} advance={advance} onDone={onDone} onBack={() => setTopic(null)} />;
    }

    return <HabitsExplore onDone={onDone} onBack={() => setTopic(null)} />;
}

function ItemQuiz({ items, topic, color, round, totalRounds, stars, setStars, advance, onDone, onBack }: { items: SyllabusItem[]; topic: string; color: string; round: number; totalRounds: number; stars: number; setStars: (fn: (s: number) => number) => void; advance: () => void; onDone: (s: number) => void; onBack: () => void }) {
    const { speak } = useAudio();
    const shuffled = useMemo(() => [...items].sort(() => Math.random() - 0.5), [items]);
    const target = shuffled[round % shuffled.length];
    const choices = useMemo(() => {
        const others = items.filter(i => i.id !== target.id).sort(() => Math.random() - 0.5).slice(0, 3);
        return [...others, target].sort(() => Math.random() - 0.5);
    }, [target, items]);

    useEffect(() => { speak(`Find the ${target.label}.`); }, [target, speak]);

    return (
        <div className="screen">
            <div className="screenHeader">
                <AreaPill color={color}>{topic}</AreaPill>
                <div className="screenPrompt">Find the {target.label}</div>
                <button className="secondary" onClick={() => speak(target.audio || target.label)}>🔊</button>
            </div>
            <div className="choiceGrid choiceGrid--4">
                {choices.map(c => (
                    <motion.button key={c.id} className="choiceBtn choiceBtn--evs"
                        onClick={() => {
                            if (c.id === target.id) { speak(`Yes! ${c.audio || c.label}`); setStars(s => s + 1); advance(); }
                            else speak('Try again.');
                        }} whileTap={{ scale: 0.9 }}>
                        <span className="choiceBtn__emoji">{c.emoji}</span>
                    </motion.button>
                ))}
            </div>
            <div className="screenFooter">
                <ProgressBar current={round} total={totalRounds} color={color} />
                <div className="statusLine">⭐ {stars}</div>
                <div className="row"><button className="secondary" onClick={onBack}>Topics</button><button className="primary" onClick={() => onDone(Math.max(1, stars))}>Finish</button></div>
            </div>
        </div>
    );
}

function DaysMonthsQuiz({ round, totalRounds, stars, setStars, advance, onDone, onBack }: { round: number; totalRounds: number; stars: number; setStars: (fn: (s: number) => number) => void; advance: () => void; onDone: (s: number) => void; onBack: () => void }) {
    const { speak } = useAudio();
    const isDay = round % 2 === 0;
    const list = isDay ? DAYS : MONTHS;
    const idx = Math.floor(Math.random() * (list.length - 1));
    const target = list[idx];
    const after = list[idx + 1];

    const choices = useMemo(() => {
        const others = list.filter(d => d !== after).sort(() => Math.random() - 0.5).slice(0, 2);
        return [...others, after].sort(() => Math.random() - 0.5);
    }, [after, list]);

    useEffect(() => { speak(`What comes after ${target}?`); }, [target, speak]);

    return (
        <div className="screen">
            <div className="screenHeader">
                <AreaPill color="#06B6D4">📅 Days & Months</AreaPill>
                <div className="screenPrompt">After {target}?</div>
                <button className="secondary" onClick={() => speak(`What comes after ${target}?`)}>🔊</button>
            </div>
            <div className="choiceGrid choiceGrid--3">
                {choices.map(c => (
                    <motion.button key={c} className="choiceBtn choiceBtn--word"
                        onClick={() => {
                            if (c === after) { speak(`Yes! ${after} comes after ${target}.`); setStars(s => s + 1); advance(); }
                            else speak('Try again.');
                        }} whileTap={{ scale: 0.9 }}>{c}</motion.button>
                ))}
            </div>
            <div className="screenFooter">
                <ProgressBar current={round} total={totalRounds} color="#06B6D4" />
                <div className="statusLine">⭐ {stars}</div>
                <div className="row"><button className="secondary" onClick={onBack}>Topics</button><button className="primary" onClick={() => onDone(Math.max(1, stars))}>Finish</button></div>
            </div>
        </div>
    );
}

function OppositesQuiz({ round, totalRounds, stars, setStars, advance, onDone, onBack }: { round: number; totalRounds: number; stars: number; setStars: (fn: (s: number) => number) => void; advance: () => void; onDone: (s: number) => void; onBack: () => void }) {
    const { speak } = useAudio();
    const pair = OPPOSITES[round % OPPOSITES.length];

    const choices = useMemo(() => {
        const others = OPPOSITES.filter(o => o.id !== pair.id).map(o => o.b).sort(() => Math.random() - 0.5).slice(0, 2);
        return [...others, pair.b].sort(() => Math.random() - 0.5);
    }, [pair]);

    useEffect(() => { speak(`What is the opposite of ${pair.a}?`); }, [pair, speak]);

    return (
        <div className="screen">
            <div className="screenHeader">
                <AreaPill color="#06B6D4">↔️ Opposites</AreaPill>
                <div className="screenPrompt">Opposite of {pair.emojiA} {pair.a}?</div>
                <button className="secondary" onClick={() => speak(`What is the opposite of ${pair.a}?`)}>🔊</button>
            </div>
            <div className="choiceGrid choiceGrid--3">
                {choices.map(c => (
                    <motion.button key={c} className="choiceBtn choiceBtn--word"
                        onClick={() => {
                            if (c === pair.b) { speak(`Yes! The opposite of ${pair.a} is ${pair.b}. ${pair.emojiA} and ${pair.emojiB}`); setStars(s => s + 1); advance(); }
                            else speak('Try again.');
                        }} whileTap={{ scale: 0.9 }}>{c}</motion.button>
                ))}
            </div>
            <div className="screenFooter">
                <ProgressBar current={round} total={totalRounds} color="#06B6D4" />
                <div className="statusLine">⭐ {stars}</div>
                <div className="row"><button className="secondary" onClick={onBack}>Topics</button><button className="primary" onClick={() => onDone(Math.max(1, stars))}>Finish</button></div>
            </div>
        </div>
    );
}

function HabitsExplore({ onDone, onBack }: { onDone: (s: number) => void; onBack: () => void }) {
    const { speak } = useAudio();
    useEffect(() => { speak('Let us learn about good habits!'); }, [speak]);

    return (
        <div className="screen">
            <div className="screenHeader">
                <AreaPill color="#06B6D4">✅ Good Habits</AreaPill>
                <div className="screenPrompt">Tap to learn!</div>
            </div>
            <div className="choiceGrid choiceGrid--4">
                {GOOD_HABITS.map(h => (
                    <motion.button key={h.id} className="choiceBtn choiceBtn--evs"
                        onClick={() => speak(h.audio || h.label)}
                        whileTap={{ scale: 0.9 }}>
                        <span className="choiceBtn__emoji">{h.emoji}</span>
                        <span className="choiceBtn__label">{h.label}</span>
                    </motion.button>
                ))}
            </div>
            <div className="screenFooter">
                <div className="statusLine">Tap each habit to hear about it!</div>
                <div className="row"><button className="secondary" onClick={onBack}>Topics</button><button className="primary" onClick={() => onDone(2)}>Finish</button></div>
            </div>
        </div>
    );
}
