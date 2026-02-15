import { motion } from 'framer-motion';

interface ProgressBarProps {
    current: number;
    total: number;
    color?: string;
    label?: string;
}

export function ProgressBar({ current, total, color = '#FACC15', label }: ProgressBarProps) {
    const pct = total > 0 ? Math.min((current / total) * 100, 100) : 0;
    return (
        <div className="progressBar">
            {label && <div className="progressBar__label">{label}</div>}
            <div className="progressBar__track">
                <motion.div
                    className="progressBar__fill"
                    style={{ backgroundColor: color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />
            </div>
            <div className="progressBar__text">{current}/{total}</div>
        </div>
    );
}
