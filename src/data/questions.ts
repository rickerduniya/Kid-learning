import { ANIMALS, COLORS, CVC_WORDS, FRUITS, LETTERS, SHAPES, SIGHT_WORDS, type Area } from './syllabus';

// ─── Types ─────────────────────────────────────────────────────────
export interface MapQuestion {
    id: string;
    type: 'pick-one' | 'pick-emoji' | 'true-false';
    prompt: string;
    emoji?: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

export interface MapLevel {
    id: string;
    levelNum: number;
    title: string;
    emoji: string;
    area: Area;        // subject for this level
    areaLabel: string; // human readable subject tag
    areaColor: string; // color badge
    questions: MapQuestion[];
    reward: { stars: number; sticker?: string; badge?: string };
}

// Helper
function q(id: string, type: MapQuestion['type'], prompt: string, options: string[], correctIndex: number, explanation: string, emoji?: string): MapQuestion {
    return { id, type, prompt, emoji, options, correctIndex, explanation };
}

// ─── Single Unified Adventure: 50 levels, mixed subjects ───────────
const CANDY_LEVELS_BASE: MapLevel[] = [
    // ── Level 1: Letters ──
    {
        id: 'lv1', levelNum: 1, title: 'A B C', emoji: '🔤', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('1a', 'pick-one', 'Which letter comes first?', ['B', 'A', 'C', 'D'], 1, 'A is the first letter!', '🔤'),
            q('1b', 'pick-emoji', 'A is for...?', ['🍎 Apple', '🐶 Dog', '🐱 Cat'], 0, 'A for Apple! 🍎'),
            q('1c', 'true-false', 'B comes after A', ['True', 'False'], 0, 'Yes! A then B'),
        ],
    },
    // ── Level 2: Numbers ──
    {
        id: 'lv2', levelNum: 2, title: 'Count 1-5', emoji: '1️⃣', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('2a', 'pick-one', 'How many apples? 🍎🍎🍎', ['2', '3', '4', '5'], 1, 'There are 3 apples!', '🍎'),
            q('2b', 'pick-one', 'What comes after 2?', ['1', '4', '3', '5'], 2, '3 comes after 2!'),
            q('2c', 'true-false', '5 is bigger than 3', ['True', 'False'], 0, 'Yes! 5 > 3'),
        ],
    },
    // ── Level 3: Shapes ──
    {
        id: 'lv3', levelNum: 3, title: 'Circle', emoji: '⚫', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('3a', 'pick-one', 'Which shape is a Circle?', ['⬛ Square', '⚫ Circle', '🔺 Triangle', '📱 Rectangle'], 1, 'A circle is round!'),
            q('3b', 'pick-one', 'Which real thing is circular?', ['Door', 'Wheel', 'Book', 'Roof'], 1, 'A wheel is circular!'),
            q('3c', 'true-false', 'A coin is shaped like a circle', ['True', 'False'], 0, 'Yes! Coins are circles'),
        ],
    },
    // ── Level 4: Letters ──
    {
        id: 'lv4', levelNum: 4, title: 'D E F', emoji: '📝', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('4a', 'pick-one', 'D is for...?', ['Dog', 'Cat', 'Egg', 'Fish'], 0, 'D for Dog! 🐶', '🐶'),
            q('4b', 'pick-one', 'Which letter comes after D?', ['F', 'C', 'E', 'G'], 2, 'E comes after D!'),
            q('4c', 'pick-emoji', 'F is for...?', ['🐟 Fish', '🐘 Elephant', '🍇 Grapes'], 0, 'F for Fish! 🐟'),
            q('4d', 'true-false', 'E is for Elephant', ['True', 'False'], 0, 'Yes! E for Elephant 🐘'),
        ],
    },
    // ── Level 5: EVS ──
    {
        id: 'lv5', levelNum: 5, title: 'Pet Animals', emoji: '🐶', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('5a', 'pick-one', 'Which animal says "Woof"?', ['Cat', 'Dog', 'Cow', 'Horse'], 1, 'Dog says Woof! 🐶'),
            q('5b', 'pick-one', 'Which gives us milk?', ['Dog', 'Cat', 'Cow', 'Hen'], 2, 'Cow gives milk! 🐮'),
            q('5c', 'pick-one', 'Which says "Meow"?', ['Dog', 'Cat', 'Horse', 'Duck'], 1, 'Cat says Meow! 🐱'),
        ],
    },
    // ── Level 6: Math ──
    {
        id: 'lv6', levelNum: 6, title: 'Add to 5', emoji: '➕', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('6a', 'pick-one', '1 + 1 = ?', ['1', '2', '3', '4'], 1, '1 plus 1 equals 2!', '➕'),
            q('6b', 'pick-one', '2 + 1 = ?', ['2', '4', '3', '1'], 2, '2 plus 1 equals 3!'),
            q('6c', 'pick-one', '2 + 3 = ?', ['4', '6', '3', '5'], 3, '2 plus 3 equals 5!'),
        ],
    },
    // ── Level 7: Numbers ──
    {
        id: 'lv7', levelNum: 7, title: 'Count 6-10', emoji: '🔢', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('7a', 'pick-one', 'How many stars? ⭐⭐⭐⭐⭐⭐⭐', ['5', '6', '7', '8'], 2, 'There are 7 stars!', '⭐'),
            q('7b', 'pick-one', 'What comes after 9?', ['8', '11', '10', '7'], 2, '10 comes after 9!'),
            q('7c', 'pick-one', 'Which is biggest?', ['6', '8', '7', '10'], 3, '10 is the biggest!'),
        ],
    },
    // ── Level 8: Letters ──
    {
        id: 'lv8', levelNum: 8, title: 'G H I', emoji: '✏️', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('8a', 'pick-one', 'G is for...?', ['Grapes', 'Hat', 'Ice cream', 'Jam'], 0, 'G for Grapes! 🍇', '🍇'),
            q('8b', 'pick-one', 'Which letter is for Hat?', ['G', 'I', 'H', 'J'], 2, 'H for Hat! 🎩'),
            q('8c', 'pick-emoji', 'I is for...?', ['🍦 Ice cream', '🪁 Kite', '🦁 Lion'], 0, 'I for Ice cream! 🍦'),
        ],
    },
    // ── Level 9: Shapes ──
    {
        id: 'lv9', levelNum: 9, title: 'Square & Rectangle', emoji: '⬛', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('9a', 'pick-one', 'A square has how many sides?', ['3', '5', '4', '6'], 2, 'A square has 4 equal sides!'),
            q('9b', 'pick-one', 'Which is rectangle-shaped?', ['Ball', 'Door', 'Wheel', 'Coin'], 1, 'A door is a rectangle!'),
            q('9c', 'true-false', 'A square has 4 equal sides', ['True', 'False'], 0, 'Yes! All 4 sides are equal'),
        ],
    },
    // ── Level 10: EVS ──
    {
        id: 'lv10', levelNum: 10, title: 'Wild Animals', emoji: '🦁', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 2 },
        questions: [
            q('10a', 'pick-one', 'Who is the king of the jungle?', ['Tiger', 'Lion', 'Bear', 'Elephant'], 1, 'Lion is the king! 🦁'),
            q('10b', 'pick-one', 'Which has stripes?', ['Lion', 'Elephant', 'Tiger', 'Bear'], 2, 'Tiger has stripes! 🐯'),
            q('10c', 'true-false', 'Elephant is the biggest land animal', ['True', 'False'], 0, 'Yes! Elephants are huge! 🐘'),
            q('10d', 'pick-one', 'Which has a long neck?', ['Bear', 'Monkey', 'Giraffe', 'Fox'], 2, 'Giraffe! 🦒'),
        ],
    },
    // ── Level 11: Math ──
    {
        id: 'lv11', levelNum: 11, title: 'Add to 10', emoji: '🔢', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('11a', 'pick-one', '3 + 4 = ?', ['6', '8', '7', '5'], 2, '3 plus 4 equals 7!'),
            q('11b', 'pick-one', '5 + 5 = ?', ['8', '10', '9', '11'], 1, '5 plus 5 equals 10!'),
            q('11c', 'pick-one', '6 + 2 = ?', ['7', '9', '8', '6'], 2, '6 plus 2 equals 8!'),
        ],
    },
    // ── Level 12: Letters ──
    {
        id: 'lv12', levelNum: 12, title: 'J K L', emoji: '🎯', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('12a', 'pick-one', 'J is for...?', ['Jam', 'Kite', 'Lion', 'Apple'], 0, 'J for Jam! 🍯', '🍯'),
            q('12b', 'pick-one', 'K is for...?', ['Dog', 'Kite', 'Cat', 'Hat'], 1, 'K for Kite! 🪁'),
            q('12c', 'pick-emoji', 'L is for...?', ['🦁 Lion', '🥭 Mango', '👃 Nose'], 0, 'L for Lion! 🦁'),
            q('12d', 'true-false', 'K comes before J', ['True', 'False'], 1, 'No! J comes before K'),
        ],
    },
    // ── Level 13: Shapes ──
    {
        id: 'lv13', levelNum: 13, title: 'Triangle', emoji: '🔺', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('13a', 'pick-one', 'A triangle has how many sides?', ['2', '4', '3', '5'], 2, 'A triangle has 3 sides!'),
            q('13b', 'pick-one', 'What shape is a pizza slice?', ['Circle', 'Square', 'Triangle', 'Star'], 2, 'Pizza slice is a triangle!'),
            q('13c', 'pick-one', 'Which looks like a roof?', ['Circle', 'Triangle', 'Oval', 'Star'], 1, 'Roofs are triangle-shaped!'),
        ],
    },
    // ── Level 14: Numbers ──
    {
        id: 'lv14', levelNum: 14, title: 'Count 11-20', emoji: '🔟', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('14a', 'pick-one', 'What comes after 15?', ['14', '17', '16', '13'], 2, '16 comes after 15!'),
            q('14b', 'pick-one', 'Which number is "twelve"?', ['11', '13', '12', '20'], 2, 'Twelve is 12!'),
            q('14c', 'true-false', '20 comes after 19', ['True', 'False'], 0, 'Yes! 19, 20!'),
            q('14d', 'pick-one', 'Between 17 and 19?', ['16', '20', '15', '18'], 3, '18!'),
        ],
    },
    // ── Level 15: EVS ──
    {
        id: 'lv15', levelNum: 15, title: 'Birds', emoji: '🦜', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 2 },
        questions: [
            q('15a', 'pick-one', 'Which bird can talk?', ['Eagle', 'Owl', 'Parrot', 'Penguin'], 2, 'Parrot can talk! 🦜'),
            q('15b', 'pick-one', 'National bird of India?', ['Eagle', 'Parrot', 'Peacock', 'Owl'], 2, 'Peacock! 🦚'),
            q('15c', 'true-false', 'Penguins can fly', ['True', 'False'], 1, 'No! Penguins swim!'),
        ],
    },
    // ── Level 16: Math ──
    {
        id: 'lv16', levelNum: 16, title: 'Subtract', emoji: '➖', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('16a', 'pick-one', '5 - 2 = ?', ['2', '4', '3', '1'], 2, '5 minus 2 equals 3!'),
            q('16b', 'pick-one', '8 - 3 = ?', ['4', '6', '5', '3'], 2, '8 minus 3 equals 5!'),
            q('16c', 'pick-one', '10 - 4 = ?', ['5', '7', '6', '8'], 2, '10 minus 4 equals 6!'),
        ],
    },
    // ── Level 17: Letters ──
    {
        id: 'lv17', levelNum: 17, title: 'M N O', emoji: '🌟', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('17a', 'pick-one', 'M is for...?', ['Nose', 'Mango', 'Orange', 'Parrot'], 1, 'M for Mango! 🥭', '🥭'),
            q('17b', 'pick-one', 'Which letter is for Nose?', ['M', 'O', 'N', 'P'], 2, 'N for Nose! 👃'),
            q('17c', 'pick-emoji', 'O is for...?', ['🍊 Orange', '🦜 Parrot', '👸 Queen'], 0, 'O for Orange! 🍊'),
        ],
    },
    // ── Level 18: Shapes ──
    {
        id: 'lv18', levelNum: 18, title: 'Colors 1', emoji: '🔴', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('18a', 'pick-one', 'What color is an apple?', ['Blue', 'Green', 'Red', 'Yellow'], 2, 'Apples are red! 🍎'),
            q('18b', 'pick-one', 'What color is the sky?', ['Red', 'Blue', 'Green', 'Orange'], 1, 'The sky is blue! 🔵'),
            q('18c', 'pick-one', 'What color is grass?', ['Red', 'Yellow', 'Green', 'Purple'], 2, 'Grass is green! 🟢'),
            q('18d', 'pick-one', 'What color is a banana?', ['Red', 'Green', 'Yellow', 'Blue'], 2, 'Bananas are yellow! 🍌'),
        ],
    },
    // ── Level 19: EVS ──
    {
        id: 'lv19', levelNum: 19, title: 'Fruits', emoji: '🍎', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('19a', 'pick-one', 'King of fruits?', ['Apple', 'Banana', 'Mango', 'Orange'], 2, 'Mango is the king! 🥭'),
            q('19b', 'pick-one', 'Yellow and long fruit?', ['Apple', 'Banana', 'Grapes', 'Orange'], 1, 'Banana! 🍌'),
            q('19c', 'pick-one', 'Round and orange fruit?', ['Apple', 'Banana', 'Mango', 'Orange'], 3, 'Orange! 🍊'),
        ],
    },
    // ── Level 20: Math ──
    {
        id: 'lv20', levelNum: 20, title: 'Mixed +/-', emoji: '🎯', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 2 },
        questions: [
            q('20a', 'pick-one', '7 + 3 = ?', ['9', '11', '10', '8'], 2, '7 plus 3 equals 10!'),
            q('20b', 'pick-one', '9 - 5 = ?', ['3', '5', '4', '6'], 2, '9 minus 5 equals 4!'),
            q('20c', 'pick-one', '6 + 4 = ?', ['9', '11', '10', '8'], 2, '6 plus 4 equals 10!'),
            q('20d', 'pick-one', '7 - 2 = ?', ['4', '6', '5', '3'], 2, '7 minus 2 equals 5!'),
        ],
    },
    // ── Level 21: Letters ──
    {
        id: 'lv21', levelNum: 21, title: 'P Q R', emoji: '🎨', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('21a', 'pick-one', 'P is for...?', ['Parrot', 'Queen', 'Rabbit', 'Sun'], 0, 'P for Parrot! 🦜', '🦜'),
            q('21b', 'pick-one', 'Q is for...?', ['Rabbit', 'Queen', 'Sun', 'Tiger'], 1, 'Q for Queen! 👸'),
            q('21c', 'true-false', 'R is for Rabbit', ['True', 'False'], 0, 'Yes! R for Rabbit 🐰'),
        ],
    },
    // ── Level 22: Numbers ──
    {
        id: 'lv22', levelNum: 22, title: 'Tens', emoji: '🔢', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('22a', 'pick-one', 'Count by 10s: 10, 20, __', ['25', '30', '40', '15'], 1, '10, 20, 30!'),
            q('22b', 'pick-one', 'How many tens in 50?', ['4', '5', '6', '3'], 1, '50 has 5 tens!'),
            q('22c', 'true-false', '100 is ten tens', ['True', 'False'], 0, 'Yes! 10 × 10 = 100'),
        ],
    },
    // ── Level 23: EVS ──
    {
        id: 'lv23', levelNum: 23, title: 'Vegetables', emoji: '🥕', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('23a', 'pick-one', 'Which is orange and crunchy?', ['Potato', 'Carrot', 'Tomato', 'Onion'], 1, 'Carrot! 🥕'),
            q('23b', 'pick-one', 'Which makes you cry?', ['Carrot', 'Potato', 'Onion', 'Tomato'], 2, 'Onion! 🧅'),
            q('23c', 'true-false', 'Potato grows underground', ['True', 'False'], 0, 'Yes! 🥔'),
        ],
    },
    // ── Level 24: Math ──
    {
        id: 'lv24', levelNum: 24, title: 'Patterns', emoji: '🔮', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('24a', 'pick-one', '2, 4, 6, __?', ['7', '9', '8', '10'], 2, 'Pattern +2! 2, 4, 6, 8'),
            q('24b', 'pick-one', '5, 10, 15, __?', ['25', '18', '20', '16'], 2, 'Pattern +5! 5, 10, 15, 20'),
            q('24c', 'pick-one', '1, 3, 5, __?', ['6', '8', '7', '9'], 2, 'Pattern +2! 1, 3, 5, 7'),
        ],
    },
    // ── Level 25: Letters ──
    {
        id: 'lv25', levelNum: 25, title: 'S T U', emoji: '☀️', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 2 },
        questions: [
            q('25a', 'pick-emoji', 'S is for...?', ['☀️ Sun', '🐯 Tiger', '☂️ Umbrella'], 0, 'S for Sun! ☀️'),
            q('25b', 'pick-one', 'T is for...?', ['Sun', 'Tiger', 'Umbrella', 'Van'], 1, 'T for Tiger! 🐯'),
            q('25c', 'pick-one', 'U is for...?', ['Van', 'Watch', 'Umbrella', 'Yak'], 2, 'U for Umbrella! ☂️'),
        ],
    },
    // ── Level 26: Shapes ──
    {
        id: 'lv26', levelNum: 26, title: 'Colors 2', emoji: '🟣', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('26a', 'pick-one', 'Mix red + blue = ?', ['Green', 'Orange', 'Purple', 'Yellow'], 2, 'Red + Blue = Purple!'),
            q('26b', 'pick-one', 'Mix red + yellow = ?', ['Purple', 'Green', 'Orange', 'Blue'], 2, 'Red + Yellow = Orange!'),
            q('26c', 'pick-one', 'What color is chocolate?', ['White', 'Brown', 'Pink', 'Grey'], 1, 'Brown! 🍫'),
        ],
    },
    // ── Level 27: EVS ──
    {
        id: 'lv27', levelNum: 27, title: 'Body Parts', emoji: '👀', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('27a', 'pick-one', 'We see with our...?', ['Ears', 'Nose', 'Eyes', 'Mouth'], 2, 'We see with eyes! 👀'),
            q('27b', 'pick-one', 'How many fingers do we have?', ['8', '12', '10', '5'], 2, 'We have 10! 🖐️🖐️'),
            q('27c', 'pick-one', 'We hear with our...?', ['Eyes', 'Nose', 'Ears', 'Mouth'], 2, 'We hear with ears! 👂'),
        ],
    },
    // ── Level 28: Math ──
    {
        id: 'lv28', levelNum: 28, title: 'Word Problems', emoji: '📝', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 2 },
        questions: [
            q('28a', 'pick-one', 'Raju has 3 🍎 & gets 4 more. How many?', ['6', '8', '7', '5'], 2, '3 + 4 = 7!'),
            q('28b', 'pick-one', 'Maya has 8 🍪, eats 2. How many left?', ['5', '7', '6', '4'], 2, '8 - 2 = 6!'),
            q('28c', 'pick-one', '5 🐦 on a tree. 3 more come. How many?', ['7', '9', '8', '6'], 2, '5 + 3 = 8!'),
        ],
    },
    // ── Level 29: Letters ──
    {
        id: 'lv29', levelNum: 29, title: 'V W X', emoji: '🚐', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('29a', 'pick-one', 'V is for...?', ['Watch', 'Xylophone', 'Van', 'Yak'], 2, 'V for Van! 🚐', '🚐'),
            q('29b', 'pick-one', 'W is for...?', ['Watch', 'Van', 'Yak', 'Zebra'], 0, 'W for Watch! ⌚'),
            q('29c', 'true-false', 'X is for Xylophone', ['True', 'False'], 0, 'Yes! X for Xylophone 🎵'),
        ],
    },
    // ── Level 30: Numbers ──
    {
        id: 'lv30', levelNum: 30, title: 'Odd & Even', emoji: '🎲', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 2 },
        questions: [
            q('30a', 'pick-one', 'Which is even?', ['3', '5', '4', '7'], 2, '4 is even! 2,4,6,8...'),
            q('30b', 'pick-one', 'Which is odd?', ['2', '6', '9', '8'], 2, '9 is odd! 1,3,5,7,9...'),
            q('30c', 'true-false', '6 is even', ['True', 'False'], 0, 'Yes! 6 is even'),
            q('30d', 'pick-one', 'Which is odd?', ['10', '7', '4', '2'], 1, '7 is odd!'),
        ],
    },
    // ── Level 31: EVS ──
    {
        id: 'lv31', levelNum: 31, title: 'Seasons', emoji: '☀️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('31a', 'pick-one', 'Which season is very hot?', ['Winter', 'Summer', 'Rainy', 'Spring'], 1, 'Summer! ☀️'),
            q('31b', 'pick-one', 'We use umbrellas in...?', ['Summer', 'Winter', 'Rainy season', 'Spring'], 2, 'Rainy season! 🌧️'),
            q('31c', 'pick-one', 'We wear sweaters in...?', ['Summer', 'Winter', 'Rainy', 'Autumn'], 1, 'Winter! ❄️'),
        ],
    },
    // ── Level 32: Letters ──
    {
        id: 'lv32', levelNum: 32, title: 'Y Z', emoji: '🦓', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('32a', 'pick-one', 'Y is for...?', ['Zebra', 'Yak', 'Apple', 'Ball'], 1, 'Y for Yak! 🐂', '🐂'),
            q('32b', 'pick-one', 'Z is for...?', ['Yak', 'Apple', 'Zebra', 'Cat'], 2, 'Z for Zebra! 🦓'),
            q('32c', 'pick-one', 'Z is the ___ letter', ['24th', '25th', '26th', '27th'], 2, 'Z is the 26th letter!'),
        ],
    },
    // ── Level 33: Math ──
    {
        id: 'lv33', levelNum: 33, title: 'Doubles', emoji: '👯', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('33a', 'pick-one', '3 + 3 = ?', ['5', '7', '6', '4'], 2, 'Double 3 is 6!'),
            q('33b', 'pick-one', '4 + 4 = ?', ['7', '9', '8', '6'], 2, 'Double 4 is 8!'),
            q('33c', 'pick-one', '5 + 5 = ?', ['8', '11', '10', '9'], 2, 'Double 5 is 10!'),
            q('33d', 'pick-one', '6 + 6 = ?', ['10', '13', '12', '11'], 2, 'Double 6 is 12!'),
        ],
    },
    // ── Level 34: Shapes ──
    {
        id: 'lv34', levelNum: 34, title: 'Star & Heart', emoji: '⭐', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('34a', 'pick-one', 'A star has how many points?', ['4', '6', '5', '3'], 2, '5 points!'),
            q('34b', 'pick-one', 'A diamond looks like a...?', ['Ball', 'Kite', 'Wheel', 'Box'], 1, 'A kite!'),
            q('34c', 'true-false', 'A heart has straight edges', ['True', 'False'], 1, 'No! Hearts are curvy ❤️'),
        ],
    },
    // ── Level 35: EVS ──
    {
        id: 'lv35', levelNum: 35, title: 'Transport', emoji: '🚗', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 2 },
        questions: [
            q('35a', 'pick-one', 'Which goes on rails?', ['Car', 'Bus', 'Train', 'Bike'], 2, 'Train! 🚂'),
            q('35b', 'pick-one', 'Which flies?', ['Car', 'Ship', 'Bus', 'Airplane'], 3, 'Airplane! ✈️'),
            q('35c', 'pick-one', 'Bicycle has how many wheels?', ['1', '3', '2', '4'], 2, '2 wheels! 🚲'),
        ],
    },
    // ── Level 36: Letters ──
    {
        id: 'lv36', levelNum: 36, title: 'Vowels', emoji: '🌈', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 2 },
        questions: [
            q('36a', 'pick-one', 'Which is a vowel?', ['B', 'C', 'A', 'D'], 2, 'A is a vowel! A,E,I,O,U', '🌈'),
            q('36b', 'true-false', 'E is a vowel', ['True', 'False'], 0, 'Yes!'),
            q('36c', 'pick-one', 'How many vowels?', ['3', '4', '5', '6'], 2, '5: A, E, I, O, U'),
            q('36d', 'true-false', 'B is a vowel', ['True', 'False'], 1, 'No! B is a consonant'),
        ],
    },
    // ── Level 37: Numbers ──
    {
        id: 'lv37', levelNum: 37, title: 'Number Names', emoji: '📖', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('37a', 'pick-one', '"Seven" as a number?', ['6', '8', '7', '9'], 2, 'Seven is 7!'),
            q('37b', 'pick-one', 'Name of 15?', ['Thirteen', 'Fourteen', 'Fifteen', 'Sixteen'], 2, 'Fifteen!'),
            q('37c', 'pick-one', '"Twenty" as a number?', ['12', '20', '22', '30'], 1, 'Twenty is 20!'),
            q('37d', 'true-false', '"Eleven" means 12', ['True', 'False'], 1, 'No! Eleven is 11'),
        ],
    },
    // ── Level 38: Math ──
    {
        id: 'lv38', levelNum: 38, title: 'Bigger Sums', emoji: '💪', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 2 },
        questions: [
            q('38a', 'pick-one', '8 + 7 = ?', ['14', '16', '15', '13'], 2, '15!'),
            q('38b', 'pick-one', '12 - 5 = ?', ['6', '8', '7', '9'], 2, '7!'),
            q('38c', 'pick-one', '9 + 6 = ?', ['14', '16', '15', '13'], 2, '15!'),
            q('38d', 'pick-one', '14 - 8 = ?', ['5', '7', '6', '4'], 2, '6!'),
        ],
    },
    // ── Level 39: EVS ──
    {
        id: 'lv39', levelNum: 39, title: 'Helpers', emoji: '👨‍⚕️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('39a', 'pick-one', 'Who helps sick people?', ['Teacher', 'Doctor', 'Farmer', 'Pilot'], 1, 'Doctor! 👨‍⚕️'),
            q('39b', 'pick-one', 'Who teaches in school?', ['Doctor', 'Chef', 'Teacher', 'Farmer'], 2, 'Teacher! 👩‍🏫'),
            q('39c', 'pick-one', 'Who grows food?', ['Pilot', 'Doctor', 'Chef', 'Farmer'], 3, 'Farmer! 👨‍🌾'),
        ],
    },
    // ── Level 40: Shapes ──
    {
        id: 'lv40', levelNum: 40, title: '3D Shapes', emoji: '🧊', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 2 },
        questions: [
            q('40a', 'pick-one', 'A ball is which 3D shape?', ['Cube', 'Sphere', 'Cone', 'Cylinder'], 1, 'Sphere!'),
            q('40b', 'pick-one', 'Ice cream cone is a...?', ['Sphere', 'Cube', 'Cone', 'Cylinder'], 2, 'Cone!'),
            q('40c', 'pick-one', 'A dice is which shape?', ['Sphere', 'Cone', 'Cube', 'Cylinder'], 2, 'Cube!'),
            q('40d', 'pick-one', 'A pipe is which shape?', ['Sphere', 'Cone', 'Cube', 'Cylinder'], 3, 'Cylinder!'),
        ],
    },
    // ── Level 41: Letters ──
    {
        id: 'lv41', levelNum: 41, title: 'Big & Small', emoji: '🔠', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('41a', 'pick-one', 'Which is the capital letter?', ['a', 'b', 'C', 'd'], 2, 'C!'),
            q('41b', 'pick-one', 'Which is the small letter?', ['A', 'B', 'c', 'D'], 2, 'c!'),
            q('41c', 'true-false', '"a" is lowercase of "A"', ['True', 'False'], 0, 'Yes!'),
            q('41d', 'pick-one', 'Small letter of "G"?', ['f', 'g', 'h', 'j'], 1, 'g!'),
        ],
    },
    // ── Level 42: Numbers ──
    {
        id: 'lv42', levelNum: 42, title: 'Compare', emoji: '⚖️', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('42a', 'pick-one', 'Which is bigger: 15 or 9?', ['9', '15'], 1, '15!'),
            q('42b', 'pick-one', 'Which is smaller: 7 or 12?', ['7', '12'], 0, '7!'),
            q('42c', 'true-false', '25 is less than 30', ['True', 'False'], 0, 'Yes! 25 < 30'),
            q('42d', 'pick-one', 'Biggest: 45, 12, 67, 3?', ['45', '12', '67', '3'], 2, '67!'),
        ],
    },
    // ── Level 43: EVS ──
    {
        id: 'lv43', levelNum: 43, title: 'Space', emoji: '🚀', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 2 },
        questions: [
            q('43a', 'pick-one', 'Which planet do we live on?', ['Mars', 'Venus', 'Earth', 'Jupiter'], 2, 'Earth! 🌍'),
            q('43b', 'pick-one', 'Biggest planet?', ['Earth', 'Mars', 'Jupiter', 'Saturn'], 2, 'Jupiter!'),
            q('43c', 'true-false', 'The Sun is a star', ['True', 'False'], 0, 'Yes! ☀️'),
            q('43d', 'pick-one', 'Who goes to space?', ['Chef', 'Farmer', 'Astronaut', 'Doctor'], 2, 'Astronaut! 👩‍🚀'),
        ],
    },
    // ── Level 44: Math ──
    {
        id: 'lv44', levelNum: 44, title: 'Tens Frame', emoji: '🧮', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('44a', 'pick-one', '10 + 3 = ?', ['12', '14', '13', '11'], 2, '13!'),
            q('44b', 'pick-one', '15 - 5 = ?', ['8', '11', '10', '12'], 2, '10!'),
            q('44c', 'pick-one', '10 + 8 = ?', ['16', '19', '18', '17'], 2, '18!'),
        ],
    },
    // ── Level 45: Letters ──
    {
        id: 'lv45', levelNum: 45, title: 'Letter Order', emoji: '🏆', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 2 },
        questions: [
            q('45a', 'pick-one', 'Between A and C?', ['D', 'B', 'E', 'F'], 1, 'B!'),
            q('45b', 'pick-one', 'After M?', ['L', 'O', 'N', 'K'], 2, 'N!'),
            q('45c', 'pick-one', 'Before F?', ['G', 'D', 'E', 'H'], 2, 'E!'),
            q('45d', 'true-false', 'H comes before G', ['True', 'False'], 1, 'No! G before H'),
            q('45e', 'pick-one', 'A, B, C, __, E', ['F', 'D', 'G', 'H'], 1, 'D!'),
        ],
    },
    // ── Level 46: EVS ──
    {
        id: 'lv46', levelNum: 46, title: 'Plants', emoji: '🌳', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('46a', 'pick-one', 'Trees give us...?', ['Plastic', 'Oxygen', 'Metal', 'Glass'], 1, 'Oxygen! 🌳'),
            q('46b', 'pick-one', 'Seeds grow into...?', ['Rocks', 'Plants', 'Water', 'Sand'], 1, 'Plants! 🌱'),
            q('46c', 'true-false', 'Green leaves make food for plants', ['True', 'False'], 0, 'Yes!'),
        ],
    },
    // ── Level 47: Numbers ──
    {
        id: 'lv47', levelNum: 47, title: 'Count Objects', emoji: '🧮', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 2 },
        questions: [
            q('47a', 'pick-one', '🌸🌸🌸🌸🌸🌸 How many?', ['5', '7', '6', '8'], 2, '6 flowers!'),
            q('47b', 'pick-one', '🐟🐟🐟🐟🐟🐟🐟🐟 How many?', ['6', '7', '9', '8'], 3, '8 fish!'),
            q('47c', 'pick-one', '🎈🎈🎈🎈 How many?', ['3', '5', '4', '6'], 2, '4 balloons!'),
            q('47d', 'pick-one', '🍪🍪🍪🍪🍪🍪🍪 How many?', ['6', '8', '7', '5'], 2, '7 cookies!'),
        ],
    },
    // ── Level 48: Shapes ──
    {
        id: 'lv48', levelNum: 48, title: 'Shape Master', emoji: '🏅', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 2 },
        questions: [
            q('48a', 'pick-one', 'Which has no corners?', ['Square', 'Triangle', 'Circle', 'Rectangle'], 2, 'Circle!'),
            q('48b', 'pick-one', 'Hexagon has how many sides?', ['5', '7', '6', '8'], 2, '6!'),
            q('48c', 'pick-one', 'More sides: pentagon or triangle?', ['Triangle', 'Pentagon', 'Same'], 1, 'Pentagon has 5!'),
            q('48d', 'true-false', 'A rectangle has 4 sides', ['True', 'False'], 0, 'Yes!'),
        ],
    },
    // ── Level 49: Math ──
    {
        id: 'lv49', levelNum: 49, title: 'Math Star', emoji: '⭐', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 2 },
        questions: [
            q('49a', 'pick-one', '14 + 6 = ?', ['18', '21', '20', '19'], 2, '20!'),
            q('49b', 'pick-one', '20 - 8 = ?', ['11', '13', '12', '14'], 2, '12!'),
            q('49c', 'pick-one', '7 + 8 = ?', ['14', '16', '15', '13'], 2, '15!'),
            q('49d', 'pick-one', '3 + 3 + 3 = ?', ['8', '10', '9', '6'], 2, '9!'),
            q('49e', 'pick-one', '16 - 9 = ?', ['6', '8', '7', '5'], 2, '7!'),
        ],
    },
    // ── Level 50: EVS ──
    {
        id: 'lv50', levelNum: 50, title: 'World Expert', emoji: '🏆', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 3 },
        questions: [
            q('50a', 'pick-one', 'Whale lives in...?', ['Forest', 'Desert', 'Ocean', 'Mountain'], 2, 'Ocean! 🐋'),
            q('50b', 'pick-one', 'Cactus grows in...?', ['Ocean', 'Forest', 'Desert', 'River'], 2, 'Desert! 🌵'),
            q('50c', 'pick-one', 'Which is NOT a fruit?', ['Apple', 'Mango', 'Carrot', 'Orange'], 2, 'Carrot is a veggie!'),
            q('50d', 'pick-one', 'How many seasons?', ['2', '3', '4', '5'], 2, '4 main seasons!'),
            q('50e', 'true-false', 'Fire trucks put out fires', ['True', 'False'], 0, 'Yes! 🚒'),
        ],
    },
    // ── Level 51: Letters ──
    {
        id: 'lv51', levelNum: 51, title: 'CVC Words', emoji: '📖', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('51a', 'pick-one', 'C-A-T spells...?', ['Bat', 'Cat', 'Hat', 'Mat'], 1, 'Cat! 🐱'),
            q('51b', 'pick-one', 'D-O-G spells...?', ['Dog', 'Log', 'Fog', 'Hog'], 0, 'Dog! 🐶'),
            q('51c', 'pick-one', 'What starts with B-A-...?', ['Bat', 'Cat', 'Rat', 'Sat'], 0, 'Bat!'),
        ],
    },
    // ── Level 52: Math ──
    {
        id: 'lv52', levelNum: 52, title: 'Halves', emoji: '🍕', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('52a', 'pick-one', 'Half of 10?', ['3', '4', '5', '6'], 2, 'Half of 10 is 5!'),
            q('52b', 'pick-one', 'Half of 8?', ['3', '5', '4', '6'], 2, 'Half of 8 is 4!'),
            q('52c', 'true-false', 'Half of a pizza is 1 out of 2 pieces', ['True', 'False'], 0, 'Yes! 🍕'),
        ],
    },
    // ── Level 53: EVS ──
    {
        id: 'lv53', levelNum: 53, title: 'Water Animals', emoji: '🐙', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('53a', 'pick-one', 'Which lives in water?', ['Dog', 'Fish', 'Cat', 'Bird'], 1, 'Fish! 🐟'),
            q('53b', 'pick-one', 'How many legs does an octopus have?', ['6', '10', '8', '4'], 2, '8 legs! 🐙'),
            q('53c', 'pick-one', 'A baby frog is called?', ['Puppy', 'Tadpole', 'Kitten', 'Cub'], 1, 'Tadpole!'),
        ],
    },
    // ── Level 54: Numbers ──
    {
        id: 'lv54', levelNum: 54, title: 'Before & After', emoji: '↔️', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('54a', 'pick-one', 'What comes before 10?', ['8', '11', '9', '7'], 2, '9!'),
            q('54b', 'pick-one', 'What comes after 25?', ['24', '27', '26', '23'], 2, '26!'),
            q('54c', 'pick-one', 'Between 30 and 32?', ['29', '33', '31', '28'], 2, '31!'),
            q('54d', 'pick-one', 'What comes before 50?', ['48', '51', '49', '47'], 2, '49!'),
        ],
    },
    // ── Level 55: Shapes ──
    {
        id: 'lv55', levelNum: 55, title: 'Symmetry', emoji: '🦋', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 2 },
        questions: [
            q('55a', 'pick-one', 'A butterfly is symmetrical, meaning...?', ['Big', 'Same on both sides', 'Round', 'Small'], 1, 'Both sides are the same! 🦋'),
            q('55b', 'true-false', 'A circle is symmetrical', ['True', 'False'], 0, 'Yes! Perfect symmetry!'),
            q('55c', 'pick-one', 'Which is symmetrical?', ['Letter P', 'Letter A', 'Letter J', 'Letter F'], 1, 'A is symmetrical!'),
        ],
    },
    // ── Level 56: Letters ──
    {
        id: 'lv56', levelNum: 56, title: 'Rhyming', emoji: '🎵', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('56a', 'pick-one', 'What rhymes with CAT?', ['Dog', 'Bat', 'Sun', 'Pen'], 1, 'Cat - Bat! 🦇'),
            q('56b', 'pick-one', 'What rhymes with SUN?', ['Moon', 'Fun', 'Star', 'Sky'], 1, 'Sun - Fun!'),
            q('56c', 'pick-one', 'What rhymes with FISH?', ['Bird', 'Cat', 'Dish', 'Tree'], 2, 'Fish - Dish!'),
        ],
    },
    // ── Level 57: Math ──
    {
        id: 'lv57', levelNum: 57, title: 'Money', emoji: '💰', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('57a', 'pick-one', '5 rupees + 5 rupees = ?', ['8', '12', '10', '15'], 2, '10 rupees! 💰'),
            q('57b', 'pick-one', 'Which coin is bigger in value?', ['1 rupee', '2 rupees', '5 rupees', '10 rupees'], 3, '10 rupees!'),
            q('57c', 'pick-one', '10 rupees - 3 rupees = ?', ['6', '8', '7', '5'], 2, '7 rupees!'),
        ],
    },
    // ── Level 58: EVS ──
    {
        id: 'lv58', levelNum: 58, title: 'Hygiene', emoji: '🧼', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('58a', 'pick-one', 'We should wash hands with...?', ['Mud', 'Soap', 'Oil', 'Juice'], 1, 'Soap! 🧼'),
            q('58b', 'true-false', 'We should brush teeth twice a day', ['True', 'False'], 0, 'Yes! Morning and night!'),
            q('58c', 'pick-one', 'We should bathe...?', ['Once a week', 'Never', 'Every day', 'Once a month'], 2, 'Every day! 🚿'),
        ],
    },
    // ── Level 59: Numbers ──
    {
        id: 'lv59', levelNum: 59, title: 'Skip Count 2s', emoji: '🐾', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('59a', 'pick-one', '2, 4, 6, 8, __?', ['9', '11', '10', '12'], 2, '10!'),
            q('59b', 'pick-one', '10, 12, 14, __?', ['15', '17', '16', '18'], 2, '16!'),
            q('59c', 'pick-one', '20, 22, 24, __?', ['25', '27', '26', '28'], 2, '26!'),
        ],
    },
    // ── Level 60: Math ──
    {
        id: 'lv60', levelNum: 60, title: 'Time', emoji: '🕐', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 2 },
        questions: [
            q('60a', 'pick-one', 'How many hours in a day?', ['12', '20', '24', '30'], 2, '24 hours! 🕐'),
            q('60b', 'pick-one', 'How many days in a week?', ['5', '6', '7', '10'], 2, '7 days!'),
            q('60c', 'true-false', 'There are 60 minutes in an hour', ['True', 'False'], 0, 'Yes! 60 minutes!'),
            q('60d', 'pick-one', 'Lunch time is usually at...?', ['6 AM', '12 PM', '9 PM', '3 AM'], 1, 'Noon!'),
        ],
    },
    // ── Level 61: Letters ──
    {
        id: 'lv61', levelNum: 61, title: 'Sight Words', emoji: '👁️', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('61a', 'pick-one', 'Which word is "THE"?', ['TEH', 'THE', 'HTE', 'TYE'], 1, 'THE!'),
            q('61b', 'pick-one', 'Which word is "AND"?', ['ADN', 'NAD', 'AND', 'DAN'], 2, 'AND!'),
            q('61c', 'pick-one', 'Which word is "IS"?', ['SI', 'IS', 'II', 'SS'], 1, 'IS!'),
        ],
    },
    // ── Level 62: EVS ──
    {
        id: 'lv62', levelNum: 62, title: 'Weather', emoji: '🌤️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('62a', 'pick-one', 'Rain comes from...?', ['Ground', 'Clouds', 'Trees', 'Mountains'], 1, 'Clouds! ☁️'),
            q('62b', 'pick-one', 'A rainbow has how many colors?', ['5', '6', '7', '8'], 2, '7 colors! 🌈'),
            q('62c', 'true-false', 'Snow is frozen water', ['True', 'False'], 0, 'Yes! ❄️'),
        ],
    },
    // ── Level 63: Shapes ──
    {
        id: 'lv63', levelNum: 63, title: 'Patterns', emoji: '🔲', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('63a', 'pick-one', '🔴🔵🔴🔵🔴__?', ['🔴', '🔵', '🟢', '🟡'], 1, 'Blue comes next!'),
            q('63b', 'pick-one', '⭐⭐🌙⭐⭐🌙__?', ['🌙', '⭐', '☀️', '🌈'], 1, 'Star comes next!'),
            q('63c', 'pick-one', '🔺🔲🔺🔲__?', ['🔲', '⭐', '🔺', '⚫'], 2, 'Triangle comes next!'),
        ],
    },
    // ── Level 64: Math ──
    {
        id: 'lv64', levelNum: 64, title: 'Place Value', emoji: '🏗️', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 2 },
        questions: [
            q('64a', 'pick-one', 'In 23, the 2 means...?', ['2', '20', '200', '3'], 1, '2 tens = 20!'),
            q('64b', 'pick-one', 'In 45, the 5 means...?', ['50', '5', '500', '15'], 1, '5 ones!'),
            q('64c', 'pick-one', 'In 67, how many tens?', ['7', '5', '6', '8'], 2, '6 tens!'),
        ],
    },
    // ── Level 65: EVS ──
    {
        id: 'lv65', levelNum: 65, title: 'Festivals', emoji: '🪔', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 2 },
        questions: [
            q('65a', 'pick-one', 'Festival of lights?', ['Holi', 'Diwali', 'Eid', 'Christmas'], 1, 'Diwali! 🪔'),
            q('65b', 'pick-one', 'Festival of colors?', ['Diwali', 'Eid', 'Holi', 'Onam'], 2, 'Holi! 🎨'),
            q('65c', 'pick-one', 'Santa Claus comes on...?', ['Diwali', 'Holi', 'Eid', 'Christmas'], 3, 'Christmas! 🎄'),
        ],
    },
    // ── Level 66: Numbers ──
    {
        id: 'lv66', levelNum: 66, title: 'Skip Count 5s', emoji: '🖐️', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('66a', 'pick-one', '5, 10, 15, 20, __?', ['22', '30', '25', '35'], 2, '25!'),
            q('66b', 'pick-one', '25, 30, 35, __?', ['45', '38', '40', '42'], 2, '40!'),
            q('66c', 'pick-one', '45, 50, 55, __?', ['58', '65', '60', '62'], 2, '60!'),
        ],
    },
    // ── Level 67: Letters ──
    {
        id: 'lv67', levelNum: 67, title: 'Blends', emoji: '🔗', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 2 },
        questions: [
            q('67a', 'pick-one', 'ST + AR = ?', ['Star', 'Tar', 'Bar', 'Car'], 0, 'Star! ⭐'),
            q('67b', 'pick-one', 'FL + OW + ER = ?', ['Power', 'Tower', 'Flower', 'Shower'], 2, 'Flower! 🌸'),
            q('67c', 'pick-one', 'TR + EE = ?', ['Free', 'Tree', 'Three', 'Bee'], 1, 'Tree! 🌳'),
        ],
    },
    // ── Level 68: Math ──
    {
        id: 'lv68', levelNum: 68, title: 'Shapes & Sides', emoji: '📐', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('68a', 'pick-one', 'Triangle + Square sides?', ['6', '8', '7', '5'], 2, '3 + 4 = 7!'),
            q('68b', 'pick-one', '2 triangles have how many sides?', ['4', '5', '6', '8'], 2, '3 + 3 = 6!'),
            q('68c', 'pick-one', 'Pentagon has how many sides?', ['4', '6', '5', '7'], 2, '5 sides!'),
        ],
    },
    // ── Level 69: EVS ──
    {
        id: 'lv69', levelNum: 69, title: 'Insects', emoji: '🐛', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('69a', 'pick-one', 'How many legs does an insect have?', ['4', '8', '6', '2'], 2, '6 legs!'),
            q('69b', 'pick-one', 'Which insect makes honey?', ['Ant', 'Bee', 'Fly', 'Beetle'], 1, 'Bee! 🐝'),
            q('69c', 'true-false', 'A spider is an insect', ['True', 'False'], 1, 'No! Spiders have 8 legs!'),
        ],
    },
    // ── Level 70: Numbers ──
    {
        id: 'lv70', levelNum: 70, title: 'Ordinals', emoji: '🥇', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 2 },
        questions: [
            q('70a', 'pick-one', 'Who comes first?', ['Second', 'Third', 'First', 'Fourth'], 2, 'First! 🥇'),
            q('70b', 'pick-one', 'After second comes...?', ['First', 'Fourth', 'Third', 'Fifth'], 2, 'Third! 🥉'),
            q('70c', 'pick-one', 'If 5 kids in a line, who is last?', ['1st', '3rd', '4th', '5th'], 3, '5th!'),
            q('70d', 'true-false', 'Second means position 2', ['True', 'False'], 0, 'Yes!'),
        ],
    },
    // ── Level 71: Letters ──
    {
        id: 'lv71', levelNum: 71, title: 'Opposites', emoji: '⬆️', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('71a', 'pick-one', 'Opposite of HOT?', ['Warm', 'Cold', 'Cool', 'Wet'], 1, 'Cold! ❄️'),
            q('71b', 'pick-one', 'Opposite of BIG?', ['Huge', 'Tall', 'Small', 'Wide'], 2, 'Small!'),
            q('71c', 'pick-one', 'Opposite of HAPPY?', ['Glad', 'Sad', 'Mad', 'Excited'], 1, 'Sad! 😢'),
            q('71d', 'pick-one', 'Opposite of UP?', ['Top', 'High', 'Down', 'Over'], 2, 'Down! ⬇️'),
        ],
    },
    // ── Level 72: Math ──
    {
        id: 'lv72', levelNum: 72, title: 'Story Math', emoji: '📚', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 2 },
        questions: [
            q('72a', 'pick-one', 'Anu had 12 🍎. She gave 5 away. How many left?', ['6', '8', '7', '5'], 2, '12 - 5 = 7!'),
            q('72b', 'pick-one', 'A hen laid 6 🥚. Then 4 more. Total?', ['8', '11', '10', '9'], 2, '6 + 4 = 10!'),
            q('72c', 'pick-one', '3 groups of 2 🍬. How many total?', ['5', '8', '6', '4'], 2, '3 x 2 = 6!'),
        ],
    },
    // ── Level 73: EVS ──
    {
        id: 'lv73', levelNum: 73, title: 'Environment', emoji: '♻️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 2 },
        questions: [
            q('73a', 'pick-one', 'We should save...?', ['Dirt', 'Water', 'Rocks', 'Sand'], 1, 'Water! 💧'),
            q('73b', 'true-false', 'Planting trees helps our Earth', ['True', 'False'], 0, 'Yes! 🌍'),
            q('73c', 'pick-one', 'We should throw garbage in...?', ['River', 'Road', 'Dustbin', 'Garden'], 2, 'Dustbin! 🗑️'),
            q('73d', 'pick-one', 'Which is renewable energy?', ['Coal', 'Petrol', 'Solar', 'Gas'], 2, 'Solar! ☀️'),
        ],
    },
    // ── Level 74: Shapes ──
    {
        id: 'lv74', levelNum: 74, title: 'Geometry Pro', emoji: '📏', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 2 },
        questions: [
            q('74a', 'pick-one', 'An octagon has how many sides?', ['6', '7', '8', '9'], 2, '8 sides!'),
            q('74b', 'pick-one', 'A shape with equal sides is called...?', ['Regular', 'Irregular', 'Broken', 'Mixed'], 0, 'Regular!'),
            q('74c', 'pick-one', 'Which has MORE corners: hexagon or square?', ['Square', 'Hexagon', 'Same'], 1, 'Hexagon has 6!'),
            q('74d', 'true-false', 'A circle has zero corners', ['True', 'False'], 0, 'Yes!'),
        ],
    },
    // ── Level 75: Math ──
    {
        id: 'lv75', levelNum: 75, title: 'Grand Finale', emoji: '🏆', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 3 },
        questions: [
            q('75a', 'pick-one', '25 + 15 = ?', ['35', '45', '40', '30'], 2, '40!'),
            q('75b', 'pick-one', '50 - 20 = ?', ['20', '35', '30', '25'], 2, '30!'),
            q('75c', 'pick-one', '11 + 9 = ?', ['18', '21', '20', '19'], 2, '20!'),
            q('75d', 'pick-one', '30 - 15 = ?', ['10', '20', '15', '25'], 2, '15!'),
            q('75e', 'true-false', '99 + 1 = 100', ['True', 'False'], 0, 'Yes! Century! 💯'),
        ],
    },
];

