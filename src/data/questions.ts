import type { Area } from './syllabus';

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
    area: Area;
    areaLabel: string;
    areaColor: string;
    questions: MapQuestion[];
    reward: { stars: number };
}

// Helper
function q(id: string, type: MapQuestion['type'], prompt: string, options: string[], correctIndex: number, explanation: string, emoji?: string): MapQuestion {
    return { id, type, prompt, emoji, options, correctIndex, explanation };
}

// ─── Single Unified Adventure: 150 levels, mixed subjects ───────────
export const CANDY_LEVELS: MapLevel[] = [
    // ── Level 1: A B C ──
    {
        id: 'lv1', levelNum: 1, title: 'A B C', emoji: '🔤', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('1a', 'pick-one', 'Which letter is first? 🔤', ['A', 'D', 'C', 'B'], 0, 'A is the first letter!', '🔤'),
            q('1b', 'pick-emoji', 'A is for...?', ['🐶 Dog', '🍎 Apple', '🐱 Cat'], 1, 'A for Apple! 🍎'),
            q('1c', 'true-false', 'B comes after A', ['True', 'False'], 0, 'Yes! A then B')
        ],
    },
    // ── Level 2: Count 1-5 ──
    {
        id: 'lv2', levelNum: 2, title: 'Count 1-5', emoji: '1️⃣', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('2a', 'pick-one', 'Count the apples! 🍎🍎🍎', ['3', '2', '4', '5'], 0, 'Great counting! There are 3 apples!', '🍎'),
            q('2b', 'pick-one', 'What comes after 2?', ['5', '3', '4', '1'], 1, '3 comes after 2!'),
            q('2c', 'true-false', '5 is bigger than 3', ['True', 'False'], 0, 'Yes! 5 > 3')
        ],
    },
    // ── Level 3: Circle ──
    {
        id: 'lv3', levelNum: 3, title: 'Circle', emoji: '⚫', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('3a', 'pick-one', 'Find the circle! 🔍', ['📱 Rectangle', '🔺 Triangle', '⬛ Square', '⚫ Circle'], 3, 'Yes! A circle is round like a ball! ⚽'),
            q('3b', 'pick-one', 'What is round like a circle? 🎡', ['Roof', 'Door', 'Wheel', 'Book'], 2, 'Excellent! A wheel is round! 🎡'),
            q('3c', 'true-false', 'Is a coin round? 🪙', ['True', 'False'], 0, 'Yes! Coins are circles! Good job! 🪙')
        ],
    },
    // ── Level 4: D E F ──
    {
        id: 'lv4', levelNum: 4, title: 'D E F', emoji: '📝', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('4a', 'pick-one', 'D is for...?', ['Fish', 'Egg', 'Cat', 'Dog'], 3, 'D for Dog! 🐶', '🐶'),
            q('4b', 'pick-one', 'Which letter comes after D?', ['G', 'F', 'C', 'E'], 3, 'E comes after D!'),
            q('4c', 'pick-emoji', 'F is for...?', ['🐘 Elephant', '🍇 Grapes', '🐟 Fish'], 2, 'F for Fish! 🐟'),
            q('4d', 'true-false', 'E is for Elephant', ['True', 'False'], 0, 'Yes! E for Elephant 🐘')
        ],
    },
    // ── Level 5: Pet Animals ──
    {
        id: 'lv5', levelNum: 5, title: 'Pet Animals', emoji: '🐶', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('5a', 'pick-one', 'Which animal says WOOF? 🐶', ['Cow', 'Dog', 'Horse', 'Cat'], 1, 'Yes! Dog says WOOF! 🐶'),
            q('5b', 'pick-one', 'Who gives us milk? 🥛', ['Hen', 'Cow', 'Dog', 'Cat'], 1, 'Super! Cow gives us yummy milk! 🐮'),
            q('5c', 'pick-one', 'Which animal says MEOW? 🐱', ['Duck', 'Dog', 'Cat', 'Horse'], 2, 'Perfect! Cat says MEOW! 🐱')
        ],
    },
    // ── Level 6: Add to 5 ──
    {
        id: 'lv6', levelNum: 6, title: 'Add to 5', emoji: '➕', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('6a', 'pick-one', '1 + 1 = ?', ['2', '4', '1', '3'], 0, '1 plus 1 equals 2!', '➕'),
            q('6b', 'pick-one', '2 + 1 = ?', ['1', '4', '3', '2'], 2, '2 plus 1 equals 3!'),
            q('6c', 'pick-one', '2 + 3 = ?', ['4', '3', '6', '5'], 3, '2 plus 3 equals 5!')
        ],
    },
    // ── Level 7: Count 6-10 ──
    {
        id: 'lv7', levelNum: 7, title: 'Count 6-10', emoji: '🔢', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('7a', 'pick-one', 'How many stars? ⭐⭐⭐⭐⭐⭐⭐', ['5', '6', '8', '7'], 3, 'There are 7 stars!', '⭐'),
            q('7b', 'pick-one', 'What comes after 9?', ['7', '10', '8', '11'], 1, '10 comes after 9!'),
            q('7c', 'pick-one', 'Which is biggest?', ['10', '6', '8', '7'], 0, '10 is the biggest!')
        ],
    },
    // ── Level 8: G H I ──
    {
        id: 'lv8', levelNum: 8, title: 'G H I', emoji: '✏️', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('8a', 'pick-one', 'G is for...?', ['Ice cream', 'Hat', 'Grapes', 'Jam'], 2, 'G for Grapes! 🍇', '🍇'),
            q('8b', 'pick-one', 'Which letter is for Hat?', ['H', 'I', 'J', 'G'], 0, 'H for Hat! 🎩'),
            q('8c', 'pick-emoji', 'I is for...?', ['🍦 Ice cream', '🪁 Kite', '🦁 Lion'], 0, 'I for Ice cream! 🍦')
        ],
    },
    // ── Level 9: Square & Rectangle ──
    {
        id: 'lv9', levelNum: 9, title: 'Square & Rectangle', emoji: '⬛', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('9a', 'pick-one', 'A square has how many sides?', ['5', '6', '3', '4'], 3, 'A square has 4 equal sides!'),
            q('9b', 'pick-one', 'Which is rectangle-shaped?', ['Door', 'Wheel', 'Coin', 'Ball'], 0, 'A door is a rectangle!'),
            q('9c', 'true-false', 'A square has 4 equal sides', ['True', 'False'], 0, 'Yes! All 4 sides are equal')
        ],
    },
    // ── Level 10: Wild Animals ──
    {
        id: 'lv10', levelNum: 10, title: 'Wild Animals', emoji: '🦁', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 2 },
        questions: [
            q('10a', 'pick-one', 'Who is the king of the jungle?', ['Lion', 'Bear', 'Elephant', 'Tiger'], 0, 'Lion is the king! 🦁'),
            q('10b', 'pick-one', 'Which has stripes?', ['Elephant', 'Bear', 'Tiger', 'Lion'], 2, 'Tiger has stripes! 🐯'),
            q('10c', 'true-false', 'Elephant is the biggest land animal', ['True', 'False'], 0, 'Yes! Elephants are huge! 🐘'),
            q('10d', 'pick-one', 'Which has a long neck?', ['Monkey', 'Giraffe', 'Fox', 'Bear'], 1, 'Giraffe! 🦒')
        ],
    },
    // ── Level 11: Add to 10 ──
    {
        id: 'lv11', levelNum: 11, title: 'Add to 10', emoji: '🔢', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('11a', 'pick-one', '3 + 4 = ?', ['8', '7', '5', '6'], 1, '3 plus 4 equals 7!'),
            q('11b', 'pick-one', '5 + 5 = ?', ['9', '11', '8', '10'], 3, '5 plus 5 equals 10!'),
            q('11c', 'pick-one', '6 + 2 = ?', ['7', '6', '9', '8'], 3, '6 plus 2 equals 8!')
        ],
    },
    // ── Level 12: J K L ──
    {
        id: 'lv12', levelNum: 12, title: 'J K L', emoji: '🎯', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('12a', 'pick-one', 'J is for...?', ['Apple', 'Lion', 'Kite', 'Jam'], 3, 'J for Jam! 🍯', '🍯'),
            q('12b', 'pick-one', 'K is for...?', ['Hat', 'Cat', 'Kite', 'Dog'], 2, 'K for Kite! 🪁'),
            q('12c', 'pick-emoji', 'L is for...?', ['🦁 Lion', '👃 Nose', '🥭 Mango'], 0, 'L for Lion! 🦁'),
            q('12d', 'true-false', 'K comes before J', ['True', 'False'], 1, 'No! J comes before K')
        ],
    },
    // ── Level 13: Triangle ──
    {
        id: 'lv13', levelNum: 13, title: 'Triangle', emoji: '🔺', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('13a', 'pick-one', 'A triangle has how many sides?', ['2', '3', '4', '5'], 1, 'A triangle has 3 sides!'),
            q('13b', 'pick-one', 'What shape is a pizza slice?', ['Star', 'Circle', 'Triangle', 'Square'], 2, 'Pizza slice is a triangle!'),
            q('13c', 'pick-one', 'Which looks like a roof?', ['Star', 'Circle', 'Oval', 'Triangle'], 3, 'Roofs are triangle-shaped!')
        ],
    },
    // ── Level 14: Count 11-20 ──
    {
        id: 'lv14', levelNum: 14, title: 'Count 11-20', emoji: '🔟', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('14a', 'pick-one', 'What comes after 15?', ['16', '14', '17', '13'], 0, '16 comes after 15!'),
            q('14b', 'pick-one', 'Which number is twelve?', ['11', '13', '20', '12'], 3, 'Twelve is 12!'),
            q('14c', 'true-false', '20 comes after 19', ['True', 'False'], 0, 'Yes! 19, 20!'),
            q('14d', 'pick-one', 'Between 17 and 19?', ['20', '16', '15', '18'], 3, '18!')
        ],
    },
    // ── Level 15: Birds ──
    {
        id: 'lv15', levelNum: 15, title: 'Birds', emoji: '🦜', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 2 },
        questions: [
            q('15a', 'pick-one', 'Which bird can talk?', ['Owl', 'Penguin', 'Eagle', 'Parrot'], 3, 'Parrot can talk! 🦜'),
            q('15b', 'pick-one', 'National bird of India?', ['Peacock', 'Eagle', 'Owl', 'Parrot'], 0, 'Peacock! 🦚'),
            q('15c', 'true-false', 'Penguins can fly', ['True', 'False'], 1, 'No! Penguins swim!')
        ],
    },
    // ── Level 16: Subtract ──
    {
        id: 'lv16', levelNum: 16, title: 'Subtract', emoji: '➖', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('16a', 'pick-one', '5 - 2 = ?', ['4', '2', '1', '3'], 3, '5 minus 2 equals 3!'),
            q('16b', 'pick-one', '8 - 3 = ?', ['5', '6', '3', '4'], 0, '8 minus 3 equals 5!'),
            q('16c', 'pick-one', '10 - 4 = ?', ['6', '8', '5', '7'], 0, '10 minus 4 equals 6!')
        ],
    },
    // ── Level 17: M N O ──
    {
        id: 'lv17', levelNum: 17, title: 'M N O', emoji: '🌟', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('17a', 'pick-one', 'M is for...?', ['Nose', 'Mango', 'Parrot', 'Orange'], 1, 'M for Mango! 🥭', '🥭'),
            q('17b', 'pick-one', 'Which letter is for Nose?', ['O', 'M', 'P', 'N'], 3, 'N for Nose! 👃'),
            q('17c', 'pick-emoji', 'O is for...?', ['👸 Queen', '🦜 Parrot', '🍊 Orange'], 2, 'O for Orange! 🍊')
        ],
    },
    // ── Level 18: Colors 1 ──
    {
        id: 'lv18', levelNum: 18, title: 'Colors 1', emoji: '🔴', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('18a', 'pick-one', 'What color is an apple?', ['Green', 'Blue', 'Yellow', 'Red'], 3, 'Apples are red! 🍎'),
            q('18b', 'pick-one', 'What color is the sky?', ['Red', 'Orange', 'Green', 'Blue'], 3, 'The sky is blue! 🔵'),
            q('18c', 'pick-one', 'What color is grass?', ['Green', 'Purple', 'Yellow', 'Red'], 0, 'Grass is green! 🟢'),
            q('18d', 'pick-one', 'What color is a banana?', ['Blue', 'Yellow', 'Green', 'Red'], 1, 'Bananas are yellow! 🍌')
        ],
    },
    // ── Level 19: Fruits ──
    {
        id: 'lv19', levelNum: 19, title: 'Fruits', emoji: '🍎', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('19a', 'pick-one', 'King of fruits?', ['Banana', 'Mango', 'Apple', 'Orange'], 1, 'Mango is the king! 🥭'),
            q('19b', 'pick-one', 'Yellow and long fruit?', ['Grapes', 'Apple', 'Orange', 'Banana'], 3, 'Banana! 🍌'),
            q('19c', 'pick-one', 'Round and orange fruit?', ['Mango', 'Orange', 'Banana', 'Apple'], 1, 'Orange! 🍊')
        ],
    },
    // ── Level 20: Mixed +/- ──
    {
        id: 'lv20', levelNum: 20, title: 'Mixed +/-', emoji: '🎯', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 2 },
        questions: [
            q('20a', 'pick-one', '7 + 3 = ?', ['9', '11', '8', '10'], 3, '7 plus 3 equals 10!'),
            q('20b', 'pick-one', '9 - 5 = ?', ['4', '5', '3', '6'], 0, '9 minus 5 equals 4!'),
            q('20c', 'pick-one', '6 + 4 = ?', ['8', '9', '10', '11'], 2, '6 plus 4 equals 10!'),
            q('20d', 'pick-one', '7 - 2 = ?', ['3', '5', '6', '4'], 1, '7 minus 2 equals 5!')
        ],
    },
    // ── Level 21: P Q R ──
    {
        id: 'lv21', levelNum: 21, title: 'P Q R', emoji: '🎨', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('21a', 'pick-one', 'P is for...?', ['Parrot', 'Rabbit', 'Sun', 'Queen'], 0, 'P for Parrot! 🦜', '🦜'),
            q('21b', 'pick-one', 'Q is for...?', ['Rabbit', 'Queen', 'Tiger', 'Sun'], 1, 'Q for Queen! 👸'),
            q('21c', 'true-false', 'R is for Rabbit', ['True', 'False'], 0, 'Yes! R for Rabbit 🐰')
        ],
    },
    // ── Level 22: Tens ──
    {
        id: 'lv22', levelNum: 22, title: 'Tens', emoji: '🔢', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('22a', 'pick-one', 'Count by 10s: 10, 20, __', ['15', '30', '40', '25'], 1, '10, 20, 30!'),
            q('22b', 'pick-one', 'How many tens in 50?', ['4', '3', '5', '6'], 2, '50 has 5 tens!'),
            q('22c', 'true-false', 'Twenty comes after nineteen', ['True', 'False'], 0, 'Yes! 19, 20! 🎯')
        ],
    },
    // ── Level 23: Vegetables ──
    {
        id: 'lv23', levelNum: 23, title: 'Vegetables', emoji: '🥕', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('23a', 'pick-one', 'Which is orange and crunchy?', ['Carrot', 'Onion', 'Potato', 'Tomato'], 0, 'Carrot! 🥕'),
            q('23b', 'pick-one', 'Which makes you cry?', ['Potato', 'Onion', 'Tomato', 'Carrot'], 1, 'Onion! 🧅'),
            q('23c', 'true-false', 'Potato grows underground', ['True', 'False'], 0, 'Yes! 🥔')
        ],
    },
    // ── Level 24: Patterns ──
    {
        id: 'lv24', levelNum: 24, title: 'Patterns', emoji: '🔮', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('24a', 'pick-one', '2, 4, 6, __?', ['8', '9', '10', '7'], 0, 'Pattern +2! 2, 4, 6, 8'),
            q('24b', 'pick-one', '5, 10, 15, __?', ['16', '20', '18', '25'], 1, 'Pattern +5! 5, 10, 15, 20'),
            q('24c', 'pick-one', '1, 3, 5, __?', ['6', '9', '8', '7'], 3, 'Pattern +2! 1, 3, 5, 7')
        ],
    },
    // ── Level 25: S T U ──
    {
        id: 'lv25', levelNum: 25, title: 'S T U', emoji: '☀️', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 2 },
        questions: [
            q('25a', 'pick-emoji', 'S is for...?', ['🐯 Tiger', '☀️ Sun', '☂️ Umbrella'], 1, 'S for Sun! ☀️'),
            q('25b', 'pick-one', 'T is for...?', ['Tiger', 'Sun', 'Van', 'Umbrella'], 0, 'T for Tiger! 🐯'),
            q('25c', 'pick-one', 'U is for...?', ['Watch', 'Van', 'Umbrella', 'Yak'], 2, 'U for Umbrella! ☂️')
        ],
    },
    // ── Level 26: Colors 2 ──
    {
        id: 'lv26', levelNum: 26, title: 'Colors 2', emoji: '🟣', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('26a', 'pick-one', 'Mix red + blue = ?', ['Orange', 'Purple', 'Yellow', 'Green'], 1, 'Red + Blue = Purple!'),
            q('26b', 'pick-one', 'Mix red + yellow = ?', ['Blue', 'Purple', 'Green', 'Orange'], 3, 'Red + Yellow = Orange!'),
            q('26c', 'pick-one', 'What color is chocolate?', ['White', 'Grey', 'Brown', 'Pink'], 2, 'Brown! 🍫')
        ],
    },
    // ── Level 27: Body Parts ──
    {
        id: 'lv27', levelNum: 27, title: 'Body Parts', emoji: '👀', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('27a', 'pick-one', 'We see with our...?', ['Nose', 'Ears', 'Mouth', 'Eyes'], 3, 'We see with eyes! 👀'),
            q('27b', 'pick-one', 'How many fingers do we have?', ['5', '8', '10', '12'], 2, 'We have 10! 🖐️🖐️'),
            q('27c', 'pick-one', 'We hear with our...?', ['Ears', 'Mouth', 'Nose', 'Eyes'], 0, 'We hear with ears! 👂')
        ],
    },
    // ── Level 28: Word Problems ──
    {
        id: 'lv28', levelNum: 28, title: 'Word Problems', emoji: '📝', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 2 },
        questions: [
            q('28a', 'pick-one', 'Raju has 3 🍎 & gets 4 more. How many?', ['6', '5', '8', '7'], 3, '3 + 4 = 7!'),
            q('28b', 'pick-one', 'Maya has 8 🍪, eats 2. How many left?', ['4', '6', '7', '5'], 1, '8 - 2 = 6!'),
            q('28c', 'pick-one', '5 🐦 on a tree. 3 more come. How many?', ['6', '7', '9', '8'], 3, '5 + 3 = 8!')
        ],
    },
    // ── Level 29: V W X ──
    {
        id: 'lv29', levelNum: 29, title: 'V W X', emoji: '🚐', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('29a', 'pick-one', 'V is for...?', ['Van', 'Watch', 'Xylophone', 'Yak'], 0, 'V for Van! 🚐', '🚐'),
            q('29b', 'pick-one', 'W is for...?', ['Van', 'Yak', 'Zebra', 'Watch'], 3, 'W for Watch! ⌚'),
            q('29c', 'true-false', 'X is for Xylophone', ['True', 'False'], 0, 'Yes! X for Xylophone 🎵')
        ],
    },
    // ── Level 30: Odd & Even ──
    {
        id: 'lv30', levelNum: 30, title: 'Odd & Even', emoji: '🎲', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 2 },
        questions: [
            q('30a', 'pick-one', 'Which is even?', ['4', '5', '3', '7'], 0, '4 is even! 2,4,6,8...'),
            q('30b', 'pick-one', 'Which is odd?', ['2', '6', '8', '9'], 3, '9 is odd! 1,3,5,7,9...'),
            q('30c', 'true-false', '6 is even', ['True', 'False'], 0, 'Yes! 6 is even'),
            q('30d', 'pick-one', 'Which is odd?', ['4', '10', '2', '7'], 3, '7 is odd!')
        ],
    },
    // ── Level 31: Seasons ──
    {
        id: 'lv31', levelNum: 31, title: 'Seasons', emoji: '☀️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('31a', 'pick-one', 'Which season is very hot?', ['Rainy', 'Summer', 'Winter', 'Spring'], 1, 'Summer! ☀️'),
            q('31b', 'pick-one', 'We use umbrellas in...?', ['Summer', 'Rainy season', 'Spring', 'Winter'], 1, 'Rainy season! 🌧️'),
            q('31c', 'pick-one', 'We wear sweaters in...?', ['Autumn', 'Rainy', 'Winter', 'Summer'], 2, 'Winter! ❄️')
        ],
    },
    // ── Level 32: Y Z ──
    {
        id: 'lv32', levelNum: 32, title: 'Y Z', emoji: '🦓', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('32a', 'pick-one', 'Y is for...?', ['Ball', 'Apple', 'Yak', 'Zebra'], 2, 'Y for Yak! 🐂', '🐂'),
            q('32b', 'pick-one', 'Z is for...?', ['Zebra', 'Cat', 'Apple', 'Yak'], 0, 'Z for Zebra! 🦓'),
            q('32c', 'pick-one', 'Z is the ___ letter', ['26th', '25th', '27th', '24th'], 0, 'Z is the 26th letter!')
        ],
    },
    // ── Level 33: Doubles ──
    {
        id: 'lv33', levelNum: 33, title: 'Doubles', emoji: '👯', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('33a', 'pick-one', '3 + 3 = ?', ['6', '7', '5', '4'], 0, 'Double 3 is 6!'),
            q('33b', 'pick-one', '4 + 4 = ?', ['6', '9', '7', '8'], 3, 'Double 4 is 8!'),
            q('33c', 'pick-one', '5 + 5 = ?', ['10', '9', '8', '11'], 0, 'Double 5 is 10!'),
            q('33d', 'pick-one', '6 + 6 = ?', ['11', '13', '12', '10'], 2, 'Double 6 is 12!')
        ],
    },
    // ── Level 34: Star & Heart ──
    {
        id: 'lv34', levelNum: 34, title: 'Star & Heart', emoji: '⭐', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('34a', 'pick-one', 'A star has how many points?', ['6', '4', '3', '5'], 3, '5 points!'),
            q('34b', 'pick-one', 'A diamond looks like a...?', ['Wheel', 'Box', 'Kite', 'Ball'], 2, 'A kite!'),
            q('34c', 'true-false', 'A heart has straight edges', ['True', 'False'], 1, 'No! Hearts are curvy ❤️')
        ],
    },
    // ── Level 35: Transport ──
    {
        id: 'lv35', levelNum: 35, title: 'Transport', emoji: '🚗', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 2 },
        questions: [
            q('35a', 'pick-one', 'Which goes on rails?', ['Bike', 'Bus', 'Train', 'Car'], 2, 'Train! 🚂'),
            q('35b', 'pick-one', 'Which flies?', ['Car', 'Bus', 'Airplane', 'Ship'], 2, 'Airplane! ✈️'),
            q('35c', 'pick-one', 'Bicycle has how many wheels?', ['2', '1', '3', '4'], 0, '2 wheels! 🚲')
        ],
    },
    // ── Level 36: Vowels ──
    {
        id: 'lv36', levelNum: 36, title: 'Vowels', emoji: '🌈', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 2 },
        questions: [
            q('36a', 'pick-one', 'Which is a vowel?', ['B', 'C', 'A', 'D'], 2, 'A is a vowel! A,E,I,O,U', '🌈'),
            q('36b', 'true-false', 'E is a vowel', ['True', 'False'], 0, 'Yes!'),
            q('36c', 'pick-one', 'How many vowels?', ['6', '3', '4', '5'], 3, '5: A, E, I, O, U'),
            q('36d', 'true-false', 'B is a vowel', ['True', 'False'], 1, 'No! B is a consonant')
        ],
    },
    // ── Level 37: Number Names ──
    {
        id: 'lv37', levelNum: 37, title: 'Number Names', emoji: '📖', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('37a', 'pick-one', 'Seven as a number?', ['6', '9', '7', '8'], 2, 'Seven is 7!'),
            q('37b', 'pick-one', 'Name of 15?', ['Thirteen', 'Fifteen', 'Fourteen', 'Sixteen'], 1, 'Fifteen!'),
            q('37c', 'pick-one', 'Twenty as a number?', ['22', '20', '30', '12'], 1, 'Twenty is 20!'),
            q('37d', 'true-false', 'Eleven means 12', ['True', 'False'], 1, 'No! Eleven is 11')
        ],
    },
    // ── Level 38: Bigger Sums ──
    {
        id: 'lv38', levelNum: 38, title: 'Bigger Sums', emoji: '💪', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 2 },
        questions: [
            q('38a', 'pick-one', '8 + 7 = ?', ['14', '13', '16', '15'], 3, '15!'),
            q('38b', 'pick-one', '12 - 5 = ?', ['8', '6', '7', '9'], 2, '7!'),
            q('38c', 'pick-one', '9 + 6 = ?', ['13', '16', '15', '14'], 2, '15!'),
            q('38d', 'pick-one', '14 - 8 = ?', ['5', '4', '6', '7'], 2, '6!')
        ],
    },
    // ── Level 39: Helpers ──
    {
        id: 'lv39', levelNum: 39, title: 'Helpers', emoji: '👨‍⚕️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('39a', 'pick-one', 'Who helps sick people?', ['Teacher', 'Doctor', 'Pilot', 'Farmer'], 1, 'Doctor! 👨‍⚕️'),
            q('39b', 'pick-one', 'Who teaches in school?', ['Chef', 'Farmer', 'Doctor', 'Teacher'], 3, 'Teacher! 👩‍🏫'),
            q('39c', 'pick-one', 'Who grows food?', ['Farmer', 'Doctor', 'Pilot', 'Chef'], 0, 'Farmer! 👨‍🌾')
        ],
    },
    // ── Level 40: 3D Shapes ──
    {
        id: 'lv40', levelNum: 40, title: '3D Shapes', emoji: '🧊', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 2 },
        questions: [
            q('40a', 'pick-one', 'A ball is which 3D shape?', ['Cone', 'Cylinder', 'Cube', 'Sphere'], 3, 'Sphere!'),
            q('40b', 'pick-one', 'Ice cream cone is a...?', ['Cube', 'Cone', 'Sphere', 'Cylinder'], 1, 'Cone!'),
            q('40c', 'pick-one', 'A dice is which shape?', ['Cone', 'Cube', 'Sphere', 'Cylinder'], 1, 'Cube!'),
            q('40d', 'pick-one', 'A pipe is which shape?', ['Cylinder', 'Sphere', 'Cube', 'Cone'], 0, 'Cylinder!')
        ],
    },
    // ── Level 41: Big & Small ──
    {
        id: 'lv41', levelNum: 41, title: 'Big & Small', emoji: '🔠', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('41a', 'pick-one', 'Which is the capital letter?', ['b', 'C', 'a', 'd'], 1, 'C!'),
            q('41b', 'pick-one', 'Which is the small letter?', ['B', 'A', 'D', 'c'], 3, 'c!'),
            q('41c', 'true-false', 'a is lowercase of A', ['True', 'False'], 0, 'Yes!'),
            q('41d', 'pick-one', 'Small letter of G?', ['h', 'j', 'f', 'g'], 3, 'g!')
        ],
    },
    // ── Level 42: Compare ──
    {
        id: 'lv42', levelNum: 42, title: 'Compare', emoji: '⚖️', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('42a', 'pick-one', 'Which is bigger: 15 or 9?', ['9', '15'], 1, '15!'),
            q('42b', 'pick-one', 'Which is smaller: 7 or 12?', ['12', '7'], 1, '7!'),
            q('42c', 'true-false', '25 is less than 30', ['True', 'False'], 0, 'Yes! 25 < 30'),
            q('42d', 'pick-one', 'Biggest: 45, 12, 67, 3?', ['3', '12', '67', '45'], 2, '67!')
        ],
    },
    // ── Level 43: Space ──
    {
        id: 'lv43', levelNum: 43, title: 'Space', emoji: '🚀', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 2 },
        questions: [
            q('43a', 'pick-one', 'Which planet do we live on?', ['Mars', 'Earth', 'Jupiter', 'Venus'], 1, 'Earth! 🌍'),
            q('43b', 'pick-one', 'Biggest planet?', ['Earth', 'Saturn', 'Jupiter', 'Mars'], 2, 'Jupiter!'),
            q('43c', 'true-false', 'The Sun is a star', ['True', 'False'], 0, 'Yes! ☀️'),
            q('43d', 'pick-one', 'Who goes to space?', ['Astronaut', 'Farmer', 'Doctor', 'Chef'], 0, 'Astronaut! 👩‍🚀')
        ],
    },
    // ── Level 44: Tens Frame ──
    {
        id: 'lv44', levelNum: 44, title: 'Tens Frame', emoji: '🧮', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('44a', 'pick-one', '10 + 3 = ?', ['12', '13', '14', '11'], 1, '13!'),
            q('44b', 'pick-one', '15 - 5 = ?', ['11', '10', '8', '12'], 1, '10!'),
            q('44c', 'pick-one', '10 + 8 = ?', ['18', '17', '16', '19'], 0, '18!')
        ],
    },
    // ── Level 45: Letter Order ──
    {
        id: 'lv45', levelNum: 45, title: 'Letter Order', emoji: '🏆', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 2 },
        questions: [
            q('45a', 'pick-one', 'Between A and C?', ['B', 'E', 'D', 'F'], 0, 'B!'),
            q('45b', 'pick-one', 'After M?', ['L', 'O', 'K', 'N'], 3, 'N!'),
            q('45c', 'pick-one', 'Before F?', ['G', 'H', 'D', 'E'], 3, 'E!'),
            q('45d', 'true-false', 'H comes before G', ['True', 'False'], 1, 'No! G before H'),
            q('45e', 'pick-one', 'A, B, C, __, E', ['G', 'D', 'F', 'H'], 1, 'D!')
        ],
    },
    // ── Level 46: Plants ──
    {
        id: 'lv46', levelNum: 46, title: 'Plants', emoji: '🌳', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('46a', 'pick-one', 'Trees give us...?', ['Plastic', 'Glass', 'Oxygen', 'Metal'], 2, 'Oxygen! 🌳'),
            q('46b', 'pick-one', 'Seeds grow into...?', ['Plants', 'Water', 'Sand', 'Rocks'], 0, 'Plants! 🌱'),
            q('46c', 'true-false', 'Green leaves make food for plants', ['True', 'False'], 0, 'Yes!')
        ],
    },
    // ── Level 47: Count Objects ──
    {
        id: 'lv47', levelNum: 47, title: 'Count Objects', emoji: '🧮', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 2 },
        questions: [
            q('47a', 'pick-one', '🌸🌸🌸🌸🌸🌸 How many?', ['5', '7', '6', '8'], 2, '6 flowers!'),
            q('47b', 'pick-one', '🐟🐟🐟🐟🐟🐟🐟🐟 How many?', ['8', '9', '6', '7'], 0, '8 fish!'),
            q('47c', 'pick-one', '🎈🎈🎈🎈 How many?', ['4', '5', '3', '6'], 0, '4 balloons!'),
            q('47d', 'pick-one', '🍪🍪🍪🍪🍪🍪🍪 How many?', ['7', '8', '6', '5'], 0, '7 cookies!')
        ],
    },
    // ── Level 48: Shape Master ──
    {
        id: 'lv48', levelNum: 48, title: 'Shape Master', emoji: '🏅', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 2 },
        questions: [
            q('48a', 'pick-one', 'Which has no corners?', ['Rectangle', 'Circle', 'Triangle', 'Square'], 1, 'Circle!'),
            q('48b', 'pick-one', 'Hexagon has how many sides?', ['5', '8', '6', '7'], 2, '6!'),
            q('48c', 'pick-one', 'More sides: pentagon or triangle?', ['Pentagon', 'Same', 'Triangle'], 0, 'Pentagon has 5!'),
            q('48d', 'true-false', 'A rectangle has 4 sides', ['True', 'False'], 0, 'Yes!')
        ],
    },
    // ── Level 49: Math Star ──
    {
        id: 'lv49', levelNum: 49, title: 'Math Star', emoji: '⭐', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 2 },
        questions: [
            q('49a', 'pick-one', '14 + 6 = ?', ['19', '20', '18', '21'], 1, '20!'),
            q('49b', 'pick-one', '20 - 8 = ?', ['14', '11', '13', '12'], 3, '12!'),
            q('49c', 'pick-one', '7 + 8 = ?', ['14', '16', '13', '15'], 3, '15!'),
            q('49d', 'pick-one', '3 + 3 + 3 = ?', ['9', '8', '10', '6'], 0, '9!'),
            q('49e', 'pick-one', '16 - 9 = ?', ['8', '7', '6', '5'], 1, '7!')
        ],
    },
    // ── Level 50: World Expert ──
    {
        id: 'lv50', levelNum: 50, title: 'World Expert', emoji: '🏆', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 3 },
        questions: [
            q('50a', 'pick-one', 'Whale lives in...?', ['Desert', 'Ocean', 'Forest', 'Mountain'], 1, 'Ocean! 🐋'),
            q('50b', 'pick-one', 'Cactus grows in...?', ['Ocean', 'River', 'Forest', 'Desert'], 3, 'Desert! 🌵'),
            q('50c', 'pick-one', 'Which is NOT a fruit?', ['Apple', 'Mango', 'Carrot', 'Orange'], 2, 'Carrot is a veggie!'),
            q('50d', 'pick-one', 'How many seasons?', ['3', '4', '5', '2'], 1, '4 main seasons!'),
            q('50e', 'true-false', 'Fire trucks put out fires', ['True', 'False'], 0, 'Yes! 🚒')
        ],
    },
    // ── Level 51: CVC Words ──
    {
        id: 'lv51', levelNum: 51, title: 'CVC Words', emoji: '📖', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('51a', 'pick-one', 'C-A-T spells...?', ['Cat', 'Bat', 'Hat', 'Mat'], 0, 'Cat! 🐱'),
            q('51b', 'pick-one', 'D-O-G spells...?', ['Dog', 'Log', 'Fog', 'Hog'], 0, 'Dog! 🐶'),
            q('51c', 'pick-one', 'What starts with B-A-...?', ['Rat', 'Sat', 'Bat', 'Cat'], 2, 'Bat!')
        ],
    },
    // ── Level 52: Halves ──
    {
        id: 'lv52', levelNum: 52, title: 'Halves', emoji: '🍕', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('52a', 'pick-one', 'Split 6 cookies in 2 groups. How many in each?', ['4', '2', '5', '3'], 3, '3 in each group! 🍪'),
            q('52b', 'pick-one', 'Split 8 toys in 2 groups. How many in each?', ['3', '6', '5', '4'], 3, '4 in each group! 🧸'),
            q('52c', 'true-false', 'If you share a pizza with a friend, you each get half', ['True', 'False'], 0, 'Yes! Sharing is caring! 🍕')
        ],
    },
    // ── Level 53: Water Animals ──
    {
        id: 'lv53', levelNum: 53, title: 'Water Animals', emoji: '🐙', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('53a', 'pick-one', 'Which lives in water?', ['Fish', 'Dog', 'Cat', 'Bird'], 0, 'Fish! 🐟'),
            q('53b', 'pick-one', 'How many legs does an octopus have?', ['10', '4', '8', '6'], 2, '8 legs! 🐙'),
            q('53c', 'pick-one', 'A baby frog is called?', ['Kitten', 'Cub', 'Tadpole', 'Puppy'], 2, 'Tadpole!')
        ],
    },
    // ── Level 54: Before & After ──
    {
        id: 'lv54', levelNum: 54, title: 'Before & After', emoji: '↔️', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('54a', 'pick-one', 'What comes before 10?', ['11', '7', '9', '8'], 2, '9!'),
            q('54b', 'pick-one', 'What comes after 25?', ['27', '23', '26', '24'], 2, '26!'),
            q('54c', 'pick-one', 'Between 30 and 32?', ['31', '29', '33', '28'], 0, '31!'),
            q('54d', 'pick-one', 'What comes before 50?', ['51', '48', '47', '49'], 3, '49!')
        ],
    },
    // ── Level 55: Symmetry ──
    {
        id: 'lv55', levelNum: 55, title: 'Symmetry', emoji: '🦋', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 2 },
        questions: [
            q('55a', 'pick-one', 'A butterfly has the same pattern on both wings. This means...?', ['Round', 'Both sides match', 'Small', 'Big'], 1, 'Both sides match! 🦋'),
            q('55b', 'true-false', 'A circle looks the same from all sides', ['True', 'False'], 0, 'Yes! It's round! ⚪'),
            q('55c', 'pick-one', 'Which letter looks the same on both sides?', ['Letter A', 'Letter J', 'Letter P', 'Letter F'], 0, 'Letter A! ✨')
        ],
    },
    // ── Level 56: Rhyming ──
    {
        id: 'lv56', levelNum: 56, title: 'Rhyming', emoji: '🎵', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('56a', 'pick-one', 'What rhymes with CAT?', ['Dog', 'Pen', 'Bat', 'Sun'], 2, 'Cat - Bat! 🦇'),
            q('56b', 'pick-one', 'What rhymes with SUN?', ['Sky', 'Fun', 'Moon', 'Star'], 1, 'Sun - Fun!'),
            q('56c', 'pick-one', 'What rhymes with FISH?', ['Dish', 'Cat', 'Tree', 'Bird'], 0, 'Fish - Dish!')
        ],
    },
    // ── Level 57: Money ──
    {
        id: 'lv57', levelNum: 57, title: 'Money', emoji: '💰', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('57a', 'pick-one', '5 rupees + 5 rupees = ?', ['12', '15', '10', '8'], 2, '10 rupees! 💰'),
            q('57b', 'pick-one', 'Which coin is bigger in value?', ['2 rupees', '1 rupee', '10 rupees', '5 rupees'], 2, '10 rupees!'),
            q('57c', 'pick-one', '10 rupees - 3 rupees = ?', ['6', '7', '8', '5'], 1, '7 rupees!')
        ],
    },
    // ── Level 58: Hygiene ──
    {
        id: 'lv58', levelNum: 58, title: 'Hygiene', emoji: '🧼', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('58a', 'pick-one', 'We should wash hands with...?', ['Soap', 'Juice', 'Mud', 'Oil'], 0, 'Soap! 🧼'),
            q('58b', 'true-false', 'We should brush teeth twice a day', ['True', 'False'], 0, 'Yes! Morning and night!'),
            q('58c', 'pick-one', 'We should bathe...?', ['Never', 'Once a week', 'Once a month', 'Every day'], 3, 'Every day! 🚿')
        ],
    },
    // ── Level 59: Skip Count 2s ──
    {
        id: 'lv59', levelNum: 59, title: 'Skip Count 2s', emoji: '🐾', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('59a', 'pick-one', '2, 4, 6, 8, __?', ['11', '12', '9', '10'], 3, '10!'),
            q('59b', 'pick-one', '10, 12, 14, __?', ['15', '16', '17', '18'], 1, '16!'),
            q('59c', 'pick-one', '20, 22, 24, __?', ['27', '28', '25', '26'], 3, '26!')
        ],
    },
    // ── Level 60: Time ──
    {
        id: 'lv60', levelNum: 60, title: 'Time', emoji: '🕐', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 2 },
        questions: [
            q('60a', 'pick-one', 'How many hours in a day?', ['20', '12', '24', '30'], 2, '24 hours! 🕐'),
            q('60b', 'pick-one', 'How many days in a week?', ['10', '6', '5', '7'], 3, '7 days!'),
            q('60c', 'true-false', 'There are 60 minutes in an hour', ['True', 'False'], 0, 'Yes! 60 minutes!'),
            q('60d', 'pick-one', 'Lunch time is usually at...?', ['9 PM', '6 AM', '3 AM', '12 PM'], 3, 'Noon!')
        ],
    },
    // ── Level 61: Sight Words ──
    {
        id: 'lv61', levelNum: 61, title: 'Sight Words', emoji: '👁️', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('61a', 'pick-one', 'Which word is THE?', ['TYE', 'THE', 'TEH', 'HTE'], 1, 'THE!'),
            q('61b', 'pick-one', 'Which word is AND?', ['ADN', 'NAD', 'AND', 'DAN'], 2, 'AND!'),
            q('61c', 'pick-one', 'Which word is IS?', ['II', 'SI', 'SS', 'IS'], 3, 'IS!')
        ],
    },
    // ── Level 62: Weather ──
    {
        id: 'lv62', levelNum: 62, title: 'Weather', emoji: '🌤️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('62a', 'pick-one', 'Rain comes from...?', ['Trees', 'Clouds', 'Mountains', 'Ground'], 1, 'Clouds! ☁️'),
            q('62b', 'pick-one', 'A rainbow has how many colors?', ['8', '7', '5', '6'], 1, '7 colors! 🌈'),
            q('62c', 'true-false', 'Snow is frozen water', ['True', 'False'], 0, 'Yes! ❄️')
        ],
    },
    // ── Level 63: Shape Patterns ──
    {
        id: 'lv63', levelNum: 63, title: 'Shape Patterns', emoji: '🔲', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('63a', 'pick-one', '🔴🔵🔴🔵🔴__?', ['🟡', '🔵', '🟢', '🔴'], 1, 'Blue comes next!'),
            q('63b', 'pick-one', '⭐⭐🌙⭐⭐🌙__?', ['☀️', '⭐', '🌈', '🌙'], 1, 'Star comes next!'),
            q('63c', 'pick-one', '🔺🔲🔺🔲__?', ['⚫', '🔲', '🔺', '⭐'], 2, 'Triangle comes next!')
        ],
    },
    // ── Level 64: Place Value ──
    {
        id: 'lv64', levelNum: 64, title: 'Place Value', emoji: '🏗️', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 2 },
        questions: [
            q('64a', 'pick-one', 'In 23, the 2 means...?', ['20', '200', '2', '3'], 0, '2 tens = 20!'),
            q('64b', 'pick-one', 'In 45, the 5 means...?', ['15', '5', '500', '50'], 1, '5 ones!'),
            q('64c', 'pick-one', 'In 67, how many tens?', ['5', '6', '7', '8'], 1, '6 tens!')
        ],
    },
    // ── Level 65: Festivals ──
    {
        id: 'lv65', levelNum: 65, title: 'Festivals', emoji: '🪔', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 2 },
        questions: [
            q('65a', 'pick-one', 'Festival of lights?', ['Eid', 'Christmas', 'Diwali', 'Holi'], 2, 'Diwali! 🪔'),
            q('65b', 'pick-one', 'Festival of colors?', ['Eid', 'Diwali', 'Onam', 'Holi'], 3, 'Holi! 🎨'),
            q('65c', 'pick-one', 'Santa Claus comes on...?', ['Holi', 'Christmas', 'Eid', 'Diwali'], 1, 'Christmas! 🎄')
        ],
    },
    // ── Level 66: Skip Count 5s ──
    {
        id: 'lv66', levelNum: 66, title: 'Skip Count 5s', emoji: '🖐️', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('66a', 'pick-one', '5, 10, 15, 20, __?', ['30', '25', '35', '22'], 1, '25!'),
            q('66b', 'pick-one', '25, 30, 35, __?', ['38', '45', '42', '40'], 3, '40!'),
            q('66c', 'pick-one', '45, 50, 55, __?', ['58', '62', '60', '65'], 2, '60!')
        ],
    },
    // ── Level 67: Blends ──
    {
        id: 'lv67', levelNum: 67, title: 'Blends', emoji: '🔗', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 2 },
        questions: [
            q('67a', 'pick-one', 'ST + AR = ?', ['Car', 'Bar', 'Star', 'Tar'], 2, 'Star! ⭐'),
            q('67b', 'pick-one', 'FL + OW + ER = ?', ['Tower', 'Flower', 'Power', 'Shower'], 1, 'Flower! 🌸'),
            q('67c', 'pick-one', 'TR + EE = ?', ['Three', 'Tree', 'Free', 'Bee'], 1, 'Tree! 🌳')
        ],
    },
    // ── Level 68: Shapes & Sides ──
    {
        id: 'lv68', levelNum: 68, title: 'Shapes & Sides', emoji: '📐', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('68a', 'pick-one', 'Triangle + Square sides?', ['5', '6', '8', '7'], 3, '3 + 4 = 7!'),
            q('68b', 'pick-one', '2 triangles have how many sides?', ['5', '8', '4', '6'], 3, '3 + 3 = 6!'),
            q('68c', 'pick-one', 'Pentagon has how many sides?', ['7', '4', '6', '5'], 3, '5 sides!')
        ],
    },
    // ── Level 69: Insects ──
    {
        id: 'lv69', levelNum: 69, title: 'Insects', emoji: '🐛', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('69a', 'pick-one', 'How many legs does an insect have?', ['2', '4', '6', '8'], 2, '6 legs!'),
            q('69b', 'pick-one', 'Which insect makes honey?', ['Bee', 'Beetle', 'Fly', 'Ant'], 0, 'Bee! 🐝'),
            q('69c', 'true-false', 'A spider is an insect', ['True', 'False'], 1, 'No! Spiders have 8 legs!')
        ],
    },
    // ── Level 70: Ordinals ──
    {
        id: 'lv70', levelNum: 70, title: 'Ordinals', emoji: '🥇', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 2 },
        questions: [
            q('70a', 'pick-one', 'Who comes first?', ['Fourth', 'Second', 'Third', 'First'], 3, 'First! 🥇'),
            q('70b', 'pick-one', 'After second comes...?', ['First', 'Fourth', 'Fifth', 'Third'], 3, 'Third! 🥉'),
            q('70c', 'pick-one', 'If 5 kids in a line, who is last?', ['1st', '3rd', '5th', '4th'], 2, '5th!'),
            q('70d', 'true-false', 'Second means position 2', ['True', 'False'], 0, 'Yes!')
        ],
    },
    // ── Level 71: Opposites ──
    {
        id: 'lv71', levelNum: 71, title: 'Opposites', emoji: '⬆️', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('71a', 'pick-one', 'Opposite of HOT?', ['Wet', 'Warm', 'Cold', 'Cool'], 2, 'Cold! ❄️'),
            q('71b', 'pick-one', 'Opposite of BIG?', ['Wide', 'Tall', 'Huge', 'Small'], 3, 'Small!'),
            q('71c', 'pick-one', 'Opposite of HAPPY?', ['Mad', 'Excited', 'Sad', 'Glad'], 2, 'Sad! 😢'),
            q('71d', 'pick-one', 'Opposite of UP?', ['Down', 'High', 'Top', 'Over'], 0, 'Down! ⬇️')
        ],
    },
    // ── Level 72: Story Math ──
    {
        id: 'lv72', levelNum: 72, title: 'Story Math', emoji: '📚', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 2 },
        questions: [
            q('72a', 'pick-one', 'Anu had 12 🍎. She gave 5 away. How many left?', ['6', '7', '5', '8'], 1, '12 - 5 = 7!'),
            q('72b', 'pick-one', 'A hen laid 6 🥚. Then 4 more. Total?', ['8', '9', '11', '10'], 3, '6 + 4 = 10!'),
            q('72c', 'pick-one', 'You have 2 red 🍬 and 4 blue 🍬. How many total?', ['6', '7', '8', '5'], 0, '2 + 4 = 6! 🍬')
        ],
    },
    // ── Level 73: Environment ──
    {
        id: 'lv73', levelNum: 73, title: 'Environment', emoji: '♻️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 2 },
        questions: [
            q('73a', 'pick-one', 'We should save...?', ['Water', 'Dirt', 'Sand', 'Rocks'], 0, 'Water! 💧'),
            q('73b', 'true-false', 'Planting trees helps our Earth', ['True', 'False'], 0, 'Yes! 🌍'),
            q('73c', 'pick-one', 'We should throw garbage in...?', ['Road', 'River', 'Garden', 'Dustbin'], 3, 'Dustbin! 🗑️'),
            q('73d', 'pick-one', 'The Sun gives us...?', ['Snow', 'Rain', 'Light and heat', 'Wind'], 2, 'Light and heat! ☀️')
        ],
    },
    // ── Level 74: Geometry Pro ──
    {
        id: 'lv74', levelNum: 74, title: 'Geometry Pro', emoji: '📏', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 2 },
        questions: [
            q('74a', 'pick-one', 'An octagon has how many sides?', ['9', '7', '8', '6'], 2, '8 sides!'),
            q('74b', 'pick-one', 'A shape with equal sides is called...?', ['Mixed', 'Broken', 'Regular', 'Irregular'], 2, 'Regular!'),
            q('74c', 'pick-one', 'Which has MORE corners: hexagon or square?', ['Same', 'Square', 'Hexagon'], 2, 'Hexagon has 6!'),
            q('74d', 'true-false', 'A circle has zero corners', ['True', 'False'], 0, 'Yes!')
        ],
    },
    // ── Level 75: Grand Finale ──
    {
        id: 'lv75', levelNum: 75, title: 'Grand Finale', emoji: '🏆', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 3 },
        questions: [
            q('75a', 'pick-one', '10 + 5 = ?', ['12', '18', '20', '15'], 3, '15! Great job! 🎉'),
            q('75b', 'pick-one', '18 - 8 = ?', ['10', '8', '12', '15'], 0, '10! You're doing great! ⭐'),
            q('75c', 'pick-one', '11 + 9 = ?', ['18', '20', '19', '21'], 1, '20! Almost there! 🌟'),
            q('75d', 'pick-one', '16 - 6 = ?', ['14', '10', '8', '12'], 1, '10! Keep going! 💪'),
            q('75e', 'true-false', '19 + 1 = 20', ['True', 'False'], 0, 'Yes! You reached 20! 💯')
        ],
    },
    // ── Level 76: Match the Same ──
    {
        id: 'lv76', levelNum: 76, title: 'Match the Same', emoji: '🎯', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('76a', 'pick-one', 'Which is same as 🔴?', ['🔴', '🟡', '🟢', '🔵'], 0, 'Red circle! 🔴'),
            q('76b', 'pick-one', 'Which is same as ⭐?', ['🌙', '🌈', '⭐', '☀️'], 2, 'Star! ⭐'),
            q('76c', 'pick-one', 'Which is same as 🍎?', ['🍇', '🍌', '🍎', '🍊'], 2, 'Apple! 🍎')
        ],
    },
    // ── Level 77: Count with Me ──
    {
        id: 'lv77', levelNum: 77, title: 'Count with Me', emoji: '🔢', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('77a', 'pick-one', 'Count: 🍄🍄🍄', ['4', '5', '3', '2'], 2, '3 mushrooms!'),
            q('77b', 'pick-one', 'Count: 🐤🐤🐤🐤🐤', ['7', '4', '6', '5'], 3, '5 chicks!'),
            q('77c', 'pick-one', 'Count: 🌷🌷🌷🌷', ['3', '5', '4', '6'], 2, '4 flowers!')
        ],
    },
    // ── Level 78: My Family ──
    {
        id: 'lv78', levelNum: 78, title: 'My Family', emoji: '👨‍👩‍👧', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('78a', 'pick-one', 'Who is your father's mother?', ['Sister', 'Grandmother', 'Aunt', 'Cousin'], 1, 'Grandmother! 👵'),
            q('78b', 'pick-one', 'Who is your mother's father?', ['Uncle', 'Brother', 'Grandfather', 'Nephew'], 2, 'Grandfather! 👴'),
            q('78c', 'pick-one', 'Your father's sister is your...?', ['Mother', 'Aunt', 'Grandma', 'Sister'], 1, 'Aunt! 👩')
        ],
    },
    // ── Level 79: Easy Adding ──
    {
        id: 'lv79', levelNum: 79, title: 'Easy Adding', emoji: '➕', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('79a', 'pick-one', '2 + 2 = ?', ['3', '4', '6', '5'], 1, '4!'),
            q('79b', 'pick-one', '3 + 1 = ?', ['4', '3', '5', '2'], 0, '4!'),
            q('79c', 'pick-one', '1 + 4 = ?', ['4', '5', '6', '3'], 1, '5!')
        ],
    },
    // ── Level 80: Easy Take Away ──
    {
        id: 'lv80', levelNum: 80, title: 'Easy Take Away', emoji: '➖', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('80a', 'pick-one', '4 - 1 = ?', ['2', '5', '4', '3'], 3, '3!'),
            q('80b', 'pick-one', '3 - 2 = ?', ['2', '1', '3', '0'], 1, '1!'),
            q('80c', 'pick-one', '5 - 3 = ?', ['4', '2', '3', '1'], 1, '2!')
        ],
    },
    // ── Level 81: Sound it Out ──
    {
        id: 'lv81', levelNum: 81, title: 'Sound it Out', emoji: '🔊', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('81a', 'pick-one', 'B says...?', ['muh', 'buh', 'puh', 'kuh'], 1, 'B says buh!'),
            q('81b', 'pick-one', 'M says...?', ['nuh', 'muh', 'duh', 'buh'], 1, 'M says muh!'),
            q('81c', 'pick-one', 'T says...?', ['kuh', 'tuh', 'guh', 'puh'], 1, 'T says tuh!')
        ],
    },
    // ── Level 82: More Colors ──
    {
        id: 'lv82', levelNum: 82, title: 'More Colors', emoji: '🎨', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('82a', 'pick-one', 'What color is a strawberry?', ['Purple', 'Red', 'Blue', 'Green'], 1, 'Red! 🍓'),
            q('82b', 'pick-one', 'What color is an orange?', ['Green', 'Red', 'Orange', 'Yellow'], 2, 'Orange! 🍊'),
            q('82c', 'pick-one', 'What color is a leaf?', ['Yellow', 'Brown', 'Red', 'Green'], 3, 'Green! 🍃')
        ],
    },
    // ── Level 83: Days of Week ──
    {
        id: 'lv83', levelNum: 83, title: 'Days of Week', emoji: '📅', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('83a', 'pick-one', 'First day of school week?', ['Friday', 'Monday', 'Saturday', 'Sunday'], 1, 'Monday!'),
            q('83b', 'pick-one', 'Which day comes after Friday?', ['Monday', 'Thursday', 'Saturday', 'Sunday'], 2, 'Saturday!'),
            q('83c', 'pick-one', 'Weekend days are...?', ['Sat-Sun', 'Mon-Tue', 'Wed-Thu', 'Fri-Sat'], 0, 'Saturday and Sunday!')
        ],
    },
    // ── Level 84: Easy Patterns ──
    {
        id: 'lv84', levelNum: 84, title: 'Easy Patterns', emoji: '🔁', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('84a', 'pick-one', 'A B A B A __?', ['A', 'C', 'B', 'D'], 2, 'B comes next!'),
            q('84b', 'pick-one', '🍎🍊🍎🍊🍎__?', ['🍊', '🍇', '🍌', '🍎'], 0, 'Orange comes next!'),
            q('84c', 'pick-one', '1 2 1 2 1 __?', ['4', '1', '2', '3'], 2, '2 comes next!')
        ],
    },
    // ── Level 85: Big or Small ──
    {
        id: 'lv85', levelNum: 85, title: 'Big or Small', emoji: '📏', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('85a', 'pick-one', 'Which is bigger: 🐘 or 🐜?', ['Cannot tell', '🐘 Elephant', '🐜 Ant', 'Same'], 1, 'Elephant is bigger!'),
            q('85b', 'pick-one', 'Which is smaller: 🏠 or 🚗?', ['🚗 Car', '🏠 House', 'Cannot tell', 'Same'], 0, 'Car is smaller!'),
            q('85c', 'pick-one', 'Which is biggest?', ['🫐 Blueberry', '🍒 Cherry', '🍇 Grape', '🍉 Watermelon'], 3, 'Watermelon is biggest!')
        ],
    },
    // ── Level 86: Match the Sound ──
    {
        id: 'lv86', levelNum: 86, title: 'Match the Sound', emoji: '🎵', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('86a', 'pick-one', 'Which starts with C?', ['Rat', 'Dog', 'Pig', 'Cat'], 3, 'Cat starts with C!'),
            q('86b', 'pick-one', 'Which starts with D?', ['Dog', 'Bat', 'Cat', 'Hat'], 0, 'Dog starts with D!'),
            q('86c', 'pick-one', 'Which starts with P?', ['Bat', 'Pig', 'Cat', 'Rat'], 1, 'Pig starts with P!')
        ],
    },
    // ── Level 87: What Comes Next ──
    {
        id: 'lv87', levelNum: 87, title: 'What Comes Next', emoji: '➡️', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('87a', 'pick-one', '1, 2, 3, __?', ['5', '6', '4', '7'], 2, '4!'),
            q('87b', 'pick-one', '5, 6, 7, __?', ['9', '8', '11', '10'], 1, '8!'),
            q('87c', 'pick-one', '10, 11, 12, __?', ['13', '14', '15', '11'], 0, '13!')
        ],
    },
    // ── Level 88: Hot or Cold ──
    {
        id: 'lv88', levelNum: 88, title: 'Hot or Cold', emoji: '🌡️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('88a', 'pick-one', 'Which is hot?', ['❄️ Ice', '🔥 Fire', '☁️ Cloud', '💧 Water'], 1, 'Fire is hot! 🔥'),
            q('88b', 'pick-one', 'Which is cold?', ['💡 Light', '❄️ Ice cream', '🔥 Fire', '☀️ Sun'], 1, 'Ice cream is cold!'),
            q('88c', 'pick-one', 'We drink hot...?', ['Tea', 'Juice', 'Ice cream', 'Cold drink'], 0, 'Tea is hot! ☕')
        ],
    },
    // ── Level 89: Same or Different ──
    {
        id: 'lv89', levelNum: 89, title: 'Same or Different', emoji: '⚖️', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('89a', 'pick-one', 'Which one is different? 🍎🍎🍊🍎', ['Second', 'Third', 'First', 'Fourth'], 1, 'Orange is different!'),
            q('89b', 'pick-one', 'Which one is different? 🔴🔴🔵🔴', ['Fourth', 'First', 'Second', 'Third'], 3, 'Blue is different!'),
            q('89c', 'pick-one', 'Which two are same? 🐱🐶🐱🐭', ['First & Second', 'First & Third', 'Third & Fourth', 'Second & Fourth'], 1, 'First and Third are both cats!')
        ],
    },
    // ── Level 90: Yummy Fruits ──
    {
        id: 'lv90', levelNum: 90, title: 'Yummy Fruits', emoji: '🍓', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('90a', 'pick-one', 'Which fruit is red with seeds outside?', ['Banana', 'Strawberry', 'Grapes', 'Apple'], 1, 'Strawberry! 🍓'),
            q('90b', 'pick-one', 'Which fruit is small and purple?', ['Papaya', 'Grapes', 'Mango', 'Apple'], 1, 'Grapes! 🍇'),
            q('90c', 'pick-one', 'Which fruit grows on a tree?', ['Onion', 'Potato', 'Carrot', 'Mango'], 3, 'Mango grows on a tree! 🥭')
        ],
    },
    // ── Level 91: Dinosaur Adventure: Up Down Left Right ──
    {
        id: 'lv91', levelNum: 91, title: 'Up Down Left Right', emoji: '⬆️', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('91a', 'pick-one', 'The sun goes ___ in the morning', ['Down', 'Left', 'Up', 'Right'], 2, 'The sun goes UP! ☀️'),
            q('91b', 'pick-one', 'At night, the sun goes ___', ['Up', 'Left', 'Down', 'Right'], 2, 'The sun goes DOWN! 🌙'),
            q('91c', 'pick-one', 'You write with your ___ hand', ['Foot', 'Right', 'Head', 'Left'], 1, 'Right hand! ✋')
        ],
    },
    // ── Level 92: Count & Match ──
    {
        id: 'lv92', levelNum: 92, title: 'Count & Match', emoji: '🔢', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('92a', 'pick-one', 'Match: 🍎🍎🍎 = ?', ['4', '5', '3', '2'], 2, '3 apples!'),
            q('92b', 'pick-one', 'Match: 🖐️ = ?', ['6', '3', '5', '4'], 2, '5 fingers!'),
            q('92c', 'pick-one', 'Match: 👀👀 = ?', ['1', '3', '2', '4'], 2, '2 eyes!')
        ],
    },
    // ── Level 93: Healthy Food ──
    {
        id: 'lv93', levelNum: 93, title: 'Healthy Food', emoji: '🥗', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('93a', 'pick-one', 'Which is healthy?', ['Burger', 'Candy', 'Apple', 'Chips'], 2, 'Apple is healthy! 🍎'),
            q('93b', 'pick-one', 'Which drink is healthy?', ['Soda', 'Juice with sugar', 'Cold drink', 'Water'], 3, 'Water is healthy! 💧'),
            q('93c', 'pick-one', 'We should eat ___ every day', ['Candy', 'Chips', 'Fruits', 'Chocolate'], 2, 'Fruits are healthy! 🍎🍌')
        ],
    },
    // ── Level 94: Heavy or Light ──
    {
        id: 'lv94', levelNum: 94, title: 'Heavy or Light', emoji: '⚖️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('94a', 'pick-one', 'Which is heavy?', ['🪨 Rock', '🧵 Thread', '🪶 Feather', '🍃 Leaf'], 0, 'Rock is heavy!'),
            q('94b', 'pick-one', 'Which is light?', ['🪨 Rock', '🪶 Feather', '🚗 Car', '🐘 Elephant'], 1, 'Feather is light!'),
            q('94c', 'pick-one', 'A balloon is ___', ['Light', 'Very heavy', 'Heavy', 'Cannot tell'], 0, 'Balloon is light! 🎈')
        ],
    },
    // ── Level 95: Body Parts ──
    {
        id: 'lv95', levelNum: 95, title: 'Body Parts', emoji: '🧍', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('95a', 'pick-one', 'We smell with our...?', ['Eyes', 'Ears', 'Mouth', 'Nose'], 3, 'We smell with nose! 👃'),
            q('95b', 'pick-one', 'We taste with our...?', ['Tongue', 'Ears', 'Eyes', 'Nose'], 0, 'We taste with tongue! 👅'),
            q('95c', 'pick-one', 'How many hands do we have?', ['2', '3', '1', '4'], 0, 'We have 2 hands! 🖐️🖐️')
        ],
    },
    // ── Level 96: Fast or Slow ──
    {
        id: 'lv96', levelNum: 96, title: 'Fast or Slow', emoji: '🏃', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('96a', 'pick-one', 'Which is fast?', ['🐢 Turtle', '🐌 Snail', '🐇 Rabbit', '🦥 Sloth'], 2, 'Rabbit is fast!'),
            q('96b', 'pick-one', 'Which is slow?', ['🚗 Car', '✈️ Plane', '🐌 Snail', '🚀 Rocket'], 2, 'Snail is slow!'),
            q('96c', 'pick-one', 'A cheetah runs very ___', ['Normal', 'Fast', 'Cannot tell', 'Slow'], 1, 'Cheetah runs fast! 🐆')
        ],
    },
    // ── Level 97: Loud or Soft ──
    {
        id: 'lv97', levelNum: 97, title: 'Loud or Soft', emoji: '🔊', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('97a', 'pick-one', 'Which is loud?', ['🍃 Wind', '🔔 Bell', '🤫 Quiet', '🤫 Whisper'], 1, 'Bell is loud!'),
            q('97b', 'pick-one', 'Which is soft/quiet?', ['🚗 Car horn', '📢 Horn', '🥁 Drum', '🤫 Whisper'], 3, 'Whisper is soft!'),
            q('97c', 'pick-one', 'A lion roars very ___', ['Silent', 'Quiet', 'Loud', 'Soft'], 2, 'Lion roars loud! 🦁')
        ],
    },
    // ── Level 98: Find the Shape ──
    {
        id: 'lv98', levelNum: 98, title: 'Find the Shape', emoji: '🔷', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('98a', 'pick-one', 'Which is a circle?', ['⚫', '🔺', '⬛', '⬜'], 0, '⚫ is a circle!'),
            q('98b', 'pick-one', 'Which is a triangle?', ['🔺', '⬜', '⬛', '⚫'], 0, '🔺 is a triangle!'),
            q('98c', 'pick-one', 'Which is a square?', ['⬛', '🔺', '⚫', '🔵'], 0, '⬛ is a square!')
        ],
    },
    // ── Level 99: What Comes First ──
    {
        id: 'lv99', levelNum: 99, title: 'What Comes First', emoji: '⏮️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('99a', 'pick-one', 'What comes first: breakfast or dinner?', ['Dinner', 'Same time', 'Cannot tell', 'Breakfast'], 3, 'Breakfast comes first! 🍳'),
            q('99b', 'pick-one', 'What comes first: morning or night?', ['Night', 'Morning', 'Cannot tell', 'Same'], 1, 'Morning comes first! ☀️'),
            q('99c', 'pick-one', 'What do you do first: wake up or sleep?', ['Cannot tell', 'Sleep', 'Same', 'Wake up'], 3, 'Wake up first! 🌅')
        ],
    },
    // ── Level 100: Super Star ──
    {
        id: 'lv100', levelNum: 100, title: 'Super Star', emoji: '🌟', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 3 },
        questions: [
            q('100a', 'pick-one', 'You are a ___!', ['Champion', 'Star', 'All of these', 'Good job'], 2, 'You are all of these! 🌟'),
            q('100b', 'true-false', 'You did great learning!', ['True', 'False'], 0, 'Yes! Keep learning! 📚'),
            q('100c', 'pick-one', 'Ready for more levels?', ['Yes!', 'Tired', 'No', 'Maybe'], 0, 'Let's continue! 🎉')
        ],
    },
    // ── Level 101: Superhero Gear ──
    {
        id: 'lv101', levelNum: 101, title: 'What We Wear', emoji: '👕', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('101a', 'pick-one', 'We wear ___ on our feet', ['Hat', 'Shoes', 'Scarf', 'Gloves'], 1, 'We wear shoes! 👟'),
            q('101b', 'pick-one', 'We wear ___ on our head', ['Hat', 'Pants', 'Shoes', 'Shirt'], 0, 'We wear a hat! 🎩'),
            q('101c', 'pick-one', 'We wear ___ on cold days', ['Sandals', 'Sweater', 'Shorts', 'T-shirt'], 1, 'We wear a sweater! 🧥')
        ],
    },
    // ── Level 102: Count More ──
    {
        id: 'lv102', levelNum: 102, title: 'Count More', emoji: '🔢', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('102a', 'pick-one', 'Count: ⭐⭐⭐⭐⭐⭐', ['6', '8', '5', '7'], 0, '6 stars!'),
            q('102b', 'pick-one', 'Count: 🍭🍭🍭🍭🍭🍭🍭', ['6', '9', '7', '8'], 2, '7 lollipops!'),
            q('102c', 'pick-one', 'Count: 🎈🎈🎈🎈🎈🎈🎈🎈', ['7', '10', '9', '8'], 3, '8 balloons!')
        ],
    },
    // ── Level 103: My Toys ──
    {
        id: 'lv103', levelNum: 103, title: 'My Toys', emoji: '🧸', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('103a', 'pick-one', 'Which toy can you cuddle?', ['Teddy bear', 'Ball', 'Blocks', 'Car'], 0, 'Teddy bear! 🧸'),
            q('103b', 'pick-one', 'Which toy do you kick?', ['Puzzle', 'Teddy', 'Ball', 'Doll'], 2, 'Ball! ⚽'),
            q('103c', 'pick-one', 'Which toy has pieces to fit together?', ['Ball', 'Puzzle', 'Car', 'Doll'], 1, 'Puzzle! 🧩')
        ],
    },
    // ── Level 104: More Sounds ──
    {
        id: 'lv104', levelNum: 104, title: 'More Sounds', emoji: '🔤', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('104a', 'pick-one', 'S says...?', ['sss', 'ppp', 'ttt', 'mmm'], 0, 'S says sss!'),
            q('104b', 'pick-one', 'R says...?', ['rrr', 'nnn', 'fff', 'lll'], 0, 'R says rrr!'),
            q('104c', 'pick-one', 'L says...?', ['lll', 'rrr', 'mmm', 'nnn'], 0, 'L says lll!')
        ],
    },
    // ── Level 105: My House ──
    {
        id: 'lv105', levelNum: 105, title: 'My House', emoji: '🏠', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('105a', 'pick-one', 'Where do you sleep?', ['Bedroom', 'Garden', 'Kitchen', 'Bathroom'], 0, 'In the bedroom! 🛏️'),
            q('105b', 'pick-one', 'Where do you cook food?', ['Kitchen', 'Bathroom', 'Garden', 'Bedroom'], 0, 'In the kitchen! 🍳'),
            q('105c', 'pick-one', 'Where do you take a bath?', ['Bedroom', 'Kitchen', 'Garden', 'Bathroom'], 3, 'In the bathroom! 🛁')
        ],
    },
    // ── Level 106: Add More ──
    {
        id: 'lv106', levelNum: 106, title: 'Add More', emoji: '➕', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('106a', 'pick-one', '4 + 2 = ?', ['6', '5', '7', '8'], 0, '6!'),
            q('106b', 'pick-one', '5 + 3 = ?', ['9', '7', '10', '8'], 3, '8!'),
            q('106c', 'pick-one', '2 + 5 = ?', ['7', '8', '9', '6'], 0, '7!')
        ],
    },
    // ── Level 107: Take Away More ──
    {
        id: 'lv107', levelNum: 107, title: 'Take Away More', emoji: '➖', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('107a', 'pick-one', '6 - 2 = ?', ['3', '5', '4', '6'], 2, '4!'),
            q('107b', 'pick-one', '7 - 3 = ?', ['4', '6', '3', '5'], 0, '4!'),
            q('107c', 'pick-one', '8 - 4 = ?', ['6', '3', '5', '4'], 3, '4!')
        ],
    },
    // ── Level 108: Animal Homes ──
    {
        id: 'lv108', levelNum: 108, title: 'Animal Homes', emoji: '🏡', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('108a', 'pick-one', 'A bird lives in a...?', ['Cave', 'Hole', 'Nest', 'Den'], 2, 'Nest! 🪹'),
            q('108b', 'pick-one', 'A dog lives in a...?', ['Nest', 'Pond', 'Stable', 'Kennel'], 3, 'Kennel! 🐕'),
            q('108c', 'pick-one', 'A fish lives in...?', ['Air', 'Land', 'Tree', 'Water'], 3, 'Water! 🐟')
        ],
    },
    // ── Level 109: Rainbow Colors ──
    {
        id: 'lv109', levelNum: 109, title: 'Rainbow Colors', emoji: '🌈', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('109a', 'pick-one', 'Which is pink?', ['🩷', '🟣', '🟡', '🔴'], 0, 'Pink! 🩷'),
            q('109b', 'pick-one', 'Which is black?', ['⚪', '🟣', '⚫', '🟤'], 2, 'Black! ⚫'),
            q('109c', 'pick-one', 'Which is white?', ['⚫', '🔴', '⚪', '🔵'], 2, 'White! ⚪')
        ],
    },
    // ── Level 110: Power-Up Food ──
    {
        id: 'lv110', levelNum: 110, title: 'Yummy Food', emoji: '🍽️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('110a', 'pick-one', 'We eat ___ for breakfast', ['Bread/Paratha', 'Rice', 'Pizza', 'Biryani'], 0, 'Bread or paratha! 🍞'),
            q('110b', 'pick-one', 'We drink ___ in the morning', ['Milk', 'Coffee', 'Juice', 'Soda'], 0, 'Milk! 🥛'),
            q('110c', 'pick-one', 'Which is a snack?', ['Biscuits', 'Dal', 'Rice', 'Roti'], 0, 'Biscuits! 🍪')
        ],
    },
    // ── Level 111: Long or Short ──
    {
        id: 'lv111', levelNum: 111, title: 'Long or Short', emoji: '📏', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('111a', 'pick-one', 'Which is longer?', ['🖍️ Crayon', '🖊️ Pen', '🐍 Snake', '🪡 Needle'], 2, 'Snake is longer!'),
            q('111b', 'pick-one', 'Which is shorter?', ['🛣️ Road', '🏠 House', '🌱 Plant', '🌲 Tree'], 2, 'Plant is shorter!'),
            q('111c', 'pick-one', 'A pencil is ___ than a ruler', ['Cannot tell', 'Shorter', 'Same', 'Longer'], 1, 'Pencil is shorter!')
        ],
    },
    // ── Level 112: Rhyme Time ──
    {
        id: 'lv112', levelNum: 112, title: 'Rhyme Time', emoji: '🎵', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('112a', 'pick-one', 'What rhymes with DOG?', ['Pig', 'Cat', 'Log', 'Cow'], 2, 'Dog - Log! 🪵'),
            q('112b', 'pick-one', 'What rhymes with HEN?', ['Cat', 'Dog', 'Pen', 'Cow'], 2, 'Hen - Pen! 🖊️'),
            q('112c', 'pick-one', 'What rhymes with MAN?', ['Boy', 'Pan', 'Girl', 'Kid'], 1, 'Man - Pan! 🍳')
        ],
    },
    // ── Level 113: Young or Old ──
    {
        id: 'lv113', levelNum: 113, title: 'Young or Old', emoji: '👶', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('113a', 'pick-one', 'Who is old?', ['👧 Girl', '👶 Baby', '👦 Boy', '👴 Grandpa'], 3, 'Grandpa is old! 👴'),
            q('113b', 'pick-one', 'Who is young?', ['👴 Grandpa', '👵 Grandma', '👨 Father', '👶 Baby'], 3, 'Baby is young! 👶'),
            q('113c', 'pick-one', 'A puppy is a ___ dog', ['Old', 'Big', 'Young', 'Cannot tell'], 2, 'Young dog! 🐶')
        ],
    },
    // ── Level 114: Tall or Short ──
    {
        id: 'lv114', levelNum: 114, title: 'Tall or Short', emoji: '📏', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('114a', 'pick-one', 'Which is tall?', ['🐁 Rat', '🐘 Elephant', '🐭 Mouse', '🐜 Ant'], 1, 'Elephant is tall!'),
            q('114b', 'pick-one', 'Which is short?', ['🌲 Tree', '🦒 Giraffe', '🐜 Ant', '🏢 Building'], 2, 'Ant is short!'),
            q('114c', 'pick-one', 'A baby is ___ than a grown-up', ['Same', 'Cannot tell', 'Shorter', 'Taller'], 2, 'Baby is shorter! 👶')
        ],
    },
    // ── Level 115: Pattern Power ──
    {
        id: 'lv115', levelNum: 115, title: 'Fun Patterns', emoji: '🔁', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('115a', 'pick-one', '🐶🐱🐶🐱🐶__?', ['🐶', '🐭', '🐱', '🐹'], 2, 'Cat comes next! 🐱'),
            q('115b', 'pick-one', '🔴🔴🔵🔴🔴__?', ['🔴', '🟡', '🟢', '🔵'], 3, 'Blue comes next! 🔵'),
            q('115c', 'pick-one', '1 2 3 1 2 __?', ['4', '1', '2', '3'], 3, '3 comes next!')
        ],
    },
    // ── Level 116: Count Backwards ──
    {
        id: 'lv116', levelNum: 116, title: 'Count Backwards', emoji: '🔢', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('116a', 'pick-one', '5, 4, 3, __?', ['5', '2', '4', '1'], 1, '2!'),
            q('116b', 'pick-one', '10, 9, 8, __?', ['10', '7', '6', '9'], 1, '7!'),
            q('116c', 'pick-one', '4, 3, 2, __?', ['0', '3', '4', '1'], 3, '1!')
        ],
    },
    // ── Level 117: Animal Food ──
    {
        id: 'lv117', levelNum: 117, title: 'Animal Food', emoji: '🍃', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('117a', 'pick-one', 'A cow eats...?', ['Bones', 'Grass', 'Fish', 'Meat'], 1, 'Grass! 🐄'),
            q('117b', 'pick-one', 'A lion eats...?', ['Leaves', 'Grass', 'Meat', 'Fruits'], 2, 'Meat! 🦁'),
            q('117c', 'pick-one', 'A rabbit eats...?', ['Meat', 'Eggs', 'Fish', 'Carrots'], 3, 'Carrots! 🐰')
        ],
    },
    // ── Level 118: Read Words ──
    {
        id: 'lv118', levelNum: 118, title: 'Read Words', emoji: '📖', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('118a', 'pick-one', 'H-E-N spells...?', ['Ten', 'Pen', 'Men', 'Hen'], 3, 'Hen! 🐔'),
            q('118b', 'pick-one', 'B-A-G spells...?', ['Tag', 'Bag', 'Rag', 'Wag'], 1, 'Bag! 🎒'),
            q('118c', 'pick-one', 'H-A-T spells...?', ['Mat', 'Cat', 'Hat', 'Rat'], 2, 'Hat! 🎩')
        ],
    },
    // ── Level 119: More Opposites ──
    {
        id: 'lv119', levelNum: 119, title: 'More Opposites', emoji: '⬆️', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('119a', 'pick-one', 'Opposite of DAY?', ['Night', 'Morning', 'Evening', 'Afternoon'], 0, 'Night! 🌙'),
            q('119b', 'pick-one', 'Opposite of BOY?', ['Kid', 'Child', 'Man', 'Girl'], 3, 'Girl! 👧'),
            q('119c', 'pick-one', 'Opposite of OPEN?', ['Begin', 'Start', 'Go', 'Close'], 3, 'Close! 🚪')
        ],
    },
    // ── Level 120: Super Strong Body ──
    {
        id: 'lv120', levelNum: 120, title: 'More Body Parts', emoji: '🦶', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('120a', 'pick-one', 'How many legs do you have?', ['1', '3', '2', '4'], 2, '2 legs! 🦵🦵'),
            q('120b', 'pick-one', 'How many eyes do you have?', ['2', '3', '1', '4'], 0, '2 eyes! 👀'),
            q('120c', 'pick-one', 'We walk with our...?', ['Ears', 'Hands', 'Feet', 'Head'], 2, 'Feet! 🦶')
        ],
    },
    // ── Level 121: Veggies ──
    {
        id: 'lv121', levelNum: 121, title: 'Veggies', emoji: '🥦', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('121a', 'pick-one', 'Which is green and leafy?', ['Banana', 'Orange', 'Apple', 'Spinach'], 3, 'Spinach! 🍃'),
            q('121b', 'pick-one', 'Which vegetable is red?', ['Cucumber', 'Potato', 'Spinach', 'Tomato'], 3, 'Tomato! 🍅'),
            q('121c', 'pick-one', 'Which is good for eyes?', ['Carrot', 'Potato', 'Onion', 'Garlic'], 0, 'Carrot! 🥕')
        ],
    },
    // ── Level 122: Shape Match ──
    {
        id: 'lv122', levelNum: 122, title: 'Shape Match', emoji: '🔷', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('122a', 'pick-one', 'Match: 🍕 = ?', ['Rectangle', 'Square', 'Triangle', 'Circle'], 2, 'Triangle! 🔺'),
            q('122b', 'pick-one', 'Match: 🕰️ = ?', ['Square', 'Circle', 'Triangle', 'Star'], 1, 'Circle! ⚫'),
            q('122c', 'pick-one', 'Match: 🖼️ = ?', ['Rectangle', 'Star', 'Circle', 'Triangle'], 0, 'Rectangle! 📱')
        ],
    },
    // ── Level 123: Money Matters ──
    {
        id: 'lv123', levelNum: 123, title: 'Money Matters', emoji: '💰', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('123a', 'pick-one', '1 rupee + 1 rupee = ?', ['3', '2', '1', '4'], 1, '2 rupees!'),
            q('123b', 'pick-one', '5 rupees - 2 rupees = ?', ['5', '2', '4', '3'], 3, '3 rupees!'),
            q('123c', 'pick-one', '2 rupees + 2 rupees = ?', ['3', '5', '4', '2'], 2, '4 rupees!')
        ],
    },
    // ── Level 124: Day and Night ──
    {
        id: 'lv124', levelNum: 124, title: 'Day and Night', emoji: '☀️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('124a', 'pick-one', 'Sun shines in the...?', ['Day', 'Evening', 'Night', 'Morning only'], 0, 'Day! ☀️'),
            q('124b', 'pick-one', 'Moon comes at...?', ['Morning', 'Noon', 'Afternoon', 'Night'], 3, 'Night! 🌙'),
            q('124c', 'pick-one', 'Stars come at...?', ['Night', 'Afternoon', 'Morning', 'Day'], 0, 'Night! ⭐')
        ],
    },
    // ── Level 125: Animal Babies ──
    {
        id: 'lv125', levelNum: 125, title: 'Baby Animals', emoji: '🐣', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('125a', 'pick-one', 'Baby dog is called...?', ['Kitten', 'Cub', 'Puppy', 'Calf'], 2, 'Puppy! 🐶'),
            q('125b', 'pick-one', 'Baby cat is called...?', ['Kitten', 'Kid', 'Cub', 'Puppy'], 0, 'Kitten! 🐱'),
            q('125c', 'pick-one', 'Baby cow is called...?', ['Kitten', 'Calf', 'Puppy', 'Cub'], 1, 'Calf! 🐮')
        ],
    },
    // ── Level 126: Weather ──
    {
        id: 'lv126', levelNum: 126, title: 'Weather', emoji: '🌤️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('126a', 'pick-one', 'Sun makes it...?', ['Wet', 'Hot', 'Dark', 'Cold'], 1, 'Hot! ☀️'),
            q('126b', 'pick-one', 'Rain makes you...?', ['Dry', 'Warm', 'Hot', 'Wet'], 3, 'Wet! 🌧️'),
            q('126c', 'pick-one', 'Clouds bring...?', ['Sun', 'Heat', 'Rain', 'Dryness'], 2, 'Rain! ☁️')
        ],
    },
    // ── Level 127: Count to 20 ──
    {
        id: 'lv127', levelNum: 127, title: 'Count to 20', emoji: '🔢', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('127a', 'pick-one', 'What comes after 15?', ['16', '14', '17', '18'], 0, '16!'),
            q('127b', 'pick-one', 'What comes before 20?', ['22', '21', '18', '19'], 3, '19!'),
            q('127c', 'pick-one', 'What is between 17 and 19?', ['21', '18', '20', '16'], 1, '18!')
        ],
    },
    // ── Level 128: School Things ──
    {
        id: 'lv128', levelNum: 128, title: 'School Things', emoji: '🎒', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('128a', 'pick-one', 'You write with a...?', ['Pencil', 'Sharpener', 'Ruler', 'Eraser'], 0, 'Pencil! ✏️'),
            q('128b', 'pick-one', 'You cut paper with...?', ['Ruler', 'Eraser', 'Scissors', 'Pencil'], 2, 'Scissors! ✂️'),
            q('128c', 'pick-one', 'You sit on a...?', ['Table', 'Shelf', 'Chair', 'Board'], 2, 'Chair! 🪑')
        ],
    },
    // ── Level 129: Match Letters ──
    {
        id: 'lv129', levelNum: 129, title: 'Match Letters', emoji: '🔤', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('129a', 'pick-one', 'Match: A a', ['D d', 'A a', 'C c', 'B b'], 1, 'A a match!'),
            q('129b', 'pick-one', 'Match: B b', ['C c', 'B b', 'D d', 'A a'], 1, 'B b match!'),
            q('129c', 'pick-one', 'Match: C c', ['D d', 'A a', 'B b', 'C c'], 3, 'C c match!')
        ],
    },
    // ── Level 130: Clean or Dirty ──
    {
        id: 'lv130', levelNum: 130, title: 'Clean or Dirty', emoji: '🧼', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('130a', 'pick-one', 'After playing, hands are...?', ['Dirty', 'Clean', 'Dry', 'Wet'], 0, 'Dirty! 🖐️'),
            q('130b', 'pick-one', 'After washing, hands are...?', ['Dry', 'Dirty', 'Wet', 'Clean'], 3, 'Clean! 🧼'),
            q('130c', 'pick-one', 'We should keep our room...?', ['Untidy', 'Clean', 'Messy', 'Dirty'], 1, 'Clean! ✨')
        ],
    },
    // ── Level 131: Add to 10 ──
    {
        id: 'lv131', levelNum: 131, title: 'Add to 10', emoji: '➕', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('131a', 'pick-one', '6 + 2 = ?', ['9', '10', '7', '8'], 3, '8!'),
            q('131b', 'pick-one', '4 + 4 = ?', ['6', '8', '9', '7'], 1, '8!'),
            q('131c', 'pick-one', '3 + 6 = ?', ['10', '11', '8', '9'], 3, '9!')
        ],
    },
    // ── Level 132: Wet or Dry ──
    {
        id: 'lv132', levelNum: 132, title: 'Wet or Dry', emoji: '💧', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('132a', 'pick-one', 'After rain, ground is...?', ['Wet', 'Dry', 'Hot', 'Cold'], 0, 'Wet! 🌧️'),
            q('132b', 'pick-one', 'Towel makes you...?', ['Dry', 'Wet', 'Hot', 'Cold'], 0, 'Dry! 🧖'),
            q('132c', 'pick-one', 'Water makes things...?', ['Wet', 'Dry', 'Hot', 'Cold'], 0, 'Wet! 💧')
        ],
    },
    // ── Level 133: Shapes Around Us ──
    {
        id: 'lv133', levelNum: 133, title: 'Shapes Around Us', emoji: '🔷', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('133a', 'pick-one', 'Plate is a...?', ['Triangle', 'Rectangle', 'Circle', 'Square'], 2, 'Circle! 🍽️'),
            q('133b', 'pick-one', 'Book is a...?', ['Star', 'Circle', 'Rectangle', 'Triangle'], 2, 'Rectangle! 📚'),
            q('133c', 'pick-one', 'Pizza slice is a...?', ['Star', 'Square', 'Triangle', 'Circle'], 2, 'Triangle! 🍕')
        ],
    },
    // ── Level 134: Number Words ──
    {
        id: 'lv134', levelNum: 134, title: 'Number Words', emoji: '🔢', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('134a', 'pick-one', 'One = ?', ['4', '3', '1', '2'], 2, '1!'),
            q('134b', 'pick-one', 'Five = ?', ['4', '5', '6', '7'], 1, '5!'),
            q('134c', 'pick-one', 'Ten = ?', ['11', '10', '12', '9'], 1, '10!')
        ],
    },
    // ── Level 135: Family Love ──
    {
        id: 'lv135', levelNum: 135, title: 'Family Love', emoji: '❤️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('135a', 'pick-one', 'Mother's mother is...?', ['Aunt', 'Grandmother', 'Sister', 'Cousin'], 1, 'Grandmother! 👵'),
            q('135b', 'pick-one', 'Father's father is...?', ['Uncle', 'Grandfather', 'Brother', 'Nephew'], 1, 'Grandfather! 👴'),
            q('135c', 'pick-one', 'Your brother's son is your...?', ['Son', 'Nephew', 'Cousin', 'Uncle'], 1, 'Nephew! 👶')
        ],
    },
    // ── Level 136: Color Patterns ──
    {
        id: 'lv136', levelNum: 136, title: 'Color Patterns', emoji: '🎨', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
        reward: { stars: 1 },
        questions: [
            q('136a', 'pick-one', 'Red, Blue, Red, Blue, __?', ['Yellow', 'Green', 'Red', 'Blue'], 3, 'Blue!'),
            q('136b', 'pick-one', 'Yellow, Yellow, Red, Yellow, __?', ['Blue', 'Red', 'Green', 'Yellow'], 3, 'Yellow!'),
            q('136c', 'pick-one', 'Green, Green, Green, __?', ['Yellow', 'Green', 'Blue', 'Red'], 1, 'Green!')
        ],
    },
    // ── Level 137: Hard or Soft ──
    {
        id: 'lv137', levelNum: 137, title: 'Hard or Soft', emoji: '🪨', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('137a', 'pick-one', 'Which is hard?', ['🪨 Stone', '🍞 Bread', '🧸 Teddy', '🧽 Sponge'], 0, 'Stone is hard!'),
            q('137b', 'pick-one', 'Which is soft?', ['🧸 Teddy', '🧱 Brick', '🪵 Wood', '🪨 Rock'], 0, 'Teddy is soft!'),
            q('137c', 'pick-one', 'Pillow is...?', ['Rough', 'Heavy', 'Hard', 'Soft'], 3, 'Soft! 🛏️')
        ],
    },
    // ── Level 138: Ending Sounds ──
    {
        id: 'lv138', levelNum: 138, title: 'Ending Sounds', emoji: '🔊', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('138a', 'pick-one', 'Which ends with T?', ['Pig', 'Dog', 'Cat', 'Hen'], 2, 'Cat ends with T!'),
            q('138b', 'pick-one', 'Which ends with G?', ['Cat', 'Hen', 'Dog', 'Rat'], 2, 'Dog ends with G!'),
            q('138c', 'pick-one', 'Which ends with N?', ['Cat', 'Dog', 'Pig', 'Hen'], 3, 'Hen ends with N!')
        ],
    },
    // ── Level 139: Tasty Food ──
    {
        id: 'lv139', levelNum: 139, title: 'Tasty Food', emoji: '😋', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('139a', 'pick-one', 'Lemon is...?', ['Bitter', 'Sour', 'Sweet', 'Salty'], 1, 'Sour! 🍋'),
            q('139b', 'pick-one', 'Candy is...?', ['Sweet', 'Sour', 'Bitter', 'Salty'], 0, 'Sweet! 🍬'),
            q('139c', 'pick-one', 'Chocolate is...?', ['Bitter', 'Sweet', 'Salty', 'Sour'], 1, 'Sweet! 🍫')
        ],
    },
    // ── Level 140: Power of 10 ──
    {
        id: 'lv140', levelNum: 140, title: 'Count by 10', emoji: '🔢', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('140a', 'pick-one', '10, 20, 30, __?', ['50', '60', '35', '40'], 3, '40!'),
            q('140b', 'pick-one', '50, 60, 70, __?', ['85', '75', '90', '80'], 3, '80!'),
            q('140c', 'pick-one', '20, 30, 40, __?', ['50', '45', '55', '60'], 0, '50!')
        ],
    },
    // ── Level 141: Animal Sounds ──
    {
        id: 'lv141', levelNum: 141, title: 'Animal Sounds', emoji: '🔊', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('141a', 'pick-one', 'Duck says...?', ['Baa', 'Quack', 'Oink', 'Moo'], 1, 'Quack! 🦆'),
            q('141b', 'pick-one', 'Pig says...?', ['Baa', 'Moo', 'Quack', 'Oink'], 3, 'Oink! 🐷'),
            q('141c', 'pick-one', 'Sheep says...?', ['Oink', 'Moo', 'Baa', 'Quack'], 2, 'Baa! 🐑')
        ],
    },
    // ── Level 142: Smooth or Rough ──
    {
        id: 'lv142', levelNum: 142, title: 'Smooth or Rough', emoji: '🪨', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
        reward: { stars: 1 },
        questions: [
            q('142a', 'pick-one', 'Which is smooth?', ['🧱 Brick', '🪨 Rock', '🌵 Cactus', '🪞 Mirror'], 3, 'Mirror is smooth!'),
            q('142b', 'pick-one', 'Which is rough?', ['🥚 Egg', '🪞 Mirror', '🪨 Sandpaper', '🍎 Apple'], 2, 'Sandpaper is rough!'),
            q('142c', 'pick-one', 'Baby's skin is...?', ['Rough', 'Smooth', 'Hard', 'Prickly'], 1, 'Smooth! 👶')
        ],
    },
    // ── Level 143: Word Family -AT ──
    {
        id: 'lv143', levelNum: 143, title: 'Word Family -AT', emoji: '📖', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('143a', 'pick-one', 'C-AT = ?', ['Bat', 'Cat', 'Rat', 'Hat'], 1, 'Cat! 🐱'),
            q('143b', 'pick-one', 'H-AT = ?', ['Bat', 'Cat', 'Hat', 'Rat'], 2, 'Hat! 🎩'),
            q('143c', 'pick-one', 'R-AT = ?', ['Hat', 'Bat', 'Rat', 'Cat'], 2, 'Rat! 🐭')
        ],
    },
    // ── Level 144: More or Less ──
    {
        id: 'lv144', levelNum: 144, title: 'More or Less', emoji: '⚖️', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('144a', 'pick-one', '5 is ___ than 3', ['Equal', 'Same', 'More', 'Less'], 2, 'More!'),
            q('144b', 'pick-one', '2 is ___ than 7', ['Equal', 'Less', 'Same', 'More'], 1, 'Less!'),
            q('144c', 'pick-one', '10 is ___ than 5', ['More', 'Equal', 'Less', 'Same'], 0, 'More!')
        ],
    },
    // ── Level 145: Find the Way ──
    {
        id: 'lv145', levelNum: 145, title: 'Find the Way', emoji: '🧭', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('145a', 'pick-one', 'To go up, you climb ___', ['Right', 'Down', 'Left', 'Up'], 3, 'Up! ⬆️'),
            q('145b', 'pick-one', 'To go down, you climb ___', ['Left', 'Right', 'Down', 'Up'], 2, 'Down! ⬇️'),
            q('145c', 'pick-one', 'The hand you write with is your ___ hand', ['Up', 'Right', 'Left', 'Down'], 1, 'Right hand! ✋')
        ],
    },
    // ── Level 146: Juicy Fruits ──
    {
        id: 'lv146', levelNum: 146, title: 'Juicy Fruits', emoji: '🍉', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('146a', 'pick-one', 'Which fruit is big and green outside, red inside?', ['Orange', 'Grapes', 'Apple', 'Watermelon'], 3, 'Watermelon! 🍉'),
            q('146b', 'pick-one', 'Which fruit has many small seeds?', ['Banana', 'Apple', 'Mango', 'Pomegranate'], 3, 'Pomegranate!'),
            q('146c', 'pick-one', 'Which fruit is yellow and sour?', ['Lemon', 'Apple', 'Banana', 'Grapes'], 0, 'Lemon! 🍋')
        ],
    },
    // ── Level 147: Make 10 ──
    {
        id: 'lv147', levelNum: 147, title: 'Make 10', emoji: '🔢', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
        reward: { stars: 1 },
        questions: [
            q('147a', 'pick-one', '7 + __ = 10', ['2', '4', '3', '5'], 2, '3!'),
            q('147b', 'pick-one', '8 + __ = 10', ['4', '1', '3', '2'], 3, '2!'),
            q('147c', 'pick-one', '6 + __ = 10', ['5', '4', '3', '6'], 1, '4!')
        ],
    },
    // ── Level 148: Wheels ──
    {
        id: 'lv148', levelNum: 148, title: 'Wheels', emoji: '🚗', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
        reward: { stars: 1 },
        questions: [
            q('148a', 'pick-one', 'Car has how many wheels?', ['3', '4', '2', '5'], 1, '4 wheels! 🚗'),
            q('148b', 'pick-one', 'Bicycle has how many wheels?', ['3', '1', '2', '4'], 2, '2 wheels! 🚲'),
            q('148c', 'pick-one', 'Auto-rickshaw has how many wheels?', ['2', '3', '5', '4'], 1, '3 wheels! 🛺')
        ],
    },
    // ── Level 149: Find the Letter ──
    {
        id: 'lv149', levelNum: 149, title: 'Find the Letter', emoji: '🔤', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 1 },
        questions: [
            q('149a', 'pick-one', 'Find letter B', ['A', 'B', 'C', 'D'], 1, 'B!'),
            q('149b', 'pick-one', 'Find letter M', ['M', 'O', 'P', 'N'], 0, 'M!'),
            q('149c', 'pick-one', 'Find letter T', ['S', 'Q', 'R', 'T'], 3, 'T!')
        ],
    },
    // ── Level 150: Super Champion ──
    {
        id: 'lv150', levelNum: 150, title: 'Super Champion', emoji: '🏆', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
        reward: { stars: 3 },
        questions: [
            q('150a', 'pick-one', 'You completed ___ levels!', ['50', '150', '100', '200'], 1, '150 levels! 🎉'),
            q('150b', 'true-false', 'You are a superstar champion!', ['True', 'False'], 0, 'YES! You are amazing! ⭐'),
            q('150c', 'pick-one', 'What should you do next?', ['Sleep', 'Watch TV', 'Keep learning', 'Stop learning'], 2, 'Keep learning! 📚'),
            q('150d', 'true-false', 'Learning is fun!', ['True', 'False'], 0, 'Yes! Learning is fun! 🌈')
        ],
    },
];