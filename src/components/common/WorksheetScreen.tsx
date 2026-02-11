import { useMemo } from 'react';
import { type Area, AREAS } from '../../data/syllabus';
import { AreaPill } from '../common/AreaPill';

interface WorksheetScreenProps {
    area: Area;
    onBack: () => void;
}

function areaTitle(area: Area) {
    return AREAS.find((a) => a.area === area)?.title ?? area;
}

export function WorksheetScreen({ area, onBack }: WorksheetScreenProps) {
    const title = `${areaTitle(area)} Worksheet`;
    const blocks = useMemo(() => {
        if (area === 'letters') {
            return [
                { h: 'Trace', p: 'Trace these letters: A A A • B B B • C C C' },
                { h: 'Match', p: 'Circle the letter: A  B  C   (target: B)' },
                { h: 'Say', p: 'Say a word that starts with: A, B, C' },
            ];
        }
        if (area === 'reading') {
            return [
                { h: 'Sight Words', p: 'Read these words: the, and, is, it, in, to' },
                { h: 'CVC Words', p: 'Spell: C_A_T, D_O_G, S_U_N, P_E_N' },
                { h: 'Vowels', p: 'Circle the vowels: A E I O U from the alphabet' },
            ];
        }
        if (area === 'numbers') {
            return [
                { h: 'Count', p: 'Draw dots: 3 • 5 • 8' },
                { h: 'More / Less', p: 'Which is more: 6 or 4? Which is less: 2 or 7?' },
                { h: 'Add', p: '1 + 1 = __   2 + 1 = __   3 + 1 = __ (use fingers)' },
            ];
        }
        if (area === 'math') {
            return [
                { h: 'Add & Subtract', p: '3 + 2 = __,  5 - 1 = __,  4 + 3 = __' },
                { h: 'Pattern', p: 'Draw the next: 🔴🔵🔴🔵🔴__ 🌟🌙🌟🌙🌟__' },
                { h: 'Compare', p: 'Circle the bigger: (7, 3)  (2, 8)  (5, 5)' },
            ];
        }
        if (area === 'shapes') {
            return [
                { h: 'Find', p: 'Circle all the circles on this page (draw 6 circles).' },
                { h: 'Draw', p: 'Draw: 2 triangles • 2 squares • 1 circle' },
                { h: 'Colors', p: 'Color: Apple → Red, Sun → Yellow, Leaf → Green' },
            ];
        }
        if (area === 'evs') {
            return [
                { h: 'Animals', p: 'Name 5 domestic animals and 5 wild animals.' },
                { h: 'Body Parts', p: 'Point and name: eyes, ears, nose, mouth, hands' },
                { h: 'Transport', p: 'Draw: car, bus, train, airplane, boat' },
            ];
        }
        if (area === 'stories') {
            return [
                { h: 'Tell', p: 'Tell the story in your own words (3 sentences).' },
                { h: 'Draw', p: 'Draw your favorite part of the story.' },
                { h: 'Moral', p: 'Write or say the moral of the story.' },
            ];
        }
        if (area === 'rhymes') {
            return [
                { h: 'Sing', p: 'Sing "Twinkle Twinkle Little Star" with actions.' },
                { h: 'Fill', p: 'Humpty Dumpty sat on a ___. Mary had a little ___.' },
                { h: 'Draw', p: 'Draw a picture for your favourite rhyme.' },
            ];
        }
        if (area === 'art') {
            return [
                { h: 'Warm-up', p: 'Draw 5 straight lines and 5 curvy lines.' },
                { h: 'Trace', p: 'Trace: 1 2 3 4 5 A B C D E' },
                { h: 'Write', p: 'Write your name with big letters.' },
            ];
        }
        if (area === 'gk') {
            return [
                { h: 'Days', p: 'Write the 7 days of the week in order.' },
                { h: 'Fruits', p: 'Name 10 fruits and draw 3 of them.' },
                { h: 'Opposites', p: 'Match: Big→__, Hot→__, Happy→__, Up→__' },
            ];
        }
        return [
            { h: 'Emotions', p: 'Draw 4 faces: Happy, Sad, Angry, Scared.' },
            { h: 'Talk', p: 'When do you feel happy? When do you feel sad?' },
            { h: 'Safety', p: 'Write 3 safety rules you learned.' },
        ];
    }, [area]);

    return (
        <div className="screen worksheet">
            <div className="screenHeader">
                <AreaPill color="#111827">{title}</AreaPill>
                <div className="screenPrompt">Print and save as PDF</div>
                <button className="secondary" onClick={onBack}>
                    Back
                </button>
            </div>

            <div className="worksheetPaper">
                <div className="worksheetTitle">{title}</div>
                <div className="worksheetMeta">Name: ____________   Date: ____________</div>
                <div className="worksheetBlocks">
                    {blocks.map((b) => (
                        <div className="worksheetBlock" key={b.h}>
                            <div className="worksheetH">{b.h}</div>
                            <div className="worksheetP">{b.p}</div>
                            <div className="worksheetSpace" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="screenFooter noPrint">
                <button
                    className="primary"
                    onClick={() => {
                        window.print();
                    }}
                >
                    Print / Save PDF
                </button>
            </div>
        </div>
    );
}