type ThemeId = 'festivals' | 'animals' | 'shapes' | 'bengal';

const AREA_META: Record<Area, { label: string; color: string }> = {
    letters: { label: 'Letters', color: '#FACC15' },
    reading: { label: 'Reading', color: '#A855F7' },
    numbers: { label: 'Numbers', color: '#84CC16' },
    math: { label: 'Math', color: '#14B8A6' },
    shapes: { label: 'Shapes', color: '#10B981' },
    evs: { label: 'My World', color: '#3B82F6' },
    stories: { label: 'Stories', color: '#FB923C' },
    rhymes: { label: 'Rhymes', color: '#8B5CF6' },
    art: { label: 'Art', color: '#EC4899' },
    gk: { label: 'Smart Kids', color: '#06B6D4' },
    emotions: { label: 'Feelings', color: '#2DD4BF' },
};

const THEME_META: Record<ThemeId, { title: string; emoji: string; sticker: string; badge: string }> = {
    festivals: { title: 'Festivals & Fun', emoji: '🪔', sticker: '🎊', badge: '🪔 Festival Buddy' },
    animals: { title: 'Animals & Nature', emoji: '🐯', sticker: '🦋', badge: '🐾 Animal Explorer' },
    shapes: { title: 'Shapes & Patterns', emoji: '🔺', sticker: '⭐', badge: '🔷 Shape Star' },
    bengal: { title: 'Bengal Adventure', emoji: '🌉', sticker: '🍬', badge: '🌉 Bengal Champ' },
};

