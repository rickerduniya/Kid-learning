import { AreaPill } from '../common/AreaPill';
import { useStore } from '../../store/useStore';
import { type Area, AREAS } from '../../data/syllabus';

interface RewardsScreenProps {
    onPrint: (area: Area) => void;
}

function areaTitle(area: Area) {
    return AREAS.find((a) => a.area === area)?.title ?? area;
}

function formatMinutes(seconds: number) {
    const mins = Math.max(0, Math.floor(seconds / 60));
    if (mins < 60) return `${mins} min`;
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h}h ${m}m`;
}


export function RewardsScreen({ onPrint }: RewardsScreenProps) {
    const { stars, streak, badges, stickers, area } = useStore();

    return (
        <div className="screen">
            <div className="screenHeader">
                <AreaPill color="#111827">Rewards</AreaPill>
                <div className="screenPrompt">Your progress</div>
            </div>

            <div className="statsRow">
                <div className="statCard">
                    <div className="statLabel">Total Stars</div>
                    <div className="statValue">{stars}</div>
                </div>
                <div className="statCard">
                    <div className="statLabel">Streak</div>
                    <div className="statValue">{streak.count}</div>
                </div>
            </div>

            <div className="sectionTitle">Badges</div>
            <div className="badges">
                {badges.length === 0 ? (
                    <div className="emptyCard">Play a game to earn your first badge.</div>
                ) : (
                    badges.slice().reverse().map((b) => (
                        <div className="badge" key={b}>
                            {b}
                        </div>
                    ))
                )}
            </div>

            <div className="sectionTitle">Stickers</div>
            <div className="stickers">
                {stickers.length === 0 ? (
                    <div className="emptyCard">Finish levels to collect stickers.</div>
                ) : (
                    stickers.slice().reverse().map((s, i) => (
                        <div className="sticker" key={`${s}-${i}`}>
                            {s}
                        </div>
                    ))
                )}
            </div>

            <div className="sectionTitle">This device summary</div>
            <div className="summaryGrid">
                {(Object.keys(area) as Area[]).map((a) => (
                    <div className="summaryCard" key={a}>
                        <div className="summaryTitle">{areaTitle(a)}</div>
                        <div className="summaryLine">
                            Sessions: {area[a].sessions} • Stars: {area[a].stars}
                        </div>
                        <div className="summaryLine">Time: {formatMinutes(area[a].seconds)}</div>
                        <button className="secondary" onClick={() => onPrint(a)}>
                            Worksheet
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
