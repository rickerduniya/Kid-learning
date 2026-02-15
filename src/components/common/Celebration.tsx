import { motion, AnimatePresence } from 'framer-motion';

interface CelebrationProps {
    title: string;
    detail: string;
    onClose: () => void;
}

export function Celebration({ title, detail, onClose }: CelebrationProps) {
    return (
        <AnimatePresence>
            <div className="celebrationOverlay" role="dialog" aria-modal="true" onClick={onClose}>
                <motion.div
                    className="celebrationCard"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <h2>{title}</h2>
                    <p>{detail}</p>
                    <motion.button
                        className="primary"
                        onClick={onClose}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Continue 🚀
                    </motion.button>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