function clampInt(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, Math.floor(n)));
}

function pickFrom<T>(arr: T[], seed: number): T {
    return arr[((seed % arr.length) + arr.length) % arr.length];
}

function shuffleBySeed<T>(arr: T[], seed: number): T[] {
    return arr
        .map((v, i) => ({ v, k: (seed * 9301 + i * 49297) % 233280 }))
        .sort((a, b) => a.k - b.k)
        .map(x => x.v);
}

function uniquePickFrom<T>(arr: T[], seed: number, count: number): T[] {
    const out: T[] = [];
    const used = new Set<number>();
    let i = 0;
    while (out.length < count && i < arr.length * 3) {
        const idx = ((seed + i * 7) % arr.length + arr.length) % arr.length;
        if (!used.has(idx)) {
            used.add(idx);
            out.push(arr[idx]);
        }
        i++;
    }
    return out.length >= count ? out : [...out, ...arr.slice(0, count - out.length)];
}

function repeatEmoji(emoji: string, n: number) {
    return Array.from({ length: n }).map(() => emoji).join('');
}

function numberOptions(correct: number, seed: number, min: number, max: number, count: number) {
    const opts = new Set<number>([correct]);
    let i = 0;
    while (opts.size < count && i < 80) {
        const n = clampInt(min + ((seed + i * 11) % (max - min + 1)), min, max);
        opts.add(n);
        i++;
    }
    return shuffleBySeed([...opts].map(String), seed);
}

