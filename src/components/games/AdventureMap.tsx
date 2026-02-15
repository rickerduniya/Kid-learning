import { useState, useRef, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CANDY_LEVELS, type MapLevel } from '../../data/questions';
import { useStore } from '../../store/useStore';
import { useAudio } from '../../hooks/useAudio';
import { AdventureLevel } from './AdventureLevel';

interface AdventureMapProps {
    onDone?: (stars: number) => void;
}

// Decorations scattered around
const DECORATIONS = [
    '🍬', '🍭', '🍫', '🧁', '🍪', '🍩', '🎈', '🌈', '✨', '⭐',
    '🪁', '🪔', '🐯', '🐘', '🐟', '🥭', '🍌', '🍎', '🔺', '⚫',
];

export function AdventureMap(props: AdventureMapProps) {
    const { speak, playSfx } = useAudio();
    const [playingLevel, setPlayingLevel] = useState<MapLevel | null>(null);
    const { adventureProgress, completeAdventureLevel, awardStars, awardSticker, awardBadge } = useStore();
    const scrollRef = useRef<HTMLDivElement>(null);

    const progress = adventureProgress['candy'] || { completedLevels: [], levelStars: {} };

    const totalLevels = CANDY_LEVELS.length;

    useEffect(() => {
        speak('Welcome to the Candy Adventure!');
    }, [speak]);

    // Scroll to current level on mount (bottom-to-top, so we scroll down to find it)
    useEffect(() => {
        if (!playingLevel && scrollRef.current) {
            const currentNode = scrollRef.current.querySelector('.adventureNode--current');
            if (currentNode) {
                setTimeout(() => {
                    currentNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 400);
            }
        }
    }, [playingLevel]);

    function isLevelUnlocked(level: MapLevel): boolean {
        if (level.levelNum === 1) return true;
        const prevLevel = CANDY_LEVELS.find(l => l.levelNum === level.levelNum - 1);
        return prevLevel ? progress.completedLevels.includes(prevLevel.id) : false;
    }

    function isLevelComplete(level: MapLevel): boolean {
        return progress.completedLevels.includes(level.id);
    }

    function getLevelStars(level: MapLevel): number {
        return progress.levelStars[level.id] || 0;
    }

    const totalStars = useMemo(() =>
        Object.values(progress.levelStars).reduce((a, b) => a + b, 0), [progress.levelStars]);

    const totalCompleted = progress.completedLevels.length;

    function handleLevelComplete(stars: number) {
        if (playingLevel) {
            completeAdventureLevel('candy', playingLevel.id, stars);
            awardStars(playingLevel.area, stars);
            if ('sticker' in playingLevel.reward && playingLevel.reward.sticker) {
                awardSticker(playingLevel.reward.sticker);
                playSfx('badge');
            }
            if ('badge' in playingLevel.reward && playingLevel.reward.badge) {
                awardBadge(playingLevel.reward.badge);
                playSfx('badge');
            }
            speak(`Amazing! You earned ${stars} stars!`, 'cheerful');
            if (playingLevel.levelNum === totalLevels) props.onDone?.(stars);
            setPlayingLevel(null);
        }
    }

    // If playing a level, show the level player
    if (playingLevel) {
        return (
            <AdventureLevel
                level={playingLevel}
                onComplete={handleLevelComplete}
                onBack={() => setPlayingLevel(null)}
            />
        );
    }

    // ── Bottom-to-top: Level 1 at bottom, last level at top ──
    // Reversed order for positioning: level 1 gets highest Y
    const nodeSpacing = 110;
    const pathHeight = totalLevels * nodeSpacing + 200;

    const levelPositions = CANDY_LEVELS.map((_, i) => {
        // i=0 (Level 1) → bottom, i=N-1 (Level N) → top
        const reversedI = totalLevels - 1 - i;
        const baseY = 100 + reversedI * nodeSpacing;
        const amplitude = 25;
        const xCenter = 50 + Math.sin(i * 0.85) * amplitude;
        return { x: xCenter, y: baseY };
    });

    // SVG path: draw from Level 1 (bottom) upward
    // We need to draw in visual order (top to bottom in SVG), so sort by Y
    const sortedPositions = [...levelPositions].sort((a, b) => a.y - b.y);
    const pathD = sortedPositions.reduce((d, pos, i) => {
        if (i === 0) return `M ${pos.x * 3.2} ${pos.y}`;
        const prev = sortedPositions[i - 1];
        const cpY = (prev.y + pos.y) / 2;
        return `${d} Q ${prev.x * 3.2} ${cpY} ${pos.x * 3.2} ${pos.y}`;
    }, '');

    return (
        <div className="adventureMapWrapper">
            {/* Header */}
            <div className="adventureHeader">
                <div className="adventureHeaderInfo">
                    <span className="adventureWorldTitle">🍬 Candy Adventure</span>
                    <span className="adventureStats">⭐ {totalStars} • ✅ {totalCompleted}/{totalLevels}</span>
                </div>
            </div>

            {/* Scrollable Map */}
            <div className="adventureMapScroll" ref={scrollRef}>
                <div className="adventureMapCanvas" style={{
                    height: `${pathHeight}px`,
                    background: 'linear-gradient(180deg, #1e1b4b 0%, #312e81 15%, #4338ca 30%, #6366f1 50%, #818cf8 70%, #a5b4fc 85%, #c7d2fe 100%)',
                }}>
                    {/* SVG Path */}
                    <svg className="adventurePathSvg" viewBox={`0 0 320 ${pathHeight}`} preserveAspectRatio="none">
                        <path d={pathD} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="30"
                            strokeLinecap="round" strokeLinejoin="round" />
                        <path d={pathD} fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="20"
                            strokeLinecap="round" strokeLinejoin="round" />
                        <path d={pathD} fill="none" stroke="#F472B6" strokeWidth="5"
                            strokeLinecap="round" strokeDasharray="14 10" opacity="0.6" />
                    </svg>

                    {/* Decorations */}
                    {DECORATIONS.map((emoji, i) => {
                        const yPos = 40 + i * (pathHeight / DECORATIONS.length);
                        const xPos = i % 2 === 0 ? (6 + (i * 3) % 15) : (82 + (i * 5) % 15);
                        if (yPos > pathHeight - 40) return null;
                        return (
                            <motion.div key={i} className="adventureDecor"
                                style={{ left: `${xPos}%`, top: `${yPos}px` }}
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.2 }}>
                                {emoji}
                            </motion.div>
                        );
                    })}

                    {/* Finish flag at top */}
                    <div className="adventureFinish" style={{ top: '30px' }}>
                        🏆
                    </div>

                    {/* Level Nodes */}
                    {CANDY_LEVELS.map((level, i) => {
                        const pos = levelPositions[i];
                        const unlocked = isLevelUnlocked(level);
                        const done = isLevelComplete(level);
                        const isCurrent = unlocked && !done;
                        const stars = getLevelStars(level);

                        return (
                            <motion.button key={level.id}
                                className={`adventureNode ${done ? 'adventureNode--done' :
                                        isCurrent ? 'adventureNode--current' :
                                            'adventureNode--locked'
                                    }`}
                                style={{
                                    left: `${pos.x}%`,
                                    top: `${pos.y}px`,
                                }}
                                onClick={() => {
                                    if (!unlocked) {
                                        speak('Complete the previous level first!');
                                        return;
                                    }
                                    setPlayingLevel(level);
                                }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: Math.abs(totalLevels - 1 - i) * 0.02, type: 'spring', stiffness: 300 }}
                                whileTap={unlocked ? { scale: 0.9 } : {}}>
                                {/* Subject badge */}
                                <div className="adventureNodeBadge" style={{ background: level.areaColor }}>
                                    {level.areaLabel}
                                </div>
                                {/* Node content */}
                                <span className="adventureNodeNum">
                                    {done ? '✓' : unlocked ? level.levelNum : '🔒'}
                                </span>
                                {/* Stars below */}
                                {done && (
                                    <div className="adventureNodeStars">
                                        {Array.from({ length: 3 }).map((_, si) => (
                                            <span key={si} className={si < stars ? 'nodeStar--on' : 'nodeStar--off'}>
                                                {si < stars ? '⭐' : '☆'}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                {/* Level title tooltip */}
                                <div className="adventureNodeLabel">{level.emoji} {level.title}</div>
                                {/* Current level character avatar */}
                                {isCurrent && (
                                    <motion.div className="adventureAvatar"
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ duration: 1.2, repeat: Infinity }}>
                                        🧒
                                    </motion.div>
                                )}
                            </motion.button>
                        );
                    })}

                    {/* Start banner at bottom */}
                    <div className="adventureStart" style={{ top: `${pathHeight - 60}px` }}>
                        🏁 START
                    </div>
                </div>
            </div>
        </div>
    );
}
