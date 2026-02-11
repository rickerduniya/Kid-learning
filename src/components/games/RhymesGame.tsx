import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AreaPill } from '../common/AreaPill';
import { useAudio } from '../../hooks/useAudio';
import { RHYMES } from '../../data/syllabus';

interface RhymesGameProps { onDone: (stars: number) => void; }

export function RhymesGame({ onDone }: RhymesGameProps) {
    const { speak, stop } = useAudio();
    const rhymes = useMemo(() => RHYMES, []);
    const [picked, setPicked] = useState(0);
    const [listened, setListened] = useState(false);
    const [fillMode, setFillMode] = useState(false);
    const [fillStars, setFillStars] = useState(0);

    useEffect(() => { speak('Pick a rhyme to sing!'); }, [speak]);

    const rhyme = rhymes[picked];
    const fillBlank = rhyme.fillBlanks[0];

    function singRhyme() {
        speak(rhyme.lines.join(' '));
        setListened(true);
    }

    return (
        <div className="screen">
            <div className="screenHeader">
                <AreaPill color="#8B5CF6">Rhymes</AreaPill>
                <div className="screenPrompt">🎵 Sing along!</div>
                <button className="secondary" onClick={() => speak('Pick a rhyme.')}>🔊</button>
            </div>

            <div className="tabs" role="tablist">
                {rhymes.map((r, i) => (
                    <button key={r.id}
                        className={i === picked ? 'tab active' : 'tab'}
                        onClick={() => { setPicked(i); setListened(false); setFillMode(false); stop(); }}>
                        {r.emoji} {r.title}
                    </button>
                ))}
            </div>

            {!fillMode ? (
                <div className="storyCard">
                    <div className="storyTitle">{rhyme.emoji} {rhyme.title}</div>
                    <div className="rhymeLines">
                        {rhyme.lines.map((line, i) => (
                            <motion.div key={i} className="rhymeLine"
                                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.15 }}>
                                {line}
                            </motion.div>
                        ))}
                    </div>
                    <div className="row" style={{ marginTop: '1rem' }}>
                        <button className="primary" onClick={singRhyme}>🎤 Sing</button>
                        <button className="secondary" onClick={() => stop()}>⏹️ Stop</button>
                        {listened && (
                            <motion.button className="primary" onClick={() => setFillMode(true)}
                                initial={{ scale: 0 }} animate={{ scale: 1 }}
                                style={{ background: '#8B5CF6', color: 'white' }}>
                                📝 Fill Blank
                            </motion.button>
                        )}
                    </div>
                </div>
            ) : (
                <div className="storyCard">
                    <div className="storyTitle">Fill the blank!</div>
                    <div className="rhymeLine" style={{ fontSize: '1.5rem', margin: '1rem 0' }}>{fillBlank.line}</div>
                    <div className="choiceGrid choiceGrid--3">
                        {fillBlank.options.map(opt => (
                            <motion.button key={opt} className="choiceBtn choiceBtn--word"
                                onClick={() => {
                                    if (opt === fillBlank.blank) {
                                        speak(`Yes! The word is ${fillBlank.blank}.`);
                                        setFillStars(s => s + 1);
                                        setTimeout(() => onDone(Math.max(1, fillStars + 1)), 600);
                                    } else speak('Try again.');
                                }} whileTap={{ scale: 0.9 }}>
                                {opt}
                            </motion.button>
                        ))}
                    </div>
                </div>
            )}

            <div className="screenFooter">
                <div className="statusLine">{listened ? '✅ Sang' : '🎧 Listen first'}</div>
                <button className="primary" onClick={() => onDone(listened ? 2 : 1)}>Finish</button>
            </div>
        </div>
    );
}