function textOptions(correct: string, pool: string[], seed: number, count: number) {
    const opts = new Set<string>([correct]);
    let i = 0;
    while (opts.size < count && i < pool.length * 2) {
        opts.add(pool[(seed + i * 5) % pool.length]);
        i++;
    }
    return shuffleBySeed([...opts], seed);
}

function themeForLevel(levelNum: number): ThemeId {
    if (levelNum <= 110) return 'animals';
    if (levelNum <= 145) return 'shapes';
    if (levelNum <= 175) return 'festivals';
    return 'bengal';
}

function levelArea(levelNum: number): Area {
    const cycle = ['letters', 'reading', 'numbers', 'math', 'shapes', 'evs'] as const;
    return cycle[(levelNum - 1) % cycle.length];
}

function makeLettersQuestions(levelNum: number, theme: ThemeId): MapQuestion[] {
    const l = pickFrom(LETTERS, levelNum * 3);
    const next = pickFrom(LETTERS, levelNum * 3 + 1);
    const choices = uniquePickFrom(LETTERS, levelNum * 9, 6).map(x => x.label);
    const correct = next.label;
    const opts = textOptions(correct, choices, levelNum, 4);
    const phonicsCorrect = `${l.emoji} ${l.clue}`;
    const phonicsOpts = textOptions(phonicsCorrect, uniquePickFrom(LETTERS, levelNum * 13, 5).map(x => `${x.emoji} ${x.clue}`), levelNum * 2, 3);
    return [
        q(`${levelNum}a`, 'pick-one', `${THEME_META[theme].emoji} Which letter comes after ${l.label}?`, opts, opts.indexOf(correct), `Yes! After ${l.label} is ${correct}.`, '🔤'),
        q(`${levelNum}b`, 'pick-emoji', `${l.label} is for...?`, phonicsOpts, phonicsOpts.indexOf(phonicsCorrect), `${l.label} for ${l.clue}!`, l.emoji),
        q(`${levelNum}c`, 'true-false', 'Letters help us read words.', ['True', 'False'], 0, 'Yes! Letters make words.'),
    ];
}

