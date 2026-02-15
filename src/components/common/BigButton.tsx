import { motion } from 'framer-motion';

interface BigButtonProps {
    title: string;
    subtitle: string;
    color: string;
    onClick: () => void;
    icon?: React.ReactNode;
}

export function BigButton({ title, subtitle, color, onClick, icon }: BigButtonProps) {
    return (
        <motion.button
            className="bigButton"
            onClick={onClick}
            style={{ background: `linear-gradient(135deg, ${color}, ${color}dd)` }}
            whileHover={{ scale: 1.05, boxShadow: "0 12px 28px -5px rgba(0, 0, 0, 0.15)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {icon && <div className="bigButton__icon">{icon}</div>}
            <div className="bigButton__title">{title}</div>
            <div className="bigButton__subtitle">{subtitle}</div>
        </motion.button>
    );
}
