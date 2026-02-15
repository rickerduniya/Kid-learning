import { useCallback, useEffect, useRef } from 'react';
import { useStore } from '../store/useStore';

// ─── Emotion types & presets ────────────────────────────────────────
export type SpeechEmotion =
    | 'cheerful'     // "Correct! Great job!"
    | 'encouraging'  // "Try again, you can do it!"
    | 'calm'         // Story narration, instructions
    | 'excited'      // "Wow! 10 stars!"
    | 'sad'          // "Oops, that's not right"
    | 'neutral';     // Default

interface EmotionPreset {
    rate: number;
    pitch: number;
    volume: number;
}

const EMOTION_PRESETS: Record<SpeechEmotion, EmotionPreset> = {
    cheerful: { rate: 1.0, pitch: 1.25, volume: 1.0 },
    encouraging: { rate: 0.92, pitch: 1.15, volume: 1.0 },
    calm: { rate: 0.85, pitch: 1.0, volume: 0.9 },
    excited: { rate: 1.05, pitch: 1.35, volume: 1.0 },
    sad: { rate: 0.8, pitch: 0.9, volume: 0.85 },
    neutral: { rate: 0.9, pitch: 1.1, volume: 1.0 },
};

// ─── Auto-detect emotion from text ─────────────────────────────────
const CHEERFUL_PATTERNS = /\b(correct|yes!|great|good job|well done|awesome|wonderful|fantastic|bravo|perfect|yay)\b/i;
const ENCOURAGING_PATTERNS = /\b(try again|almost|keep going|you can|don'?t give up|one more|close)\b/i;
const EXCITED_PATTERNS = /\b(wow|amazing|incredible|superstar|champion|streak)\b/i;
const SAD_PATTERNS = /\b(oops|wrong|not right|sorry|no,|incorrect)\b/i;
const CALM_PATTERNS = /\b(once upon|long ago|one day|listen|story|the end|moral|let me tell|pick a)\b/i;

function detectEmotion(text: string): SpeechEmotion {
    if (CHEERFUL_PATTERNS.test(text)) return 'cheerful';
    if (EXCITED_PATTERNS.test(text)) return 'excited';
    if (ENCOURAGING_PATTERNS.test(text)) return 'encouraging';
    if (SAD_PATTERNS.test(text)) return 'sad';
    if (CALM_PATTERNS.test(text)) return 'calm';
    // Long text → assume narration
    if (text.length > 100) return 'calm';
    return 'neutral';
}

// ─── Text preprocessing ────────────────────────────────────────────
// Strip emoji so the browser doesn't read their Unicode names out loud
const EMOJI_RE = /(?:\p{Extended_Pictographic}|\uFE0F|\u200D)/gu;

function cleanTextForSpeech(text: string): string {
    return text
        .replace(EMOJI_RE, '')           // remove emoji
        .replace(/\s{2,}/g, ' ')         // collapse whitespace
        .replace(/([.!?])\s*/g, '$1 ')   // normalize sentence separators
        .trim();
}

// ─── Voice selection engine ─────────────────────────────────────────
// Ranked list of known high-quality voices (neural / cloud-backed)
const PREFERRED_VOICE_NAMES = [
    // Google neural voices (Chrome)
    'Google US English',
    'Google UK English Female',
    'Google UK English Male',
    // Microsoft neural voices (Edge / Windows 11)
    'Microsoft Jenny Online (Natural)',
    'Microsoft Aria Online (Natural)',
    'Microsoft Guy Online (Natural)',
    'Microsoft Jenny',
    'Microsoft Aria',
    'Microsoft Zira',
    'Microsoft Mark',
    // macOS
    'Samantha',
    'Karen',
    'Daniel',
    // Generic fallback names
    'English Female',
    'English Male',
];

let cachedVoice: SpeechSynthesisVoice | null = null;
let voicesLoaded = false;

function pickBestVoice(): SpeechSynthesisVoice | null {
    if (cachedVoice && voicesLoaded) return cachedVoice;

    const voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) return null;

    voicesLoaded = true;

    // 1. Try exact name matches from our preference list
    for (const preferred of PREFERRED_VOICE_NAMES) {
        const match = voices.find(v =>
            v.name.toLowerCase().includes(preferred.toLowerCase()) && v.lang.startsWith('en')
        );
        if (match) {
            cachedVoice = match;
            return match;
        }
    }

    // 2. Prefer remote/network voices (usually higher quality neural voices)
    const remoteEnglish = voices.find(v => !v.localService && v.lang.startsWith('en'));
    if (remoteEnglish) {
        cachedVoice = remoteEnglish;
        return remoteEnglish;
    }

    // 3. Any English voice
    const anyEnglish = voices.find(v => v.lang.startsWith('en'));
    if (anyEnglish) {
        cachedVoice = anyEnglish;
        return anyEnglish;
    }

    // 4. Absolute fallback — first voice
    cachedVoice = voices[0];
    return voices[0];
}

// ─── Sentence splitting for natural pauses ──────────────────────────
function splitIntoSentences(text: string): string[] {
    // Split on sentence-ending punctuation, keeping the punctuation
    const parts = text.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 0);
    return parts.length > 0 ? parts : [text];
}