function makeReadingQuestions(levelNum: number, theme: ThemeId): MapQuestion[] {
    const cvc = pickFrom(CVC_WORDS, levelNum * 2);
    const sight = pickFrom(SIGHT_WORDS, levelNum * 3);
    const cvcPool = uniquePickFrom(CVC_WORDS, levelNum * 7, 6).map(w => w.label);
    const cvcOpts = textOptions(cvc.label, cvcPool, levelNum, 4);
    const sightPool = uniquePickFrom(SIGHT_WORDS, levelNum * 5, 7);
    const sightOpts = textOptions(sight, sightPool, levelNum * 2, 4);
    return [
        q(`${levelNum}a`, 'pick-one', `${THEME_META[theme].emoji} Tap the word: ${sight}`, sightOpts, sightOpts.indexOf(sight), `Great! ${sight}.`, '👀'),
        q(`${levelNum}b`, 'pick-one', `Which word matches the picture? ${cvc.emoji}`, cvcOpts, cvcOpts.indexOf(cvc.label), `Yes! ${cvc.label}.`, cvc.emoji),
        q(`${levelNum}c`, 'true-false', 'We read from left to right.', ['True', 'False'], 0, 'Yes! Left to right.'),
    ];
}

function makeNumbersQuestions(levelNum: number, theme: ThemeId): MapQuestion[] {
    const max = levelNum < 120 ? 30 : 50;
    const countTarget = clampInt((levelNum * 7) % max + 1, 1, max);
    const itemEmoji = theme === 'animals' ? (pickFrom(ANIMALS, levelNum).emoji ?? '🐾') : theme === 'festivals' ? '🎈' : theme === 'shapes' ? '⭐' : '🍬';
    const countOpts = numberOptions(countTarget, levelNum, Math.max(1, countTarget - 4), Math.min(max, countTarget + 4), 4);
    const after = countTarget + 1 <= max ? countTarget + 1 : countTarget - 1;
    const afterOpts = numberOptions(after, levelNum * 2, 1, max, 4);
    const a = clampInt((levelNum * 3) % max + 1, 1, max);
    const b = clampInt((levelNum * 5) % max + 1, 1, max);
    const bigger = Math.max(a, b);
    const biggerOpts = textOptions(String(bigger), [String(a), String(b), String(bigger), String(Math.min(a, b))], levelNum, 4);
    return [
        q(`${levelNum}a`, 'pick-one', `Count! ${repeatEmoji(itemEmoji, Math.min(countTarget, 12))}`, countOpts, countOpts.indexOf(String(countTarget)), `Yes! ${countTarget}.`, itemEmoji),
        q(`${levelNum}b`, 'pick-one', `What comes after ${countTarget}?`, afterOpts, afterOpts.indexOf(String(after)), `After ${countTarget} is ${after}.`, '🔢'),
        q(`${levelNum}c`, 'pick-one', `Which is bigger? ${a} or ${b}`, biggerOpts, biggerOpts.indexOf(String(bigger)), `${bigger} is bigger!`),
    ];
}

