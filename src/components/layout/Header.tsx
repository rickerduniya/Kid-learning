import { useStore } from '../../store/useStore';
import { Volume2, VolumeX, Lock, Home } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
    onHome: () => void;
    onParent: () => void;
}

export function Header({ onHome, onParent }: HeaderProps) {
    const { stars, streak, audioEnabled, toggleAudio } = useStore();

    return (
        <header className="topBar">
            <motion.button
                className="iconButton"
                onClick={onHome}
                aria-label="Home"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Home size={24} />
            </motion.button>

            <div className="topBarCenter">
                <div className="appTitle">KG Learning Playground</div>
                <div className="appMeta">
                    <motion.span
                        className="metaItem"
                        key={stars}
                        initial={{ scale: 1.2, color: '#FACC15' }}
                        animate={{ scale: 1, color: 'inherit' }}
                    >
                        ⭐ {stars}
                    </motion.span>
                    <span className="metaItem">🔥 {streak.count}</span>
                </div>
            </div>

            <div className="topBarRight">
                <motion.button
                    className="iconButton"
                    onClick={toggleAudio}
                    aria-label="Audio"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {audioEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
                </motion.button>
                <motion.button
                    className="iconButton"
                    onClick={onParent}
                    aria-label="Parent"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Lock size={24} />
                </motion.button>
            </div>
        </header>
    );
}
