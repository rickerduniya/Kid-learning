import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '../../hooks/useAudio';
import type { MapQuestion, MapLevel } from '../../data/questions';

interface AdventureLevelProps {
    level: MapLevel;
    onComplete: (stars: number) => void;
    onBack: () => void;
}

export function AdventureLevel({ level, onComplete, onBack }: AdventureLevelProps) {
    const { speak, playSfx } = useAudio();
    const [qIndex, setQIndex] = useState(0);
    const [stars, setStars] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [showResult, setShowResult] = useState<'correct' | 'wrong' | null>(null);
    const [completed, setCompleted] = useState(false);

    const question: MapQuestion = level.questions[qIndex];
    const total = level.questions.length;

    const speakPrompt = useCallback(() => {
        speak(question.prompt);
    }, [question, speak]);

    useEffect(() => { speakPrompt(); }, [speakPrompt]);

    async function handleAnswer(idx: number) {
        if (showResult) return;
        setSelected(idx);

        if (idx === question.correctIndex) {
            setShowResult('correct');
            playSfx('correct');
            setStars(s => s + 1);
            await speak(question.explanation, 'cheerful');
            // Speech finished — now advance
            if (qIndex + 1 >= total) {
                setCompleted(true);
            } else {
                setQIndex(q => q + 1);
                setSelected(null);
                setShowResult(null);
            }
        } else {
            setShowResult('wrong');
            playSfx('wrong');
            await speak('Oops! Try again.', 'encouraging');
            setSelected(null);
            setShowResult(null);
        }
    }

    if (completed) {
        const earned = Math.max(1, Math.min(3, Math.ceil(stars * 3 / total)));
        return (
            <div className="adventureLevelComplete">
                <motion.div className="levelCompleteCard"
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200 }}>
                    <div className="levelCompleteEmoji">🎉</div>
                    <motion.div
                        className="levelConfetti"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        {Array.from({ length: 14 }).map((_, i) => (
                            <motion.span
                                key={i}
                                className="levelConfettiPiece"
                                initial={{ y: -10, x: 0, rotate: 0, opacity: 0 }}
                                animate={{
                                    y: [0, 70 + (i % 5) * 10],
                                    x: [-40 + (i % 7) * 12, -30 + (i % 9) * 10],
                                    rotate: [0, (i % 2 ? 180 : -180)],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{ duration: 1.4, delay: 0.1 + i * 0.03, ease: 'easeOut' }}
                            >
                                {['🍬', '🍭', '🎊', '✨', '⭐', '🎈'][i % 6]}
                            </motion.span>
                        ))}
                    </motion.div>
                    <h2 className="levelCompleteTitle">Level {level.levelNum} Complete!</h2>
                    <div className="levelCompleteStars">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <motion.span key={i} className={`levelStar ${i < earned ? 'levelStar--earned' : ''}`}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.3 + i * 0.2, type: 'spring' }}>
                                {i < earned ? '⭐' : '☆'}
                            </motion.span>
                        ))}
                    </div>
                    <p className="levelCompleteScore">{stars}/{total} correct</p>
                    {'sticker' in level.reward && level.reward.sticker && (
                        <div className="levelCompleteSticker">
                            <span className="levelCompleteStickerEmoji">{level.reward.sticker}</span>
                            <span className="levelCompleteStickerText">New sticker!</span>
                        </div>
                    )}
                    <motion.button className="primary levelCompleteBtn"
                        onClick={() => { playSfx('win'); onComplete(earned); }}
                        whileTap={{ scale: 0.95 }}>
                        🗺️ Back to Map
                    </motion.button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="adventureLevel">
            {/* Header */}
            <div className="levelHeader">
                <button className="levelBackBtn" onClick={onBack}>←</button>
                <div className="levelInfo">
                    <span className="levelEmoji">{level.emoji}</span>
                    <span className="levelTitle">Level {level.levelNum}: {level.title}</span>
                </div>
                <div className="levelProgress">
                    {Array.from({ length: total }).map((_, i) => (
                        <div key={i} className={`levelDot ${i < qIndex ? 'levelDot--done' : i === qIndex ? 'levelDot--current' : ''}`} />
                    ))}
                </div>
            </div>

            {/* Question */}
            <AnimatePresence mode="wait">
                <motion.div key={question.id} className="levelQuestion"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}>

                    {question.emoji && (
                        <div className="levelQuestionEmoji">{question.emoji}</div>
                    )}

                    <div className="levelQuestionPrompt">
                        {question.prompt}
                        <button className="levelSpeakBtn" onClick={speakPrompt}>🔊</button>
                    </div>

                    <div className="levelOptions">
                        {question.options.map((opt, i) => (
                            <motion.button key={i}
                                className={`levelOption ${selected === i
                                    ? showResult === 'correct' ? 'levelOption--correct'
                                        : showResult === 'wrong' ? 'levelOption--wrong'
                                            : ''
                                    : ''
                                    }`}
                                onClick={() => handleAnswer(i)}
                                whileTap={{ scale: 0.93 }}
                                layout>
                                {opt}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Footer */}
            <div className="levelFooter">
                <div className="levelStarsCount">⭐ {stars}</div>
                <div className="levelQCount">{qIndex + 1} / {total}</div>
            </div>
        </div>
    );
}