function makeMathQuestions(levelNum: number, theme: ThemeId): MapQuestion[] {
    const max = levelNum < 120 ? 20 : 50;
    const x = clampInt((levelNum * 3) % max + 1, 1, max);
    const y = clampInt((levelNum * 5) % max + 1, 1, max);
    const addAns = x + y <= max ? x + y : max;
    const addB = addAns - x;
    const addOpts = numberOptions(addAns, levelNum, Math.max(0, addAns - 4), Math.min(max, addAns + 4), 4);

    const subA = clampInt((levelNum * 7) % max + 4, 4, max);
    const subB = clampInt((levelNum * 2) % Math.min(10, subA), 1, Math.min(10, subA));
    const subAns = subA - subB;
    const subOpts = numberOptions(subAns, levelNum * 2, Math.max(0, subAns - 4), Math.min(max, subAns + 4), 4);

    const themeEmoji = theme === 'bengal' ? '🍬' : theme === 'festivals' ? '🪔' : theme === 'animals' ? (pickFrom(ANIMALS, levelNum).emoji ?? '🐯') : '🔺';
    return [
        q(`${levelNum}a`, 'pick-one', `${x} + ${addB} = ?`, addOpts, addOpts.indexOf(String(addAns)), `Great! ${addAns}.`, '➕'),
        q(`${levelNum}b`, 'pick-one', `${subA} - ${subB} = ?`, subOpts, subOpts.indexOf(String(subAns)), `Nice! ${subAns}.`, '➖'),
        q(`${levelNum}c`, 'pick-one', `Mina has ${x} ${themeEmoji}. She gives ${subB} away. How many left?`, subOpts, subOpts.indexOf(String(subAns)), `${x} - ${subB} = ${subAns}!`, themeEmoji),
    ];
}

