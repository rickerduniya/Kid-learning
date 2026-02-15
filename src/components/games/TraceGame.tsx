import { useState, useRef, useMemo, useEffect, useCallback } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import { AreaPill } from '../common/AreaPill';
import { useAudio } from '../../hooks/useAudio';

interface TraceGameProps {
    onDone: (stars: number) => void;
}

function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
}

export function TraceGame({ onDone }: TraceGameProps) {
    const { speak } = useAudio();
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const drawing = useRef(false);
    const last = useRef<{ x: number; y: number } | null>(null);
    const prompts = useMemo(() => ['A', 'B', 'C', '1', '2', '3', 'S', 'M'], []);
    const [promptIndex, setPromptIndex] = useState(0);
    const prompt = prompts[promptIndex] ?? 'A';
    const [strokes, setStrokes] = useState(0);

    useEffect(() => {
        speak(`Trace ${prompt}. Use your finger.`);
    }, [prompt, speak]);

    const resizeCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const ratio = window.devicePixelRatio || 1;
        canvas.width = Math.round(rect.width * ratio);
        canvas.height = Math.round(rect.height * ratio);
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        ctx.clearRect(0, 0, rect.width, rect.height);
        ctx.fillStyle = '#F8FAFC';
        ctx.fillRect(0, 0, rect.width, rect.height);
        ctx.fillStyle = 'rgba(15, 23, 42, 0.10)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '700 180px system-ui';
        ctx.fillText(prompt, rect.width / 2, rect.height / 2 + 8);
    }, [prompt]);

    useEffect(() => {
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        return () => window.removeEventListener('resize', resizeCanvas);
    }, [resizeCanvas]);

    function pointerPos(e: ReactPointerEvent<HTMLCanvasElement>) {
        const canvas = canvasRef.current;
        if (!canvas) return { x: 0, y: 0 };
        const rect = canvas.getBoundingClientRect();
        return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    function drawLine(from: { x: number; y: number }, to: { x: number; y: number }) {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.strokeStyle = '#0F172A';
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
    }

    function clear() {
        setStrokes(0);
        resizeCanvas();
    }

    function newPrompt() {
        clear();
        setPromptIndex((i) => (i + 1) % prompts.length);
    }

    return (
        <div className="screen">
            <div className="screenHeader">
                <AreaPill color="#F472B6">Trace</AreaPill>
                <div className="screenPrompt">Trace: {prompt}</div>
                <button className="secondary" onClick={() => speak(`Trace ${prompt}. Use your finger.`)}>
                    Repeat
                </button>
            </div>

            <div className="traceWrap">
                <canvas
                    ref={canvasRef}
                    className="traceCanvas"
                    onPointerDown={(e) => {
                        drawing.current = true;
                        const p = pointerPos(e);
                        last.current = p;
                        setStrokes((s) => s + 1);
                    }}
                    onPointerMove={(e) => {
                        if (!drawing.current) return;
                        const p = pointerPos(e);
                        if (last.current) drawLine(last.current, p);
                        last.current = p;
                    }}
                    onPointerUp={() => {
                        drawing.current = false;
                        last.current = null;
                    }}
                    onPointerCancel={() => {
                        drawing.current = false;
                        last.current = null;
                    }}
                />
            </div>

            <div className="screenFooter">
                <div className="statusLine">Strokes: {strokes}</div>
                <div className="row">
                    <button className="secondary" onClick={clear}>
                        Clear
                    </button>
                    <button className="secondary" onClick={newPrompt}>
                        New
                    </button>
                    <button className="primary" onClick={() => onDone(clamp(Math.floor(strokes / 2), 1, 5))}>
                        Finish
                    </button>
                </div>
            </div>
        </div>
    );
}