// ─── The hook ───────────────────────────────────────────────────────
export function useAudio() {
    const audioEnabled = useStore((state) => state.audioEnabled);
    const utteranceQueue = useRef<SpeechSynthesisUtterance[]>([]);
    const isSpeaking = useRef(false);
    const onDoneRef = useRef<(() => void) | null>(null);
    const sfxCtxRef = useRef<AudioContext | null>(null);

    // Ensure voices are loaded (Chrome loads them asynchronously)
    useEffect(() => {
        if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

        // Try to load immediately
        pickBestVoice();

        // Also listen for async voice loading
        const handler = () => {
            cachedVoice = null;      // reset cache
            voicesLoaded = false;
            pickBestVoice();
        };
        window.speechSynthesis.addEventListener('voiceschanged', handler);
        return () => window.speechSynthesis.removeEventListener('voiceschanged', handler);
    }, []);

    // Process the utterance queue sequentially for natural sentence pauses
    const processQueue = useCallback(function runQueue() {
        if (isSpeaking.current) return;
        const next = utteranceQueue.current.shift();
        if (!next) {
            // Queue empty → all speech done, fire completion callback
            if (onDoneRef.current) {
                const cb = onDoneRef.current;
                onDoneRef.current = null;
                cb();
            }
            return;
        }

        isSpeaking.current = true;
        next.onend = () => {
            isSpeaking.current = false;
            // Small pause between sentences for natural rhythm
            if (utteranceQueue.current.length > 0) {
                setTimeout(runQueue, 180);
            } else {
                // Last utterance done
                runQueue(); // will trigger the onDoneRef callback
            }
        };
        next.onerror = () => {
            isSpeaking.current = false;
            runQueue();
        };
        window.speechSynthesis.speak(next);
    }, []);

    /**
     * Speak text with optional emotion.
     * Returns a Promise that resolves when ALL speech finishes.
     * Safe to call without awaiting for fire-and-forget usage.
     */
    const speak = useCallback((text: string, emotion?: SpeechEmotion): Promise<void> => {
        // Clear any pending callback
        onDoneRef.current = null;

        if (!audioEnabled) return Promise.resolve();
        if (typeof window === 'undefined' || !('speechSynthesis' in window)) return Promise.resolve();

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();
        utteranceQueue.current = [];
        isSpeaking.current = false;

        const cleaned = cleanTextForSpeech(text);
        if (!cleaned) return Promise.resolve();

        // Auto-detect emotion if not provided
        const resolvedEmotion = emotion ?? detectEmotion(text);
        const preset = EMOTION_PRESETS[resolvedEmotion];
        const voice = pickBestVoice();

        // Split into sentences for natural pauses
        const sentences = splitIntoSentences(cleaned);

        for (const sentence of sentences) {
            const utter = new SpeechSynthesisUtterance(sentence);
            utter.rate = preset.rate;
            utter.pitch = preset.pitch;
            utter.volume = preset.volume;
            if (voice) utter.voice = voice;
            utter.lang = 'en-US';
            utteranceQueue.current.push(utter);
        }

        return new Promise<void>((resolve) => {
            onDoneRef.current = resolve;
            processQueue();
        });
    }, [audioEnabled, processQueue]);

    const stop = useCallback(() => {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            utteranceQueue.current = [];
            isSpeaking.current = false;
        }
        // Resolve any pending promise
        if (onDoneRef.current) {
            const cb = onDoneRef.current;
            onDoneRef.current = null;
            cb();
        }
    }, []);

    const playSfx = useCallback((name: 'tap' | 'correct' | 'wrong' | 'win' | 'badge' | 'page') => {
        if (!audioEnabled) return;
        if (typeof window === 'undefined') return;
        const AudioContextCtor = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!AudioContextCtor) return;

        if (!sfxCtxRef.current) sfxCtxRef.current = new AudioContextCtor();
        const ctx = sfxCtxRef.current;
        void ctx.resume?.();

        const now = ctx.currentTime;
        const master = ctx.createGain();
        master.gain.setValueAtTime(0.0001, now);
        master.gain.exponentialRampToValueAtTime(0.35, now + 0.01);
        master.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
        master.connect(ctx.destination);

        function tone(freq: number, start: number, dur: number, type: OscillatorType = 'sine', gain = 0.22) {
            const osc = ctx.createOscillator();
            const g = ctx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, start);
            g.gain.setValueAtTime(0.0001, start);
            g.gain.exponentialRampToValueAtTime(gain, start + 0.01);
            g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
            osc.connect(g);
            g.connect(master);
            osc.start(start);
            osc.stop(start + dur + 0.02);
        }

        if (name === 'tap') {
            tone(620, now, 0.08, 'triangle', 0.16);
            return;
        }
        if (name === 'correct') {
            tone(523.25, now, 0.12, 'sine', 0.2);
            tone(659.25, now + 0.11, 0.16, 'sine', 0.22);
            return;
        }
        if (name === 'wrong') {
            tone(180, now, 0.18, 'square', 0.16);
            tone(140, now + 0.12, 0.2, 'square', 0.12);
            return;
        }
        if (name === 'badge') {
            tone(880, now, 0.08, 'sine', 0.18);
            tone(1174.66, now + 0.06, 0.1, 'sine', 0.16);
            tone(1567.98, now + 0.12, 0.12, 'sine', 0.14);
            return;
        }
        if (name === 'page') {
            tone(420, now, 0.12, 'triangle', 0.14);
            tone(520, now + 0.06, 0.14, 'triangle', 0.12);
            return;
        }
        if (name === 'win') {
            tone(523.25, now, 0.12, 'sine', 0.18);
            tone(659.25, now + 0.1, 0.14, 'sine', 0.2);
            tone(783.99, now + 0.22, 0.18, 'sine', 0.22);
            tone(1046.5, now + 0.36, 0.22, 'sine', 0.24);
        }
    }, [audioEnabled]);

    return { speak, stop, playSfx };
}