function makeShapesQuestions(levelNum: number, theme: ThemeId): MapQuestion[] {
    const shape = pickFrom(SHAPES, levelNum * 2);
    const color = pickFrom(COLORS, levelNum * 3);
    const shapeChoices = uniquePickFrom(SHAPES, levelNum * 9, 6).map(s => `${s.emoji} ${s.label}`);
    const shapeCorrect = `${shape.emoji} ${shape.label}`;
    const shapeOpts = textOptions(shapeCorrect, shapeChoices, levelNum, 4);

    const colorChoices = uniquePickFrom(COLORS, levelNum * 11, 6).map(c => `${c.emoji} ${c.label}`);
    const colorCorrect = `${color.emoji} ${color.label}`;
    const colorOpts = textOptions(colorCorrect, colorChoices, levelNum * 2, 4);

    const themeHint = THEME_META[theme].emoji;
    return [
        q(`${levelNum}a`, 'pick-one', `${themeHint} Find the shape: ${shape.label}`, shapeOpts, shapeOpts.indexOf(shapeCorrect), `Yes! ${shape.label}.`, shape.emoji),
        q(`${levelNum}b`, 'pick-one', `Find the color: ${color.label}`, colorOpts, colorOpts.indexOf(colorCorrect), `Yes! ${color.label}.`, color.emoji),
        q(`${levelNum}c`, 'true-false', 'A circle has corners.', ['True', 'False'], 1, 'No corners. Circle is round. ⚫'),
    ];
}

