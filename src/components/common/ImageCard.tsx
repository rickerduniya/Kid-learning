import { motion } from 'framer-motion';
import { useAudio } from '../../hooks/useAudio';

interface ImageCardProps {
    label: string;
    emoji?: string;
    image?: string;
    audio?: string;
    selected?: boolean;
    correct?: boolean | null;
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
}

export function ImageCard({ label, emoji, audio, selected, correct, onClick, size = 'medium' }: ImageCardProps) {
    const { speak } = useAudio();

    const sizeClass = size === 'small' ? 'imgCard--sm' : size === 'large' ? 'imgCard--lg' : '';

    return (
        <motion.button
            className={`imgCard ${sizeClass} ${selected ? 'imgCard--selected' : ''} ${correct === true ? 'imgCard--correct' : ''} ${correct === false ? 'imgCard--wrong' : ''}`}
            onClick={() => {
                if (audio) speak(audio);
                onClick?.();
            }}
            whileTap={{ scale: 0.92 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
            {emoji && <div className="imgCard__emoji">{emoji}</div>}
            <div className="imgCard__label">{label}</div>
        </motion.button>
    );
}
