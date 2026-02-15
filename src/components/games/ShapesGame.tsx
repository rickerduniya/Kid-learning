import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { AreaPill } from '../common/AreaPill';
import { ProgressBar } from '../common/ProgressBar';
import { useAudio } from '../../hooks/useAudio';
import { SHAPES, COLORS } from '../../data/syllabus';

interface ShapesGameProps { onDone: (stars: number) => void; }

type Mode = 'shape' | 'color' | 'real';

function shuffleBySeed<T>(arr: T[], seed: number): T[] {
    return arr
        .map((v, i) => ({ v, k: (seed * 9301 + i * 49297) % 233280 }))
        .sort((a, b) => a.k - b.k)
        .map(x => x.v);
}

export function ShapesGame({ onDone }: ShapesGameProps) {
    const { speak } = useAudio();
    const [mode, setMode] = useState<Mode>('shape');
    const [round, setRound] = useState(0);
    const [stars, setStars] = useState(0);
    const totalRounds = 6;

    const shuffledShapes = useMemo(() => shuffleBySeed([...SHAPES], 121), []);
    const shuffledColors = useMemo(() => shuffleBySeed([...COLORS], 303), []);

    const shapeTarget = shuffledShapes[round % shuffledShapes.length];
    const colorTarget = shuffledColors[round % shuffledColors.length];

    const shapeChoices = useMemo(() => {
        const others = shuffleBySeed(SHAPES.filter(s => s.id !== shapeTarget.id), round + 11).slice(0, 3);
        return shuffleBySeed([...others, shapeTarget], round + 17);
    }, [round, shapeTarget]);

    const colorChoices = useMemo(() => {
        const others = shuffleBySeed(COLORS.filter(c => c.id !== colorTarget.id), round + 23).slice(0, 3);
        return shuffleBySeed([...others, colorTarget], round + 29);
    }, [colorTarget, round]);

    const speakPrompt = useCallback(() => {
        if (mode === 'shape') speak(`Find the ${shapeTarget.label}.`);
        else if (mode === 'color') speak(`Find the color ${colorTarget.label}.`);
        else speak(`What shape is a ${shapeTarget.realWorld?.split(',')[0]}?`);
    }, [mode, shapeTarget, colorTarget, speak]);

    useEffect(() => { speakPrompt(); }, [speakPrompt]);

    function advance() {
        if (round + 1 >= totalRounds) {
            setTimeout(() => onDone(Math.max(1, stars + 1)), 500);
        } else {
            setRound(r => r + 1);
            setMode(m => m === 'shape' ? 'color' : m === 'color' ? 'real' : 'shape');
        }
    }

    return (
        <div className="screen">
            <div className="screenHeader">
                <AreaPill color="#10B981">Shapes & Colors</AreaPill>
                <div className="screenPrompt">
                    {mode === 'shape' && `Find the ${shapeTarget.label}`}
                    {mode === 'color' && `Find the color ${colorTarget.label}`}
                    {mode === 'real' && `What shape is a ${shapeTarget.realWorld?.split(',')[0]}?`}
                </div>
                <button className="secondary" onClick={speakPrompt}>🔊</button>
            </div>

            {mode === 'shape' && (
                <div className="choiceGrid choiceGrid--4">
                    {shapeChoices.map(s => (
                        <motion.button key={s.id} className="choiceBtn choiceBtn--shape"
                            onClick={() => {
                                if (s.id === shapeTarget.id) { speak(`Yes! That is a ${s.label}.`); setStars(ss => ss + 1); advance(); }
                                else speak('Try again.');
                            }} whileTap={{ scale: 0.9 }}>
                            <ShapeIcon id={s.id} emoji={s.emoji} />
                        </motion.button>
                    ))}
                </div>
            )}

            {mode === 'color' && (
                <div className="choiceGrid choiceGrid--4">
                    {colorChoices.map(c => (
                        <motion.button key={c.id} className="choiceBtn choiceBtn--color"
                            onClick={() => {
                                if (c.id === colorTarget.id) { speak(`Yes! That is ${c.label}. ${c.things}`); setStars(ss => ss + 1); advance(); }
                                else speak('Try again.');
                            }} whileTap={{ scale: 0.9 }}>
                            <div className="colorSwatch" style={{ backgroundColor: c.hex }} />
                        </motion.button>
                    ))}
                </div>
            )}

            {mode === 'real' && (
                <>
                    <motion.div className="targetDisplay" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <span className="targetLabel">{shapeTarget.realWorld?.split(',')[0]}</span>
                    </motion.div>
                    <div className="choiceGrid choiceGrid--4">
                        {shapeChoices.map(s => (
                            <motion.button key={s.id} className="choiceBtn choiceBtn--shape"
                                onClick={() => {
                                    if (s.id === shapeTarget.id) { speak(`Correct! A ${shapeTarget.realWorld?.split(',')[0]} is a ${s.label}.`); setStars(ss => ss + 1); advance(); }
                                    else speak('Try again.');
                                }} whileTap={{ scale: 0.9 }}>
                                <ShapeIcon id={s.id} emoji={s.emoji} />
                            </motion.button>
                        ))}
                    </div>
                </>
            )}

            <div className="screenFooter">
                <ProgressBar current={round} total={totalRounds} color="#10B981" />
                <div className="statusLine">⭐ {stars}</div>
                <button className="primary" onClick={() => onDone(Math.max(1, stars))}>Finish</button>
            </div>
        </div>
    );
}