function makeEvsQuestions(levelNum: number, theme: ThemeId): MapQuestion[] {
    if (theme === 'festivals') {
        const prompts = [
            { prompt: 'Which festival has pandals and Goddess Durga? 🪔', options: ['🪔 Durga Puja', '🎄 Christmas', '🎨 Holi'], answer: 0, expl: 'Durga Puja! 🪔' },
            { prompt: 'Bengali New Year is called... 🌼', options: ['🌼 Poila Boishakh', '🎆 Diwali', '🪁 Makar Sankranti'], answer: 0, expl: 'Poila Boishakh! 🌼' },
            { prompt: 'We worship Saraswati on... 📚', options: ['📚 Saraswati Puja', '🍪 Picnic', '🏏 Match'], answer: 0, expl: 'Saraswati Puja! 📚' },
        ];
        const item = pickFrom(prompts, levelNum);
        return [
            q(`${levelNum}a`, 'pick-one', item.prompt, item.options, item.answer, item.expl, '🎉'),
            q(`${levelNum}b`, 'true-false', 'We should keep our area clean after festivals.', ['True', 'False'], 0, 'Yes! Clean is good. 🧹'),
            q(`${levelNum}c`, 'pick-one', 'Which is a sweet from Bengal?', ['🍬 Rosogolla', '🍕 Pizza', '🌮 Taco'], 0, 'Rosogolla! 🍬'),
        ];
    }

    if (theme === 'bengal') {
        const places = ['🌉 Howrah Bridge', '🌿 Sundarbans', '⛰️ Darjeeling', '🏙️ Kolkata'];
        const place = pickFrom(places, levelNum);
        const placeOpts = textOptions(place, places, levelNum, 3);
        return [
            q(`${levelNum}a`, 'pick-one', 'Pick a place in West Bengal.', placeOpts, placeOpts.indexOf(place), `Yes! ${place}.`, '🌉'),
            q(`${levelNum}b`, 'pick-one', 'Which animal is famous in Sundarbans?', ['🐅 Tiger', '🐧 Penguin', '🦒 Giraffe'], 0, 'Royal Bengal Tiger! 🐅'),
            q(`${levelNum}c`, 'true-false', 'We say "Nomoshkar" to greet people.', ['True', 'False'], 0, 'Yes! Nomoshkar. 🙏'),
        ];
    }

    if (theme === 'animals') {
        const a = pickFrom(ANIMALS, levelNum * 2);
        const opts = textOptions(`${a.emoji} ${a.label}`, uniquePickFrom(ANIMALS, levelNum * 3, 5).map(x => `${x.emoji} ${x.label}`), levelNum, 3);
        return [
            q(`${levelNum}a`, 'pick-one', `Which animal is this? ${a.emoji}`, opts, opts.indexOf(`${a.emoji} ${a.label}`), `Yes! ${a.label}.`, a.emoji),
            q(`${levelNum}b`, 'true-false', 'Birds can fly in the sky.', ['True', 'False'], 0, 'Yes! Birds can fly. 🐦'),
            q(`${levelNum}c`, 'pick-one', 'Where does a fish live?', ['💧 Water', '🌳 Tree', '🏠 House'], 0, 'Fish lives in water. 💧', '🐟'),
        ];
    }

    const fruit = pickFrom(FRUITS, levelNum * 2);
    const fruitCorrect = `${fruit.emoji} ${fruit.label}`;
    const fruitOpts = textOptions(fruitCorrect, uniquePickFrom(FRUITS, levelNum, 5).map(x => `${x.emoji} ${x.label}`), levelNum, 3);
    return [
        q(`${levelNum}a`, 'pick-one', 'Which one is a fruit?', fruitOpts, fruitOpts.indexOf(fruitCorrect), `Yes! ${fruit.label}.`, fruit.emoji),
        q(`${levelNum}b`, 'true-false', 'Fruits are healthy food.', ['True', 'False'], 0, 'Yes! Fruits are healthy.'),
        q(`${levelNum}c`, 'pick-one', 'Which is a shape?', ['🔺 Triangle', '🐶 Dog', '🍎 Apple'], 0, 'Triangle is a shape! 🔺'),
    ];
}

function titleForLevel(theme: ThemeId, area: Area) {
    const t = THEME_META[theme];
    const label = AREA_META[area]?.label ?? 'Fun';
    return `${t.title}: ${label}`;
}

function questionsForLevel(levelNum: number, theme: ThemeId, area: Area) {
    if (area === 'letters') return makeLettersQuestions(levelNum, theme);
    if (area === 'reading') return makeReadingQuestions(levelNum, theme);
    if (area === 'numbers') return makeNumbersQuestions(levelNum, theme);
    if (area === 'math') return makeMathQuestions(levelNum, theme);
    if (area === 'shapes') return makeShapesQuestions(levelNum, theme);
    return makeEvsQuestions(levelNum, theme);
}

function buildCandyLevelsMore(fromLevelNum: number, toLevelNum: number): MapLevel[] {
    const out: MapLevel[] = [];
    for (let levelNum = fromLevelNum; levelNum <= toLevelNum; levelNum++) {
        const theme = themeForLevel(levelNum);
        const area = levelArea(levelNum);
        const meta = AREA_META[area];
        const t = THEME_META[theme];
        const badgeMilestone = levelNum === 110 || levelNum === 145 || levelNum === 175 || levelNum === 200;
        const stickerMilestone = levelNum % 5 === 0;
        out.push({
            id: `lv${levelNum}`,
            levelNum,
            title: titleForLevel(theme, area),
            emoji: t.emoji,
            area,
            areaLabel: meta.label,
            areaColor: meta.color,
            questions: questionsForLevel(levelNum, theme, area),
            reward: { stars: 1, sticker: stickerMilestone ? t.sticker : undefined, badge: badgeMilestone ? t.badge : undefined },
        });
    }
    return out;
}

export const CANDY_LEVELS: MapLevel[] = [...CANDY_LEVELS_BASE, ...buildCandyLevelsMore(76, 200)];

