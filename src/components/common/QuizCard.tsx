import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '../../hooks/useAudio';
import { ImageCard } from './ImageCard';

interface QuizOption {
    id: string;
    label: string;
    emoji?: string;
}

interface QuizCardProps {
    question: string;
    questionEmoji?: string;
    options: QuizOption[];
    correctId: string;
    onCorrect: () => void;
    onWrong?: () => void;
}

export function QuizCard({ question, questionEmoji, options, correctId, onCorrect, onWrong }: QuizCardProps) {
    const { speak } = useAudio();
    const [selected, setSelected] = useState<string | null>(null);
    const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

    useEffect(() => {
        speak(question);
    }, [question, speak]);

    function handlePick(id: string) {
        if (feedback) return;
        setSelected(id);
        if (id === correctId) {
            setFeedback('correct');
            speak('Yes! Great job!');
            setTimeout(() => onCorrect(), 800);
        } else {
            setFeedback('wrong');
            speak('Oops! Try again.');
            if (onWrong) onWrong();
            setTimeout(() => {
                setSelected(null);
                setFeedback(null);
            }, 600);
        }
    }

    return (
        <div className="quizCard">
            <div className="quizCard__question">
                {questionEmoji && <span className="quizCard__qEmoji">{questionEmoji}</span>}
                <span>{question}</span>
            </div>
            <div className="quizCard__options">
                <AnimatePresence mode="popLayout">
                    {options.map((o) => (
                        <ImageCard
                            key={o.id}
                            label={o.label}
                            emoji={o.emoji}
                            selected={selected === o.id}
                            correct={selected === o.id ? (feedback === 'correct' ? true : feedback === 'wrong' ? false : null) : null}
                            onClick={() => handlePick(o.id)}
                            size="medium"
                        />
                    ))}
                </AnimatePresence>
            </div>
            {feedback === 'correct' && (
                <motion.div className="quizCard__feedback quizCard__feedback--correct"
                    initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    ✅ Correct!
                </motion.div>
            )}
        </div>
    );
}
