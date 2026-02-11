import { useState, useEffect, useRef, useMemo } from 'react';
import './App.css';
import './styles/theme.css';
import { useStore } from './store/useStore';
import { useAudio } from './hooks/useAudio';
import { AREAS, type Area } from './data/syllabus';

import { Layout } from './components/layout/Layout';
import { BigButton } from './components/common/BigButton';
import { Celebration } from './components/common/Celebration';
import { RewardsScreen } from './components/common/RewardsScreen';
import { WorksheetScreen } from './components/common/WorksheetScreen';
import { ParentScreen } from './components/parent/ParentScreen';

import { LettersGame } from './components/games/LettersGame';
import { ReadingGame } from './components/games/ReadingGame';
import { NumbersGame } from './components/games/NumbersGame';
import { MathGame } from './components/games/MathGame';
import { ShapesGame } from './components/games/ShapesGame';
import { EVSGame } from './components/games/EVSGame';
import { StoriesGame } from './components/games/StoriesGame';
import { RhymesGame } from './components/games/RhymesGame';
import { TraceGame } from './components/games/TraceGame';
import { GKGame } from './components/games/GKGame';
import { EmotionsGame } from './components/games/EmotionsGame';
import { AdventureMap } from './components/games/AdventureMap';

type Screen =
  | { name: 'home' }
  | { name: Area }
  | { name: 'rewards' }
  | { name: 'parent' }
  | { name: 'worksheet'; area: Area }
  | { name: 'adventure' };

export function formatMinutes(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  if (m <= 0) return `${s}s`;
  return `${m}m ${s.toString().padStart(2, '0')}s`;
}

function plural(n: number, one: string, many: string) {
  return n === 1 ? one : many;
}

function todayISODate() {
  return new Date().toISOString().slice(0, 10);
}

