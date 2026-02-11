import { useState } from 'react';
import { useStore } from '../../store/useStore';
import { AREAS } from '../../data/syllabus';
import { AreaPill } from '../common/AreaPill';
import { useAudio } from '../../hooks/useAudio';

interface ParentScreenProps {
    onLock: () => void;
    onReset: () => void;
}

export function ParentScreen({ onLock, onReset }: ParentScreenProps) {
    const {
        parent,
        focusAreas,
        dailyLimitMinutes,
        toggleFocusArea,
        setDailyLimit,
        setParentPin,
    } = useStore();
    const { speak } = useAudio();
    const [pinEntry, setPinEntry] = useState('');
    const [limitText, setLimitText] = useState(String(dailyLimitMinutes));
    const [pinMode, setPinMode] = useState<'locked' | 'unlocked'>('locked');

    async function sha256Hex(input: string) {
        const data = new TextEncoder().encode(input);
        const digest = await crypto.subtle.digest('SHA-256', data);
        const bytes = Array.from(new Uint8Array(digest));
        return bytes.map((b) => b.toString(16).padStart(2, '0')).join('');
    }

    async function submitPin() {
        const pin = pinEntry.trim();
        if (!pin) return;

        // Set new PIN
        if (!parent.pinHashHex || !parent.pinSalt) {
            const salt = crypto.getRandomValues(new Uint8Array(16));
            const saltHex = Array.from(salt).map((b) => b.toString(16).padStart(2, '0')).join('');
            const hash = await sha256Hex(`${saltHex}:${pin}`);
            setParentPin(saltHex, hash);
            setPinMode('unlocked');
            setPinEntry('');
            speak('Parent lock is set.');
            return;
        }

        // Check existing PIN
        const hash = await sha256Hex(`${parent.pinSalt}:${pin}`);
        if (hash === parent.pinHashHex) {
            setPinMode('unlocked');
            setPinEntry('');
            speak('Welcome, parent.');
        } else {
            setPinEntry('');
            speak('Try again.');
        }
    }

    const onDigit = (d: string) => setPinEntry((v) => (v + d).slice(0, 6));
    const onBackspace = () => setPinEntry((v) => v.slice(0, -1));

    if (pinMode === 'locked' && parent.pinHashHex) {
        return (
            <div className="screen">
                <div className="screenHeader">
                    <AreaPill color="#111827">Parent</AreaPill>
                    <div className="screenPrompt">Enter PIN</div>
                </div>

                <div className="pinCard">
                    <div className="pinDots" aria-label="PIN entry">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className={i < pinEntry.length ? 'pinDot filled' : 'pinDot'} />
                        ))}
                    </div>

                    <div className="pinPad" aria-label="PIN keypad">
                        {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((d) => (
                            <button key={d} className="choice" onClick={() => onDigit(d)}>
                                {d}
                            </button>
                        ))}
                        <button className="choice" onClick={onBackspace}>
                            Del
                        </button>
                        <button className="choice" onClick={() => onDigit('0')}>
                            0
                        </button>
                        <button className="choice" onClick={submitPin}>
                            OK
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="screen">
            <div className="screenHeader">
                <AreaPill color="#111827">Parent</AreaPill>
                <div className="screenPrompt">Settings & dashboard</div>
                <button className="secondary" onClick={onLock}>
                    Lock
                </button>
            </div>

            {!parent.pinHashHex && (
                <div className="infoCard">
                    <div className="infoTitle">Set a Parent PIN</div>
                    <div className="infoText">Type a new PIN and press OK. This locks the Parent area on this device.</div>
                    <div className="pinRow">
                        <input
                            className="pinInput"
                            inputMode="numeric"
                            value={pinEntry}
                            onChange={(e) => {
                                const onlyDigits = e.target.value.replaceAll(/[^\d]/g, '').slice(0, 6);
                                setPinEntry(onlyDigits);
                            }}
                            placeholder="Enter PIN (digits)"
                            aria-label="New PIN"
                        />
                        <button className="primary" onClick={submitPin}>
                            OK
                        </button>
                    </div>
                </div>
            )}

            <div className="sectionTitle">Focus areas</div>
            <div className="focusGrid">
                {AREAS.map((a) => {
                    const enabled = focusAreas.includes(a.area);
                    return (
                        <button
                            key={a.area}
                            className={enabled ? 'focusChip on' : 'focusChip'}
                            onClick={() => toggleFocusArea(a.area)}
                            style={{ borderColor: a.color }}
                        >
                            {a.title}
                        </button>
                    );
                })}
            </div>

            <div className="sectionTitle">Screen-time balance</div>
            <div className="row">
                <input
                    className="textInput"
                    inputMode="numeric"
                    value={limitText}
                    onChange={(e) => setLimitText(e.target.value.replaceAll(/[^\d]/g, '').slice(0, 2))}
                    aria-label="Daily minutes"
                />
                <button
                    className="secondary"
                    onClick={() => {
                        const n = Number.parseInt(limitText, 10);
                        if (!Number.isFinite(n)) return;
                        setDailyLimit(n);
                    }}
                >
                    Set minutes/day
                </button>
            </div>

            <div className="sectionTitle">Device data</div>
            <div className="row">
                <button className="danger" onClick={onReset}>
                    Reset Progress
                </button>
            </div>
        </div>
    );
}
