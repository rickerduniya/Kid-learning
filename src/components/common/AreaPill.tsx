import type { ReactNode } from 'react';

interface AreaPillProps {
    color: string;
    children: ReactNode;
}

export function AreaPill({ color, children }: AreaPillProps) {
    return (
        <span className="pill" style={{ background: color }}>
            {children}
        </span>
    );
}