function ShapeIcon({ id, emoji }: { id: string; emoji?: string }) {
    const common = { stroke: 'currentColor', strokeWidth: 8, fill: 'none' };

    // Check if it's a 3D shape or missing SVG, return emoji
    if (['cube', 'sphere', 'cone', 'cylinder', 'pyramid', 'prism', 'teal', 'indigo'].includes(id) || !['circle', 'square', 'triangle', 'rectangle', 'oval', 'star', 'diamond', 'heart', 'crescent', 'hexagon', 'arrow', 'cross'].includes(id)) {
        return <span style={{ fontSize: '4rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}>{emoji}</span>;
    }

    return (
        <svg className="shapeIcon" viewBox="0 0 120 120" aria-hidden="true" style={{ width: 64, height: 64 }}>
            {id === 'circle' && <circle cx="60" cy="60" r="40" {...common} />}
            {id === 'square' && <rect x="25" y="25" width="70" height="70" rx="6" {...common} />}
            {id === 'triangle' && <path d="M60 20 L100 95 L20 95 Z" {...common} />}
            {id === 'rectangle' && <rect x="15" y="35" width="90" height="50" rx="6" {...common} />}
            {id === 'oval' && <ellipse cx="60" cy="60" rx="45" ry="30" {...common} />}
            {id === 'star' && <path d="M60 18 L72 46 L102 46 L78 64 L88 94 L60 76 L32 94 L42 64 L18 46 L48 46 Z" {...common} />}
            {id === 'diamond' && <path d="M60 15 L100 60 L60 105 L20 60 Z" {...common} />}
            {id === 'heart' && <path d="M60 95 C20 65 10 40 30 25 C45 15 55 25 60 35 C65 25 75 15 90 25 C110 40 100 65 60 95 Z" {...common} />}
            {id === 'crescent' && <path d="M70 20 A40 40 0 1 0 70 100 A30 30 0 1 1 70 20 Z" {...common} />}
            {id === 'hexagon' && <path d="M60 15 L100 35 L100 75 L60 95 L20 75 L20 35 Z" {...common} />}
            {id === 'arrow' && <path d="M20 60 L80 60 L65 40 M80 60 L65 80" {...common} />}
            {id === 'cross' && <path d="M60 20 L60 100 M20 60 L100 60" {...common} />}
        </svg>
    );
}
