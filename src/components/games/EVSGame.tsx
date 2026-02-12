import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { AreaPill } from '../common/AreaPill';
import { ProgressBar } from '../common/ProgressBar';
import { useAudio } from '../../hooks/useAudio';
import { ANIMALS, BODY_PARTS, SEASONS, TRANSPORT, COMMUNITY_HELPERS, PLANTS, SOLAR_SYSTEM, type SyllabusItem } from '../../data/syllabus';

interface EVSGameProps { onDone: (stars: number) => void; }

type Topic = 'animals' | 'body' | 'seasons' | 'transport' | 'helpers' | 'plants' | 'space';
const TOPICS: Topic[] = ['animals', 'body', 'seasons', 'transport', 'helpers', 'plants', 'space'];
const TOPIC_LABELS: Record<Topic, string> = { animals: '🐾 Animals', body: '🧍 Body Parts', seasons: '🌦️ Seasons', transport: '🚗 Transport', helpers: '👨‍⚕️ Helpers', plants: '🌱 Plants', space: '🚀 Space' };

function shuffleBySeed<T>(arr: T[], seed: number): T[] {
    return arr
        .map((v, i) => ({ v, k: (seed * 9301 + i * 49297) % 233280 }))
        .sort((a, b) => a.k - b.k)
        .map(x => x.v);
}

function getTopicData(topic: Topic): SyllabusItem[] {
    switch (topic) {
        case 'animals': return ANIMALS;
        case 'body': return BODY_PARTS;
        case 'seasons': return SEASONS;
        case 'transport': return TRANSPORT;
        case 'helpers': return COMMUNITY_HELPERS;
        case 'plants': return PLANTS;
        case 'space': return SOLAR_SYSTEM;
    }
}

export function EVSGame({ onDone }: EVSGameProps) {
    const { speak } = useAudio();
    const [topic, setTopic] = useState<Topic>('animals');
    const [topicPick, setTopicPick] = useState(false);
    const [round, setRound] = useState(0);
    const [stars, setStars] = useState(0);
    const totalRounds = 5;
    const topicSeed = TOPICS.indexOf(topic) + 1;

    const data = useMemo(() => getTopicData(topic), [topic]);
    const shuffled = useMemo(() => shuffleBySeed([...data], topicSeed * 101), [data, topicSeed]);
    const target = shuffled[round % shuffled.length];

    const choices = useMemo(() => {
        const others = shuffleBySeed(data.filter(d => d.id !== target.id), topicSeed * 211 + round).slice(0, 3);
        return shuffleBySeed([...others, target], topicSeed * 311 + round);
    }, [data, round, target, topicSeed]);

    const speakPrompt = useCallback(() => {
        speak(target.audio || `Find the ${target.label}.`);
    }, [target, speak]);

    useEffect(() => {
        if (!topicPick) { speak('Pick a topic to explore!'); }
        else { speakPrompt(); }
    }, [topicPick, speakPrompt, speak]);

    function advance() {
        if (round + 1 >= totalRounds) {
            setTimeout(() => onDone(Math.max(1, stars + 1)), 500);
        } else {
            setRound(r => r + 1);
        }
    }

    if (!topicPick) {
        return (
            <div className="screen">
                <div className="screenHeader">
                    <AreaPill color="#3B82F6">My World</AreaPill>
                    <div className="screenPrompt">Pick a topic</div>
                </div>
                <div className="choiceGrid choiceGrid--3">
                    {TOPICS.map(t => (
                        <motion.button key={t} className="choiceBtn choiceBtn--topic"
                            onClick={() => { setTopic(t); setTopicPick(true); setRound(0); }}
                            whileTap={{ scale: 0.9 }}>
                            <span style={{ fontSize: '1.5rem' }}>{TOPIC_LABELS[t]}</span>
                        </motion.button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="screen">
            <div className="screenHeader">
                <AreaPill color="#3B82F6">{TOPIC_LABELS[topic]}</AreaPill>
                <div className="screenPrompt">Find the {target.label}</div>
                <button className="secondary" onClick={speakPrompt}>🔊</button>
            </div>



            <div className="choiceGrid choiceGrid--4">
                {choices.map(c => (
                    <motion.button key={c.id} className="choiceBtn choiceBtn--evs"
                        onClick={() => {
                            if (c.id === target.id) {
                                speak(`Yes! ${c.audio || c.label}`);
                                setStars(s => s + 1); advance();
                            } else speak('Try again.');
                        }} whileTap={{ scale: 0.9 }}>
                        <span className="choiceBtn__emoji">{c.emoji}</span>
                    </motion.button>
                ))}
            </div>

            <div className="screenFooter">
                <ProgressBar current={round} total={totalRounds} color="#3B82F6" />
                <div className="statusLine">⭐ {stars}</div>
                <div className="row">
                    <button className="secondary" onClick={() => setTopicPick(false)}>Topics</button>
                    <button className="primary" onClick={() => onDone(Math.max(1, stars))}>Finish</button>
                </div>
            </div>
        </div>
    );
}
