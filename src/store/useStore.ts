import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type Area, type SubjectStats } from '../data/syllabus';

interface AppState {
    version: number;
    audioEnabled: boolean;
    stars: number;
    badges: string[];
    streak: { count: number; lastISO?: string };
    area: Record<Area, SubjectStats>;
    focusAreas: Area[];
    dailyLimitMinutes: number;
    usage: { dateISO: string; seconds: number };
    parent: { pinSalt?: string; pinHashHex?: string };
    adventureProgress: Record<string, { completedLevels: string[]; levelStars: Record<string, number> }>;

    toggleAudio: () => void;
    awardStars: (area: Area, starsToAdd: number) => void;
    setDailyLimit: (minutes: number) => void;
    updateUsage: (seconds: number) => void;
    setParentPin: (salt: string, hash: string) => void;
    toggleFocusArea: (area: Area) => void;
    resetProgress: () => void;
    markCompleted: (area: Area, itemId: string) => void;
    completeAdventureLevel: (worldId: string, levelId: string, stars: number) => void;
}

const ALL_AREAS: Area[] = ['letters', 'reading', 'numbers', 'math', 'shapes', 'evs', 'stories', 'rhymes', 'art', 'gk', 'emotions'];

const defaultAreaStats = Object.fromEntries(
    ALL_AREAS.map(a => [a, { sessions: 0, seconds: 0, stars: 0, completedItems: [], difficulty: 'easy' as const }])
) as unknown as Record<Area, SubjectStats>;

function todayISODate() {
    return new Date().toISOString().slice(0, 10);
}

function isoDateDaysAgo(daysAgo: number) {
    const d = new Date();
    d.setDate(d.getDate() - daysAgo);
    return d.toISOString().slice(0, 10);
}

function addBadge(currentBadges: string[], badge: string): string[] {
    if (currentBadges.includes(badge)) return currentBadges;
    return [...currentBadges, badge];
}

export const useStore = create<AppState>()(
    persist(
        (set) => ({
            version: 2,
            audioEnabled: true,
            stars: 0,
            badges: [],
            streak: { count: 0, lastISO: undefined },
            area: defaultAreaStats,
            focusAreas: ALL_AREAS,
            dailyLimitMinutes: 20,
            usage: { dateISO: todayISODate(), seconds: 0 },
            parent: {},
            adventureProgress: {},

            toggleAudio: () => set((state) => ({ audioEnabled: !state.audioEnabled })),

            awardStars: (area, starsToAdd) => {
                const add = Math.max(0, Math.floor(starsToAdd));
                const now = new Date().toISOString();
                const today = todayISODate();

                set((state) => {
                    let newBadges = state.badges;
                    const newStars = state.stars + add;
                    const newAreaStats = {
                        ...state.area,
                        [area]: {
                            ...state.area[area],
                            sessions: state.area[area].sessions + 1,
                            stars: state.area[area].stars + add,
                            lastPlayedISO: now,
                        },
                    };

                    if (newStars >= 1) newBadges = addBadge(newBadges, '⭐ First Star');
                    if (newStars >= 10) newBadges = addBadge(newBadges, '🌟 Star Collector');
                    if (newStars >= 50) newBadges = addBadge(newBadges, '💫 Superstar');
                    if (newStars >= 100) newBadges = addBadge(newBadges, '🏆 Champion');
                    if (newAreaStats[area].sessions >= 1) newBadges = addBadge(newBadges, `🎯 First ${area} play`);
                    if (newAreaStats[area].sessions >= 10) newBadges = addBadge(newBadges, `🔥 ${area} expert`);

                    let newStreak = { ...state.streak };
                    const lastStreakDate = state.streak.lastISO;
                    if (!lastStreakDate) {
                        newStreak = { count: 1, lastISO: today };
                    } else if (lastStreakDate === isoDateDaysAgo(1)) {
                        newStreak = { count: state.streak.count + 1, lastISO: today };
                        if (newStreak.count >= 3) newBadges = addBadge(newBadges, '🔥 3-day streak');
                        if (newStreak.count >= 7) newBadges = addBadge(newBadges, '🔥 7-day streak');
                        if (newStreak.count >= 14) newBadges = addBadge(newBadges, '🔥 14-day streak');
                    } else if (lastStreakDate !== today) {
                        newStreak = { count: 1, lastISO: today };
                    }

                    return { stars: newStars, badges: newBadges, area: newAreaStats, streak: newStreak };
                });
            },

            setDailyLimit: (minutes) => set({ dailyLimitMinutes: minutes }),

            updateUsage: (seconds) => {
                const today = todayISODate();
                set((state) => {
                    if (state.usage.dateISO === today) {
                        return { usage: { ...state.usage, seconds: state.usage.seconds + seconds } };
                    } else {
                        return { usage: { dateISO: today, seconds } };
                    }
                });
            },

            setParentPin: (salt, hash) => set((state) => ({ parent: { ...state.parent, pinSalt: salt, pinHashHex: hash } })),

            toggleFocusArea: (area) => set((state) => {
                const current = new Set(state.focusAreas);
                if (current.has(area)) current.delete(area);
                else current.add(area);
                return { focusAreas: Array.from(current) };
            }),

            markCompleted: (area, itemId) => set((state) => {
                const prev = state.area[area].completedItems ?? [];
                if (prev.includes(itemId)) return {};
                return {
                    area: {
                        ...state.area,
                        [area]: { ...state.area[area], completedItems: [...prev, itemId] },
                    },
                };
            }),

            completeAdventureLevel: (worldId, levelId, stars) => set((state) => {
                const wp = state.adventureProgress[worldId] || { completedLevels: [], levelStars: {} };
                const newCompleted = wp.completedLevels.includes(levelId) ? wp.completedLevels : [...wp.completedLevels, levelId];
                const newStars = { ...wp.levelStars, [levelId]: Math.max(wp.levelStars[levelId] || 0, stars) };
                return {
                    adventureProgress: {
                        ...state.adventureProgress,
                        [worldId]: { completedLevels: newCompleted, levelStars: newStars },
                    },
                };
            }),

            resetProgress: () => set({
                stars: 0,
                badges: [],
                streak: { count: 0, lastISO: undefined },
                area: defaultAreaStats,
                usage: { dateISO: todayISODate(), seconds: 0 },
                adventureProgress: {},
            }),
        }),
        {
            name: 'kg-learning-storage-v2',
            partialize: (state) => ({
                version: state.version,
                audioEnabled: state.audioEnabled,
                stars: state.stars,
                badges: state.badges,
                streak: state.streak,
                area: state.area,
                focusAreas: state.focusAreas,
                dailyLimitMinutes: state.dailyLimitMinutes,
                usage: state.usage,
                parent: state.parent,
                adventureProgress: state.adventureProgress,
            }),
        }
    )
);
