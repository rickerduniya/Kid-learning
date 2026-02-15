import type { ReactNode } from 'react';
import { Header } from './Header';

interface LayoutProps {
    children: ReactNode;
    onHome: () => void;
    onParent: () => void;
}

export function Layout({ children, onHome, onParent }: LayoutProps) {
    return (
        <div className="appShell">
            <Header onHome={onHome} onParent={onParent} />
            <main className="content">
                {children}
            </main>
        </div>
    );
}