function App() {
  const [screen, setScreen] = useState<Screen>({ name: 'home' });
  const [celebration, setCelebration] = useState<{ title: string; detail: string } | null>(null);

  const {
    audioEnabled, dailyLimitMinutes, usage, updateUsage,
    awardStars, focusAreas, resetProgress
  } = useStore();

  const { speak } = useAudio();

  const activeArea = screen.name === 'home' || screen.name === 'rewards' || screen.name === 'parent' || screen.name === 'worksheet' || screen.name === 'adventure' ? null : screen.name;
  const tickRef = useRef<number | null>(null);
  const breakNoticeDateRef = useRef<string | null>(null);
  const dailyLimitSecondsRef = useRef(dailyLimitMinutes * 60);
  const audioEnabledRef = useRef(audioEnabled);

  useEffect(() => {
    dailyLimitSecondsRef.current = dailyLimitMinutes * 60;
    audioEnabledRef.current = audioEnabled;
  }, [dailyLimitMinutes, audioEnabled]);

  useEffect(() => {
    if (!activeArea) return;
    if (tickRef.current) window.clearInterval(tickRef.current);

    tickRef.current = window.setInterval(() => {
      const today = todayISODate();
      updateUsage(5);

      if (usage.seconds >= dailyLimitSecondsRef.current && breakNoticeDateRef.current !== today) {
        breakNoticeDateRef.current = today;
        speak('Time to take a break. Let\'s do an offline activity now.');
        setCelebration({ title: '🌟 Break Time', detail: 'Try jumping 10 times or drawing on paper! 🎨' });
        setScreen({ name: 'home' });
      }
    }, 5000);

    return () => {
      if (tickRef.current) window.clearInterval(tickRef.current);
      tickRef.current = null;
    };
  }, [activeArea, updateUsage, usage.seconds, speak]);

  const dailySecondsSpent = useMemo(() => {
    return usage.dateISO === todayISODate() ? usage.seconds : 0;
  }, [usage]);

  const dailyLimitReached = dailySecondsSpent >= dailyLimitMinutes * 60;

  function goHome() { setScreen({ name: 'home' }); }

  function complete(area: Area, starsEarned: number, message: string) {
    awardStars(area, starsEarned);
    speak(message);
    setCelebration({
      title: `🌟 You earned ${starsEarned} ${plural(starsEarned, 'star', 'stars')}!`,
      detail: message
    });
    setScreen({ name: 'home' });
  }

  const focused = useMemo(() => new Set(focusAreas), [focusAreas]);
  const tiles = useMemo(() => AREAS.filter((a) => focused.has(a.area)), [focused]);

  function renderGame() {
    switch (screen.name) {
      case 'letters': return <LettersGame onDone={(s) => complete('letters', s, 'Great letter learning!')} />;
      case 'reading': return <ReadingGame onDone={(s) => complete('reading', s, 'Wonderful reading!')} />;
      case 'numbers': return <NumbersGame onDone={(s) => complete('numbers', s, 'Nice counting!')} />;
      case 'math': return <MathGame onDone={(s) => complete('math', s, 'Math champion!')} />;
      case 'shapes': return <ShapesGame onDone={(s) => complete('shapes', s, 'Shape champion!')} />;
      case 'evs': return <EVSGame onDone={(s) => complete('evs', s, 'Great exploring!')} />;
      case 'stories': return <StoriesGame onDone={(s) => complete('stories', s, 'Lovely listening!')} />;
      case 'rhymes': return <RhymesGame onDone={(s) => complete('rhymes', s, 'Beautiful singing!')} />;
      case 'art': return <TraceGame onDone={(s) => complete('art', s, 'Beautiful tracing!')} />;
      case 'gk': return <GKGame onDone={(s) => complete('gk', s, 'So smart!')} />;
      case 'emotions': return <EmotionsGame onDone={(s) => complete('emotions', s, 'You understand feelings!')} />;
      default: return null;
    }
  }

  return (
    <>
      <Layout onHome={goHome} onParent={() => setScreen({ name: 'parent' })}>
        {screen.name === 'home' && (
          <div className="home">
            <div className="homeHero">
              <div className="heroEmoji">🍌</div>
              <div className="heroTitle">KG Learning Playground</div>
              <div className="heroSubtitle">Fun activities for curious minds! 🧠✨</div>
            </div>

            <section className="tileGrid" aria-label="Activities">
              {tiles.map((t) => (
                <BigButton
                  key={t.area}
                  title={t.title}
                  subtitle={t.subtitle}
                  color={t.color}
                  icon={t.image ? <img src={t.image} alt={t.title} style={{ width: '4rem', height: '4rem', objectFit: 'contain', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }} /> : <span style={{ fontSize: '2rem' }}>{t.emoji}</span>}
                  onClick={() => {
                    if (dailyLimitReached) {
                      speak('Time to take a break!');
                      setCelebration({ title: '🌟 Break Time', detail: 'Try jumping or drawing on paper! 🎨' });
                      return;
                    }
                    speak(`Let's play ${t.title}.`);
                    setScreen({ name: t.area });
                  }}
                />
              ))}
              <BigButton
                title="🍬 Candy Game"
                subtitle="Adventure Map!"
                color="#EC4899"
                icon={<span style={{ fontSize: '2rem' }}>🗺️</span>}
                onClick={() => {
                  speak('Let\'s go on an adventure!');
                  setScreen({ name: 'adventure' });
                }}
              />
              <BigButton
                title="🏆 Rewards"
                subtitle="Badges and stars"
                color="#111827"
                onClick={() => setScreen({ name: 'rewards' })}
              />
            </section>

            <div className="footerHint">
              ⏱️ Today: {formatMinutes(dailySecondsSpent)} / {dailyLimitMinutes}m
              {dailyLimitReached ? ' • 🌙 Break time' : ''}
            </div>
          </div>
        )}

        {screen.name !== 'home' && screen.name !== 'rewards' && screen.name !== 'parent' && screen.name !== 'worksheet' && screen.name !== 'adventure' && renderGame()}

        {screen.name === 'adventure' && (
          <AdventureMap onDone={(s) => complete('letters', s, 'Great adventure!')} />
        )}

        {screen.name === 'rewards' && (
          <RewardsScreen onPrint={(area) => setScreen({ name: 'worksheet', area })} />
        )}

        {screen.name === 'worksheet' && (
          <WorksheetScreen area={screen.area} onBack={() => setScreen({ name: 'rewards' })} />
        )}

        {screen.name === 'parent' && (
          <ParentScreen
            onLock={goHome}
            onReset={() => {
              resetProgress();
              setCelebration({ title: '🔄 Reset Done', detail: 'Progress and rewards are cleared.' });
            }}
          />
        )}
      </Layout>

      {celebration && (
        <Celebration title={celebration.title} detail={celebration.detail} onClose={() => setCelebration(null)} />
      )}
    </>
  );
}

export default App;
