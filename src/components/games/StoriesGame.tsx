import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AreaPill } from '../common/AreaPill';
import { useAudio } from '../../hooks/useAudio';
import { STORIES, type Story } from '../../data/syllabus';

interface StoriesGameProps { onDone: (stars: number) => void; }

export function StoriesGame({ onDone }: StoriesGameProps) {
    const { speak, stop } = useAudio();
    const stories = useMemo(() => STORIES, []);
    const [picked, setPicked] = useState(0);
    const [listened, setListened] = useState(false);
    const [quizMode, setQuizMode] = useState(false);
    const [qIdx, setQIdx] = useState(0);
    const [qStars, setQStars] = useState(0);

    useEffect(() => { speak('Pick a story to listen!', 'cheerful'); }, [speak]);

    const story = stories[picked];
    const question = story.questions[qIdx];

    function startQuiz() {
        setQuizMode(true);
        setQIdx(0);
        setQStars(0);
        speak(question?.q || 'Answer the questions.', 'encouraging');
    }

    function answerQuiz(optIdx: number) {
        if (!question) return;
        if (optIdx === question.answer) {
            speak('Correct!', 'cheerful');
            setQStars(s => s + 1);
        } else {
            speak(`The answer is: ${question.options[question.answer]}.`, 'encouraging');
        }
        if (qIdx + 1 < story.questions.length) {
            setQIdx(i => i + 1);
        } else {
            setTimeout(() => onDone(Math.max(1, qStars + (optIdx === question.answer ? 1 : 0))), 800);
        }
    }

    useEffect(() => {
        if (quizMode && question) speak(question.q);
    }, [qIdx, quizMode, question, speak]);

    if (quizMode && question) {
        return (
            <div className="screen">
                <div className="screenHeader">
                    <AreaPill color="#FB923C">Quiz</AreaPill>
                    <div className="screenPrompt">{story.emoji} {story.title}</div>
                </div>
                <div className="quizCard">
                    <div className="quizCard__question">
                        <span>{question.q}</span>
                    </div>
                    <div className="choiceGrid choiceGrid--3">
                        {question.options.map((opt, i) => (
                            <motion.button key={i} className="choiceBtn choiceBtn--word"
                                onClick={() => answerQuiz(i)} whileTap={{ scale: 0.9 }}>
                                {opt}
                            </motion.button>
                        ))}
                    </div>
                </div>
                <div className="screenFooter">
                    <div className="statusLine">⭐ {qStars}</div>
                </div>
            </div>
        );
    }

    return (
        <div className="screen">
            <div className="screenHeader">
                <AreaPill color="#FB923C">Story Time</AreaPill>
                <div className="screenPrompt">Listen & learn</div>
                <button className="secondary" onClick={() => speak('Pick a story.')}>🔊</button>
            </div>

            <div className="tabs" role="tablist">
                {stories.map((s, i) => (
                    <button key={s.id}
                        className={i === picked ? 'tab active' : 'tab'}
                        onClick={() => { setPicked(i); setListened(false); stop(); setQuizMode(false); }}>
                        {s.emoji} {s.title}
                    </button>
                ))}
            </div>

            <div className="storyCard">
                <div className="storyTitle">{story.emoji} {story.title}</div>
                <div className="storyText">{story.text}</div>
                <div className="storyMoral">💡 Moral: {story.moral}</div>
                <div className="row" style={{ marginTop: '1rem' }}>
                    <button className="primary" onClick={() => { speak(story.text, 'calm'); setListened(true); }}>▶️ Play</button>
                    <button className="secondary" onClick={() => stop()}>⏹️ Stop</button>
                    {listened && (
                        <motion.button className="primary" onClick={startQuiz}
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            style={{ background: '#F97316' }}>
                            📝 Quiz
                        </motion.button>
                    )}
                </div>
            </div>

            <div className="screenFooter">
                <div className="statusLine">{listened ? '✅ Listened' : '🎧 Listen first'}</div>
                <button className="primary" onClick={() => onDone(listened ? 2 : 1)}>Finish</button>
            </div>
        </div>
    );
}
