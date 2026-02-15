// Type definition for subject areas
export type Area = 'letters' | 'numbers' | 'shapes' | 'evs' | 'math';

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
  reward: {
    stars: number;
    sticker?: string;
    badge?: string;
  };
}

// Helper function to create questions
function q(
  id: string,
  type: MapQuestion['type'],
  prompt: string,
  options: string[],
  correctIndex: number,
  explanation: string,
  emoji?: string
): MapQuestion {
  return { id, type, prompt, emoji, options, correctIndex, explanation };
}

// ─── 150 EASIER Levels for 5-Year-Old Non-Native English Kids ───────────
export const CANDY_LEVELS: MapLevel[] = [

  // ── Level 1: More or Less ──
  {
    id: 'lv1', levelNum: 1, title: 'More or Less', emoji: '⚖️', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('1a', 'pick-one', 'Which has MORE? 🍎🍎🍎 or 🍎?', ['🍎', '🍎🍎🍎'], 1, '3 apples are more than 1!'),
      q('1b', 'pick-one', 'Which is LESS? 5 or 2?', ['5', '2'], 1, '2 is less than 5!'),
      q('1c', 'pick-one', 'Which has MORE? ⭐ or ⭐⭐⭐⭐?', ['⭐', '⭐⭐⭐⭐'], 1, '4 stars are more!')
    ],
  },
  // ── Level 2: Count 1-5 ──
  {
    id: 'lv2', levelNum: 2, title: 'Count 1-5', emoji: '1️⃣', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('2a', 'pick-one', 'Count the apples! 🍎🍎🍎', ['3', '5', '4', '2'], 0, 'Great counting! There are 3 apples!', '🍎'),
      q('2b', 'pick-one', 'What comes after 2?', ['5', '4', '3', '1'], 2, '3 comes after 2!'),
      q('2c', 'true-false', '5 is bigger than 3', ['True', 'False'], 0, 'Yes! 5 > 3')
    ],
  },
  // ── Level 3: Circle ──
  {
    id: 'lv3', levelNum: 3, title: 'Circle', emoji: '⚫', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
    reward: { stars: 1 },
    questions: [
      q('3a', 'pick-one', 'Find the circle! 🔍', ['🔺 Triangle', '⚫ Circle', '📱 Rectangle', '⬛ Square'], 1, 'Yes! A circle is round like a ball!'),
      q('3b', 'pick-one', 'What is round like a circle? 🎡', ['Door', 'Book', 'Roof', 'Wheel'], 3, 'Excellent! A wheel is round!'),
      q('3c', 'true-false', 'Is a coin round? 🪙', ['True', 'False'], 0, 'Yes! Coins are circles! Good job!')
    ],
  },
  // ── Level 4: Missing Numbers ──
  {
    id: 'lv4', levelNum: 4, title: 'Missing Numbers', emoji: '❓', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('4a', 'pick-one', '1, 2, __, 4', ['3', '5', '6', '0'], 0, '3 comes after 2!'),
      q('4b', 'pick-one', '5, 6, __, 8', ['9', '4', '7', '2'], 2, '7 comes after 6!'),
      q('4c', 'pick-one', '10, __, 12', ['13', '9', '11', '14'], 2, '11 is between 10 and 12!')
    ],
  },
  // ── Level 5: Pet Animals ──
  {
    id: 'lv5', levelNum: 5, title: 'Pet Animals', emoji: '🐶', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('5a', 'pick-one', 'Which animal says WOOF? 🐶', ['Cow', 'Horse', 'Cat', 'Dog'], 3, 'Yes! Dog says WOOF!'),
      q('5b', 'pick-one', 'Who gives us milk? 🥛', ['Cow', 'Dog', 'Cat', 'Hen'], 0, 'Super! Cow gives us yummy milk!'),
      q('5c', 'pick-one', 'Which animal says MEOW? 🐱', ['Dog', 'Duck', 'Horse', 'Cat'], 3, 'Perfect! Cat says MEOW!')
    ],
  },
  // ── Level 6: Add to 5 ──
  {
    id: 'lv6', levelNum: 6, title: 'Add to 5', emoji: '➕', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('6a', 'pick-one', '1 + 1 = ?', ['4', '1', '2', '3'], 2, '1 plus 1 equals 2!', '➕'),
      q('6b', 'pick-one', '2 + 1 = ?', ['2', '3', '4', '1'], 1, '2 plus 1 equals 3!'),
      q('6c', 'pick-one', '2 + 2 = ?', ['4', '3', '5', '2'], 0, '2 plus 2 equals 4!')
    ],
  },
  // ── Level 7: Count 6-10 ──
  {
    id: 'lv7', levelNum: 7, title: 'Count 6-10', emoji: '🔢', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('7a', 'pick-one', 'How many stars? ⭐⭐⭐⭐⭐⭐⭐', ['5', '7', '8', '6'], 1, 'Great counting! There are 7 stars!', '⭐'),
      q('7b', 'pick-one', 'Count: 🍎🍎🍎🍎🍎🍎', ['7', '8', '5', '6'], 3, '6 apples!'),
      q('7c', 'pick-one', 'Which is biggest?', ['6', '7', '8', '10'], 3, '10 is the biggest!')
    ],
  },
  // ── Level 8: G H I ──
  {
    id: 'lv8', levelNum: 8, title: 'G H I', emoji: '✏️', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
    reward: { stars: 1 },
    questions: [
      q('8a', 'pick-one', 'G is for...?', ['Jam', 'Hat', 'Ice cream', 'Grapes'], 3, 'G for Grapes!', '🍇'),
      q('8b', 'pick-one', 'H is for...?', ['Grapes', 'Jam', 'Hat', 'Ice cream'], 2, 'H for Hat!'),
      q('8c', 'pick-emoji', 'I is for...?', ['🪁 Kite', '🦁 Lion', '🍦 Ice cream'], 2, 'I for Ice cream!')
    ],
  },
  // ── Level 9: Square ──
  {
    id: 'lv9', levelNum: 9, title: 'Square', emoji: '⬛', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
    reward: { stars: 1 },
    questions: [
      q('9a', 'pick-one', 'Find the square! 🔍', ['⚫ Circle', '🔺 Triangle', '⬛ Square', '⭐ Star'], 2, 'Yes! A square has 4 corners!'),
      q('9b', 'pick-one', 'Which is square-shaped?', ['Ball', 'Wheel', 'Coin', 'Box'], 3, 'A box is a square!'),
      q('9c', 'true-false', 'A square has corners', ['True', 'False'], 0, 'Yes! Squares have 4 corners')
    ],
  },
  // ── Level 10: Wild Animals ──
  {
    id: 'lv10', levelNum: 10, title: 'Wild Animals', emoji: '🦁', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 2 },
    questions: [
      q('10a', 'pick-one', 'Lion is the king of...?', ['Sky', 'Ocean', 'Jungle', 'City'], 2, 'King of jungle!'),
      q('10b', 'pick-one', 'Which has stripes?', ['Lion', 'Tiger', 'Bear', 'Elephant'], 1, 'Tiger has stripes!'),
      q('10c', 'true-false', 'Elephant is very big', ['True', 'False'], 0, 'Yes! Elephants are huge!'),
      q('10d', 'pick-one', 'Which has a long neck?', ['Monkey', 'Giraffe', 'Bear', 'Fox'], 1, 'Giraffe!')
    ],
  },
  // ── Level 11: More Adding ──
  {
    id: 'lv11', levelNum: 11, title: 'More Adding', emoji: '🔢', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('11a', 'pick-one', '3 + 1 = ?', ['5', '4', '6', '3'], 1, '3 plus 1 equals 4!'),
      q('11b', 'pick-one', '2 + 3 = ?', ['4', '6', '5', '3'], 2, '2 plus 3 equals 5!'),
      q('11c', 'pick-one', '4 + 1 = ?', ['6', '4', '5', '7'], 2, '4 plus 1 equals 5!')
    ],
  },
  // ── Level 12: J K L ──
  {
    id: 'lv12', levelNum: 12, title: 'J K L', emoji: '🎯', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
    reward: { stars: 1 },
    questions: [
      q('12a', 'pick-one', 'J is for...?', ['Lion', 'Kite', 'Jam', 'Apple'], 2, 'J for Jam!', '🍯'),
      q('12b', 'pick-one', 'K is for...?', ['Hat', 'Dog', 'Cat', 'Kite'], 3, 'K for Kite!'),
      q('12c', 'pick-emoji', 'L is for...?', ['👃 Nose', '🦁 Lion', '🥭 Mango'], 1, 'L for Lion!')
    ],
  },
  // ── Level 13: Triangle ──
  {
    id: 'lv13', levelNum: 13, title: 'Triangle', emoji: '🔺', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
    reward: { stars: 1 },
    questions: [
      q('13a', 'pick-one', 'Find the triangle! 🔍', ['⚫ Circle', '🔺 Triangle', '⬛ Square', '⭐ Star'], 1, 'Yes! A triangle has 3 corners!'),
      q('13b', 'pick-one', 'What shape is a pizza slice?', ['Triangle', 'Circle', 'Square', 'Star'], 0, 'Pizza slice is a triangle!'),
      q('13c', 'true-false', 'A triangle has 3 corners', ['True', 'False'], 0, 'Yes! Triangles have 3 corners!')
    ],
  },
  // ── Level 14: Count More ──
  {
    id: 'lv14', levelNum: 14, title: 'Count More', emoji: '🔟', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('14a', 'pick-one', 'Count: 🌸🌸🌸🌸🌸', ['6', '7', '4', '5'], 3, '5 flowers!'),
      q('14b', 'pick-one', 'Count: 🎈🎈🎈🎈', ['6', '4', '3', '5'], 1, '4 balloons!'),
      q('14c', 'pick-one', 'Count: 🍪🍪🍪🍪🍪🍪', ['8', '6', '5', '7'], 1, '6 cookies!')
    ],
  },
  // ── Level 15: Birds ──
  {
    id: 'lv15', levelNum: 15, title: 'Birds', emoji: '🦜', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 2 },
    questions: [
      q('15a', 'pick-one', 'Which bird can talk?', ['Penguin', 'Parrot', 'Owl', 'Eagle'], 1, 'Parrot can talk!'),
      q('15b', 'pick-one', 'Which bird is big and colorful?', ['Crow', 'Sparrow', 'Peacock', 'Pigeon'], 2, 'Peacock!'),
      q('15c', 'pick-one', 'Which bird says "coo coo"?', ['Eagle', 'Pigeon', 'Owl', 'Parrot'], 1, 'Pigeon says coo coo!')
    ],
  },
  // ── Level 16: Take Away ──
  {
    id: 'lv16', levelNum: 16, title: 'Take Away', emoji: '➖', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('16a', 'pick-one', '5 - 2 = ?', ['2', '3', '1', '4'], 1, '5 minus 2 equals 3!'),
      q('16b', 'pick-one', '4 - 1 = ?', ['3', '4', '5', '2'], 0, '4 minus 1 equals 3!'),
      q('16c', 'pick-one', '5 - 3 = ?', ['3', '1', '4', '2'], 3, '5 minus 3 equals 2!')
    ],
  },
  // ── Level 17: M N O ──
  {
    id: 'lv17', levelNum: 17, title: 'M N O', emoji: '🌟', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
    reward: { stars: 1 },
    questions: [
      q('17a', 'pick-one', 'M is for...?', ['Mango', 'Nose', 'Parrot', 'Orange'], 0, 'M for Mango!', '🥭'),
      q('17b', 'pick-one', 'N is for...?', ['Parrot', 'Orange', 'Mango', 'Nose'], 3, 'N for Nose!'),
      q('17c', 'pick-emoji', 'O is for...?', ['👸 Queen', '🍊 Orange', '🦜 Parrot'], 1, 'O for Orange!')
    ],
  },
  // ── Level 18: Colors 1 ──
  {
    id: 'lv18', levelNum: 18, title: 'Colors 1', emoji: '🔴', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
    reward: { stars: 1 },
    questions: [
      q('18a', 'pick-one', 'What color is an apple?', ['Red', 'Yellow', 'Green', 'Blue'], 0, 'Apples are red!'),
      q('18b', 'pick-one', 'What color is the sky?', ['Red', 'Green', 'Blue', 'Orange'], 2, 'The sky is blue!'),
      q('18c', 'pick-one', 'What color is grass?', ['Purple', 'Yellow', 'Green', 'Red'], 2, 'Grass is green!')
    ],
  },
  // ── Level 19: Fruits ──
  {
    id: 'lv19', levelNum: 19, title: 'Fruits', emoji: '🍎', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('19a', 'pick-one', 'Which fruit is yellow?', ['Banana', 'Apple', 'Orange', 'Grapes'], 0, 'Banana is yellow!'),
      q('19b', 'pick-one', 'Which fruit is orange?', ['Banana', 'Orange', 'Grapes', 'Apple'], 1, 'Orange!'),
      q('19c', 'pick-one', 'Which fruit is red?', ['Banana', 'Apple', 'Orange', 'Mango'], 1, 'Apple is red!')
    ],
  },
  // ── Level 20: Add & Take Away ──
  {
    id: 'lv20', levelNum: 20, title: 'Add & Take Away', emoji: '🎯', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 2 },
    questions: [
      q('20a', 'pick-one', '3 + 2 = ?', ['6', '5', '4', '7'], 1, '3 plus 2 equals 5!'),
      q('20b', 'pick-one', '6 - 2 = ?', ['5', '6', '4', '3'], 2, '6 minus 2 equals 4!'),
      q('20c', 'pick-one', '4 + 2 = ?', ['6', '5', '7', '4'], 0, '4 plus 2 equals 6!')
    ],
  },
  // ── Level 21: P Q R ──
  {
    id: 'lv21', levelNum: 21, title: 'P Q R', emoji: '🎨', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
    reward: { stars: 1 },
    questions: [
      q('21a', 'pick-one', 'P is for...?', ['Queen', 'Sun', 'Parrot', 'Rabbit'], 2, 'P for Parrot!', '🦜'),
      q('21b', 'pick-one', 'Q is for...?', ['Rabbit', 'Queen', 'Tiger', 'Sun'], 1, 'Q for Queen!'),
      q('21c', 'pick-one', 'R is for...?', ['Queen', 'Parrot', 'Rabbit', 'Sun'], 2, 'R for Rabbit!')
    ],
  },
  // ── Level 22: Big Numbers ──
  {
    id: 'lv22', levelNum: 22, title: 'Big Numbers', emoji: '🔢', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('22a', 'pick-one', 'Count: 🐟🐟🐟🐟🐟🐟🐟🐟', ['6', '8', '9', '7'], 1, '8 fish!'),
      q('22b', 'pick-one', 'Count: ⭐⭐⭐⭐⭐⭐⭐⭐⭐', ['10', '8', '9', '7'], 2, '9 stars!'),
      q('22c', 'pick-one', 'Which is bigger: 8 or 5?', ['5', '8'], 1, '8 is bigger!')
    ],
  },
  // ── Level 23: Vegetables ──
  {
    id: 'lv23', levelNum: 23, title: 'Vegetables', emoji: '🥕', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('23a', 'pick-one', 'Which is orange?', ['Onion', 'Carrot', 'Tomato', 'Potato'], 1, 'Carrot!'),
      q('23b', 'pick-one', 'Which is red?', ['Carrot', 'Onion', 'Tomato', 'Potato'], 2, 'Tomato!'),
      q('23c', 'pick-one', 'Which is green?', ['Tomato', 'Spinach', 'Carrot', 'Potato'], 1, 'Spinach!')
    ],
  },
  // ── Level 24: Simple Patterns ──
  {
    id: 'lv24', levelNum: 24, title: 'Simple Patterns', emoji: '🔮', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('24a', 'pick-one', 'A B A B A __?', ['C', 'D', 'B', 'A'], 2, 'B comes next!'),
      q('24b', 'pick-one', '🍎🍊🍎🍊🍎__?', ['🍌', '🍎', '🍊', '🍇'], 2, 'Orange comes next!'),
      q('24c', 'pick-one', '1 2 1 2 1 __?', ['3', '2', '4', '1'], 1, '2 comes next!')
    ],
  },
  // ── Level 25: S T U ──
  {
    id: 'lv25', levelNum: 25, title: 'S T U', emoji: '☀️', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
    reward: { stars: 2 },
    questions: [
      q('25a', 'pick-emoji', 'S is for...?', ['🐯 Tiger', '☂️ Umbrella', '☀️ Sun'], 2, 'S for Sun!'),
      q('25b', 'pick-one', 'T is for...?', ['Van', 'Tiger', 'Umbrella', 'Sun'], 1, 'T for Tiger!'),
      q('25c', 'pick-one', 'U is for...?', ['Watch', 'Van', 'Umbrella', 'Yak'], 2, 'U for Umbrella!')
    ],
  },
  // ── Level 26: Colors 2 ──
  {
    id: 'lv26', levelNum: 26, title: 'More Colors', emoji: '🟣', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
    reward: { stars: 1 },
    questions: [
      q('26a', 'pick-one', 'What color is a banana?', ['Red', 'Yellow', 'Blue', 'Green'], 1, 'Banana is yellow!'),
      q('26b', 'pick-one', 'What color is chocolate?', ['Grey', 'White', 'Brown', 'Pink'], 2, 'Chocolate is brown!'),
      q('26c', 'pick-one', 'What color is milk?', ['Brown', 'Yellow', 'White', 'Red'], 2, 'Milk is white!')
    ],
  },
  // ── Level 27: Body Parts ──
  {
    id: 'lv27', levelNum: 27, title: 'Body Parts', emoji: '👀', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('27a', 'pick-one', 'We see with our...?', ['Mouth', 'Nose', 'Ears', 'Eyes'], 3, 'We see with eyes!'),
      q('27b', 'pick-one', 'We hear with our...?', ['Mouth', 'Nose', 'Ears', 'Eyes'], 2, 'We hear with ears!'),
      q('27c', 'pick-one', 'We smell with our...?', ['Ears', 'Eyes', 'Mouth', 'Nose'], 3, 'We smell with nose!')
    ],
  },
  // ── Level 28: Count Objects ──
  {
    id: 'lv28', levelNum: 28, title: 'Count Objects', emoji: '📝', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('28a', 'pick-one', 'Raju has 3 🍎 & gets 2 more. How many?', ['6', '5', '4', '7'], 1, '3 + 2 = 5!'),
      q('28b', 'pick-one', 'Maya has 4 🍪. How many?', ['5', '4', '3', '6'], 1, '4 cookies!'),
      q('28c', 'pick-one', '2 🐦 on a tree. 2 more come. How many?', ['5', '3', '4', '2'], 2, '2 + 2 = 4!')
    ],
  },
  // ── Level 29: V W X ──
  {
    id: 'lv29', levelNum: 29, title: 'V W X', emoji: '🚐', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
    reward: { stars: 1 },
    questions: [
      q('29a', 'pick-one', 'V is for...?', ['Xylophone', 'Yak', 'Van', 'Watch'], 2, 'V for Van!', '🚐'),
      q('29b', 'pick-one', 'W is for...?', ['Van', 'Watch', 'Yak', 'Zebra'], 1, 'W for Watch!'),
      q('29c', 'pick-one', 'Find the letter X', ['Y', 'W', 'X', 'V'], 2, 'This is X!')
    ],
  },
  // ── Level 30: Match the Same ──
  {
    id: 'lv30', levelNum: 30, title: 'Match the Same', emoji: '🎲', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
    reward: { stars: 1 },
    questions: [
      q('30a', 'pick-one', 'Which is same as 🔴?', ['🔵', '🔴', '🟢', '🟡'], 1, 'Red circle!'),
      q('30b', 'pick-one', 'Which is same as ⭐?', ['🌙', '🌈', '⭐', '☀️'], 2, 'Star!'),
      q('30c', 'pick-one', 'Which is same as 🍎?', ['🍇', '🍎', '🍌', '🍊'], 1, 'Apple!')
    ],
  },
  // ── Level 31: Seasons ──
  {
    id: 'lv31', levelNum: 31, title: 'Seasons', emoji: '☀️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('31a', 'pick-one', 'When is it very hot?', ['Spring', 'Rainy', 'Winter', 'Summer'], 3, 'Summer!'),
      q('31b', 'pick-one', 'When does it rain a lot?', ['Summer', 'Winter', 'Spring', 'Rainy season'], 3, 'Rainy season!'),
      q('31c', 'pick-one', 'When is it cold?', ['Autumn', 'Summer', 'Winter', 'Rainy'], 2, 'Winter!')
    ],
  },
  // ── Level 32: Y Z ──
  {
    id: 'lv32', levelNum: 32, title: 'Y Z', emoji: '🦓', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
    reward: { stars: 1 },
    questions: [
      q('32a', 'pick-one', 'Y is for...?', ['Zebra', 'Apple', 'Ball', 'Yak'], 3, 'Y for Yak!', '🐂'),
      q('32b', 'pick-one', 'Z is for...?', ['Yak', 'Zebra', 'Apple', 'Cat'], 1, 'Z for Zebra!'),
      q('32c', 'true-false', 'Z is the last letter', ['True', 'False'], 0, 'Yes! Z is last!')
    ],
  },
  // ── Level 33: Same Number ──
  {
    id: 'lv33', levelNum: 33, title: 'Same Number', emoji: '👯', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('33a', 'pick-one', '3 + 3 = ?', ['5', '6', '4', '7'], 1, '3 plus 3 equals 6!'),
      q('33b', 'pick-one', '2 + 2 = ?', ['6', '3', '5', '4'], 3, '2 plus 2 equals 4!'),
      q('33c', 'pick-one', '4 + 4 = ?', ['6', '9', '7', '8'], 3, '4 plus 4 equals 8!')
    ],
  },
  // ── Level 34: Star ──
  {
    id: 'lv34', levelNum: 34, title: 'Star', emoji: '⭐', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
    reward: { stars: 1 },
    questions: [
      q('34a', 'pick-one', 'Find the star! 🔍', ['⚫ Circle', '🔺 Triangle', '⭐ Star', '⬛ Square'], 2, 'Yes! This is a star!'),
      q('34b', 'pick-one', 'Stars come at...?', ['Day', 'Afternoon', 'Night', 'Morning'], 2, 'Stars at night!'),
      q('34c', 'true-false', 'Stars are in the sky', ['True', 'False'], 0, 'Yes! Stars are in the sky!')
    ],
  },
  // ── Level 35: Transport ──
  {
    id: 'lv35', levelNum: 35, title: 'Transport', emoji: '🚗', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 2 },
    questions: [
      q('35a', 'pick-one', 'Which goes on the road?', ['Boat', 'Train', 'Car', 'Airplane'], 2, 'Car!'),
      q('35b', 'pick-one', 'Which flies in the sky?', ['Ship', 'Car', 'Bus', 'Airplane'], 3, 'Airplane!'),
      q('35c', 'pick-one', 'Which goes on water?', ['Car', 'Train', 'Boat', 'Bus'], 2, 'Boat!')
    ],
  },
  // ── Level 36: Vowels ──
  {
    id: 'lv36', levelNum: 36, title: 'Vowels', emoji: '🅰️', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
    reward: { stars: 1 },
    questions: [
      q('36a', 'pick-one', 'Which is a Vowel?', ['B', 'C', 'A', 'D'], 2, 'A is a vowel! (A, E, I, O, U)'),
      q('36b', 'pick-one', 'Which is a Vowel?', ['E', 'F', 'G', 'H'], 0, 'E is a vowel!'),
      q('36c', 'pick-one', 'How many vowels are there?', ['5', '2', '26', '10'], 0, 'There are 5 vowels: A, E, I, O, U!')
    ],
  },
  // ── Level 37: Count to 10 ──
  {
    id: 'lv37', levelNum: 37, title: 'Count to 10', emoji: '📖', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('37a', 'pick-one', 'What comes after 5?', ['7', '8', '6', '4'], 2, '6 comes after 5!'),
      q('37b', 'pick-one', 'What comes after 8?', ['10', '7', '9', '6'], 2, '9 comes after 8!'),
      q('37c', 'pick-one', 'What comes after 9?', ['11', '8', '10', '7'], 2, '10 comes after 9!')
    ],
  },
  // ── Level 38: Easy Math ──
  {
    id: 'lv38', levelNum: 38, title: 'Easy Math', emoji: '💪', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('38a', 'pick-one', '5 + 2 = ?', ['8', '7', '6', '9'], 1, '5 plus 2 equals 7!'),
      q('38b', 'pick-one', '6 - 2 = ?', ['3', '4', '5', '6'], 1, '6 minus 2 equals 4!'),
      q('38c', 'pick-one', '3 + 4 = ?', ['7', '6', '8', '5'], 0, '3 plus 4 equals 7!')
    ],
  },
  // ── Level 39: Helpers ──
  {
    id: 'lv39', levelNum: 39, title: 'Helpers', emoji: '👨‍⚕️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('39a', 'pick-one', 'Who helps sick people?', ['Teacher', 'Pilot', 'Doctor', 'Farmer'], 2, 'Doctor!'),
      q('39b', 'pick-one', 'Who teaches in school?', ['Chef', 'Farmer', 'Doctor', 'Teacher'], 3, 'Teacher!'),
      q('39c', 'pick-one', 'Who grows food?', ['Chef', 'Doctor', 'Farmer', 'Pilot'], 2, 'Farmer!')
    ],
  },
  // ── Level 40: Ball ──
  {
    id: 'lv40', levelNum: 40, title: 'Ball Shape', emoji: '🧊', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
    reward: { stars: 1 },
    questions: [
      q('40a', 'pick-one', 'A ball is round like a...?', ['Box', 'Book', 'Circle', 'Door'], 2, 'Circle!'),
      q('40b', 'pick-one', 'Which is round?', ['Ball', 'Book', 'Box', 'Door'], 0, 'Ball is round!'),
      q('40c', 'true-false', 'A ball can roll', ['True', 'False'], 0, 'Yes! Balls roll!')
    ],
  },
  // ── Level 41: Rhyming Words ──
  {
    id: 'lv41', levelNum: 41, title: 'Rhyming Words', emoji: '🎵', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
    reward: { stars: 1 },
    questions: [
      q('41a', 'pick-one', 'What rhymes with CAT 🐱?', ['Dog', 'Bat', 'Fish', 'Cow'], 1, 'Cat and Bat rhyme!'),
      q('41b', 'pick-one', 'What rhymes with PEN 🖊️?', ['Ten', 'Cup', 'Box', 'Hat'], 0, 'Pen and Ten rhyme!'),
      q('41c', 'pick-one', 'What rhymes with SUN ☀️?', ['Moon', 'Star', 'Bun', 'Sky'], 2, 'Sun and Bun rhyme!')
    ],
  },
  // ── Level 42: Compare ──
  {
    id: 'lv42', levelNum: 42, title: 'Which is Bigger', emoji: '⚖️', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('42a', 'pick-one', 'Which is bigger: 5 or 3?', ['3', '5'], 1, '5 is bigger!'),
      q('42b', 'pick-one', 'Which is smaller: 2 or 7?', ['7', '2'], 1, '2 is smaller!'),
      q('42c', 'pick-one', 'Which is bigger: 8 or 4?', ['4', '8'], 1, '8 is bigger!')
    ],
  },
  // ── Level 43: Day & Night ──
  {
    id: 'lv43', levelNum: 43, title: 'Day & Night', emoji: '🚀', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('43a', 'pick-one', 'Sun shines in the...?', ['Night', 'Day'], 1, 'Sun in the day!'),
      q('43b', 'pick-one', 'Moon comes at...?', ['Day', 'Night'], 1, 'Moon at night!'),
      q('43c', 'pick-one', 'When do we sleep?', ['Day', 'Night'], 1, 'We sleep at night!')
    ],
  },
  // ── Level 44: Easy Adding ──
  {
    id: 'lv44', levelNum: 44, title: 'Easy Adding', emoji: '🧮', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('44a', 'pick-one', '1 + 2 = ?', ['4', '3', '2', '5'], 1, '1 plus 2 equals 3!'),
      q('44b', 'pick-one', '2 + 2 = ?', ['3', '5', '4', '6'], 2, '2 plus 2 equals 4!'),
      q('44c', 'pick-one', '3 + 2 = ?', ['6', '4', '5', '7'], 2, '3 plus 2 equals 5!')
    ],
  },
  // ── Level 45: Know Your ABC ──
  {
    id: 'lv45', levelNum: 45, title: 'Know Your ABC', emoji: '🏆', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
    reward: { stars: 1 },
    questions: [
      q('45a', 'pick-one', 'A is for...?', ['Dog', 'Ball', 'Apple', 'Cat'], 2, 'A for Apple!'),
      q('45b', 'pick-one', 'B is for...?', ['Cat', 'Ball', 'Dog', 'Apple'], 1, 'B for Ball!'),
      q('45c', 'pick-one', 'C is for...?', ['Ball', 'Apple', 'Cat', 'Dog'], 2, 'C for Cat!')
    ],
  },
  // ── Level 46: Plants ──
  {
    id: 'lv46', levelNum: 46, title: 'Plants', emoji: '🌳', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('46a', 'pick-one', 'Trees are...?', ['Red', 'Blue', 'Green', 'Yellow'], 2, 'Trees are green!'),
      q('46b', 'pick-one', 'Flowers are...?', ['Ugly', 'Pretty', 'Scary', 'Loud'], 1, 'Flowers are pretty!'),
      q('46c', 'pick-one', 'Plants need...?', ['Toys', 'Books', 'Water', 'TV'], 2, 'Plants need water!')
    ],
  },
  // ── Level 47: Count Objects ──
  {
    id: 'lv47', levelNum: 47, title: 'Count Objects', emoji: '🧮', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('47a', 'pick-one', '🌸🌸🌸🌸🌸 How many?', ['7', '5', '6', '4'], 1, '5 flowers!'),
      q('47b', 'pick-one', '🐟🐟🐟🐟 How many?', ['5', '4', '3', '6'], 1, '4 fish!'),
      q('47c', 'pick-one', '🎈🎈🎈 How many?', ['2', '3', '4', '5'], 1, '3 balloons!')
    ],
  },
  // ── Level 48: All Shapes ──
  {
    id: 'lv48', levelNum: 48, title: 'All Shapes', emoji: '🏅', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
    reward: { stars: 1 },
    questions: [
      q('48a', 'pick-one', 'Which is a circle?', ['🔺', '⬛', '⚫', '⭐'], 2, 'Circle!'),
      q('48b', 'pick-one', 'Which is a square?', ['⚫', '🔺', '⬛', '⭐'], 2, 'Square!'),
      q('48c', 'pick-one', 'Which is a triangle?', ['⬛', '🔺', '⚫', '⭐'], 1, 'Triangle!')
    ],
  },
  // ── Level 49: Math Fun ──
  {
    id: 'lv49', levelNum: 49, title: 'Math Fun', emoji: '⭐', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('49a', 'pick-one', '4 + 3 = ?', ['8', '7', '6', '5'], 1, '4 plus 3 equals 7!'),
      q('49b', 'pick-one', '7 - 2 = ?', ['6', '4', '5', '7'], 2, '7 minus 2 equals 5!'),
      q('49c', 'pick-one', '5 + 3 = ?', ['9', '8', '7', '6'], 1, '5 plus 3 equals 8!')
    ],
  },
  // ── Level 50: National Symbols ──
  {
    id: 'lv50', levelNum: 50, title: 'National Symbols', emoji: '�🇳', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 3 },
    questions: [
      q('50a', 'pick-one', 'National Bird of India? 🦚', ['Peacock', 'Crow', 'Parrot', 'Hen'], 0, 'Peacock is our national bird!'),
      q('50b', 'pick-one', 'National Animal of India? 🐅', ['Lion', 'Tiger', 'Elephant', 'Cat'], 1, 'Tiger is our national animal!'),
      q('50c', 'pick-one', 'National Flower of India? 🌸', ['Rose', 'Lotus', 'Tulip', 'Lily'], 1, 'Lotus is our national flower!'),
      q('50d', 'true-false', 'We love India!', ['True', 'False'], 0, 'Yes! We love India!')
    ],
  },
  // ── Level 51: Simple Words ──
  {
    id: 'lv51', levelNum: 51, title: 'Simple Words', emoji: '📖', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
    reward: { stars: 1 },
    questions: [
      q('51a', 'pick-one', 'Which says CAT? 🐱', ['DOG', 'BAT', 'CAT', 'RAT'], 2, 'C-A-T reads Cat!'),
      q('51b', 'pick-one', 'Which says DOG? 🐶', ['CAT', 'DOG', 'BAT', 'RAT'], 1, 'D-O-G reads Dog!'),
      q('51c', 'pick-one', 'Which says BAT? 🦇', ['CAT', 'DOG', 'BAT', 'RAT'], 2, 'B-A-T reads Bat!')
    ],
  },
  // ── Level 52: Share ──
  {
    id: 'lv52', levelNum: 52, title: 'Share', emoji: '🍕', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('52a', 'pick-one', 'You have 4 🍪. Give 2 to friend. You have?', ['4', '3', '2', '1'], 2, '4 - 2 = 2 cookies!'),
      q('52b', 'pick-one', 'You have 6 🍎. Give 3 away. You have?', ['2', '4', '5', '3'], 3, '6 - 3 = 3 apples!'),
      q('52c', 'true-false', 'Sharing is good', ['True', 'False'], 0, 'Yes! Sharing is caring!')
    ],
  },
  // ── Level 53: Water Animals ──
  {
    id: 'lv53', levelNum: 53, title: 'Water Animals', emoji: '🐙', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('53a', 'pick-one', 'Which lives in water?', ['Dog', 'Bird', 'Cat', 'Fish'], 3, 'Fish!'),
      q('53b', 'pick-one', 'Which animal swims?', ['Cat', 'Dog', 'Duck', 'Cow'], 2, 'Duck swims!'),
      q('53c', 'pick-one', 'Fish can...?', ['Walk', 'Fly', 'Swim', 'Run'], 2, 'Fish swim!')
    ],
  },
  // ── Level 54: What Comes Next ──
  {
    id: 'lv54', levelNum: 54, title: 'What Comes Next', emoji: '↔️', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('54a', 'pick-one', '1, 2, 3, __?', ['5', '6', '4', '7'], 2, '4 comes next!'),
      q('54b', 'pick-one', '5, 6, 7, __?', ['9', '10', '8', '11'], 2, '8 comes next!'),
      q('54c', 'pick-one', '7, 8, 9, __?', ['11', '12', '10', '13'], 2, '10 comes next!')
    ],
  },
  // ── Level 55: Same on Both Sides ──
  {
    id: 'lv55', levelNum: 55, title: 'Same on Both Sides', emoji: '🦋', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
    reward: { stars: 1 },
    questions: [
      q('55a', 'true-false', 'Butterfly has same wings on both sides', ['True', 'False'], 0, 'Yes! Both sides match!'),
      q('55b', 'true-false', 'Circle looks same all around', ['True', 'False'], 0, 'Yes! Circle is round!'),
      q('55c', 'true-false', 'Your face has 2 eyes', ['True', 'False'], 0, 'Yes! One on each side!')
    ],
  },
  // ── Level 56: Animal Sounds ──
  {
    id: 'lv56', levelNum: 56, title: 'Animal Sounds', emoji: '🎵', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('56a', 'pick-one', 'Cow says...?', ['Woof', 'Meow', 'Moo', 'Quack'], 2, 'Cow says Moo!'),
      q('56b', 'pick-one', 'Duck says...?', ['Moo', 'Woof', 'Quack', 'Meow'], 2, 'Duck says Quack!'),
      q('56c', 'pick-one', 'Cat says...?', ['Woof', 'Moo', 'Quack', 'Meow'], 3, 'Cat says Meow!')
    ],
  },
  // ── Level 57: Counting Fun ──
  {
    id: 'lv57', levelNum: 57, title: 'Counting Fun', emoji: '💰', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('57a', 'pick-one', 'Count: 🍓🍓🍓🍓🍓', ['4', '6', '5', '7'], 2, '5 strawberries!'),
      q('57b', 'pick-one', 'Count: 🚗🚗🚗🚗', ['3', '5', '4', '6'], 2, '4 cars!'),
      q('57c', 'pick-one', 'Count: 🌟🌟🌟', ['4', '2', '3', '5'], 2, '3 stars!')
    ],
  },
  // ── Level 58: Clean Hands ──
  {
    id: 'lv58', levelNum: 58, title: 'Clean Hands', emoji: '🧼', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('58a', 'pick-one', 'We wash hands with...?', ['Oil', 'Juice', 'Soap', 'Mud'], 2, 'Soap!'),
      q('58b', 'true-false', 'We should wash hands before eating', ['True', 'False'], 0, 'Yes! Clean hands!'),
      q('58c', 'pick-one', 'We brush our...?', ['Hair', 'Feet', 'Teeth', 'Arms'], 2, 'We brush teeth!')
    ],
  },
  // ── Level 59: Count by 2 ──
  {
    id: 'lv59', levelNum: 59, title: 'Count by 2', emoji: '🐾', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('59a', 'pick-one', '2, 4, 6, __?', ['7', '9', '8', '10'], 2, '8 comes next!'),
      q('59b', 'pick-one', 'Count: 👟👟 = ?', ['1', '2', '3', '4'], 1, '2 shoes!'),
      q('59c', 'pick-one', 'You have 2 hands. How many fingers total?', ['8', '10', '12', '5'], 1, '10 fingers!')
    ],
  },
  // ── Level 60: Healthy Habits ──
  {
    id: 'lv60', levelNum: 60, title: 'Healthy Habits', emoji: '🍎', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('60a', 'pick-one', 'Which is healthy food? 🍎', ['Burger', 'Chips', 'Apple', 'Candy'], 2, 'Apple is healthy!'),
      q('60b', 'pick-one', 'We should brush teeth...? 🦷', ['Every day', 'Never', 'Once a year', 'Sunday only'], 0, 'Brush teeth every day!'),
      q('60c', 'pick-one', 'Wash hands before...? 🧼', ['Sleeping', 'Eating', 'Playing', 'Walking'], 1, 'Wash hands before eating!')
    ],
  },
  // ── Level 61: A or An ──
  {
    id: 'lv61', levelNum: 61, title: 'A or An', emoji: '🅰️', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
    reward: { stars: 1 },
    questions: [
      q('61a', 'pick-one', '___ Apple 🍎', ['A', 'An'], 1, 'An Apple! (Starts with vowel)'),
      q('61b', 'pick-one', '___ Ball ⚽', ['A', 'An'], 0, 'A Ball! (Starts with consonant)'),
      q('61c', 'pick-one', '___ Elephant 🐘', ['A', 'An'], 1, 'An Elephant!')
    ],
  },
  // ── Level 62: Weather ──
  {
    id: 'lv62', levelNum: 62, title: 'Weather', emoji: '🌤️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('62a', 'pick-one', 'Rain comes from...?', ['Ground', 'Trees', 'Clouds', 'Mountains'], 2, 'Clouds!'),
      q('62b', 'pick-one', 'Rainbow has many...?', ['Sounds', 'Colors', 'Animals', 'Foods'], 1, 'Colors!'),
      q('62c', 'pick-one', 'Snow is...?', ['Hot', 'Warm', 'Cold', 'Soft'], 2, 'Cold!')
    ],
  },
  // ── Level 63: Shape Patterns ──
  {
    id: 'lv63', levelNum: 63, title: 'Shape Patterns', emoji: '🔲', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
    reward: { stars: 1 },
    questions: [
      q('63a', 'pick-one', '🔴🔵🔴🔵🔴__?', ['🔴', '🟡', '🔵', '🟢'], 2, 'Blue comes next!'),
      q('63b', 'pick-one', '⭐🌙⭐🌙__?', ['🌙', '☀️', '⭐', '🌈'], 2, 'Star comes next!'),
      q('63c', 'pick-one', '⚫⬛⚫⬛__?', ['⭐', '⬛', '⚫', '🔺'], 2, 'Circle comes next!')
    ],
  },
  // ── Level 64: Big and Small Numbers ──
  {
    id: 'lv64', levelNum: 64, title: 'Big and Small Numbers', emoji: '🏗️', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('64a', 'pick-one', 'Which is bigger: 10 or 5?', ['5', '10'], 1, '10 is bigger!'),
      q('64b', 'pick-one', 'Which is smaller: 3 or 8?', ['8', '3'], 1, '3 is smaller!'),
      q('64c', 'pick-one', 'Which is bigger: 7 or 4?', ['4', '7'], 1, '7 is bigger!')
    ],
  },
  // ── Level 65: Happy Times ──
  {
    id: 'lv65', levelNum: 65, title: 'Happy Times', emoji: '🪔', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('65a', 'pick-one', 'On birthday we...?', ['Sleep', 'Cry', 'Celebrate', 'Study'], 2, 'We celebrate!'),
      q('65b', 'pick-one', 'On birthday we cut...?', ['Paper', 'Cake', 'Grass', 'Tree'], 1, 'We cut cake!'),
      q('65c', 'pick-one', 'Parties are...?', ['Sad', 'Boring', 'Fun', 'Scary'], 2, 'Parties are fun!')
    ],
  },
  // ── Level 66: Count by 5 ──
  {
    id: 'lv66', levelNum: 66, title: 'Count by 5', emoji: '🖐️', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('66a', 'pick-one', 'Count fingers on 1 hand', ['3', '4', '5', '6'], 2, '5 fingers!'),
      q('66b', 'pick-one', '5, 10, __?', ['12', '20', '15', '11'], 2, '15 comes next!'),
      q('66c', 'pick-one', 'Count: 🖐️🖐️ = ?', ['8', '10', '9', '12'], 1, '10 fingers!')
    ],
  },
  // ── Level 67: One and Many ──
  {
    id: 'lv67', levelNum: 67, title: 'One and Many', emoji: '�', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
    reward: { stars: 1 },
    questions: [
      q('67a', 'pick-one', 'One Cat 🐱, Two...?', ['Cat', 'Cats', 'Cates', 'Kitten'], 1, 'Two Cats! (Plural)'),
      q('67b', 'pick-one', 'One Apple 🍎, Three...?', ['Apples', 'Apple', 'Appless', 'Fruit'], 0, 'Three Apples!'),
      q('67c', 'pick-one', 'One Box 📦, Many...?', ['Box', 'Boxs', 'Boxes', 'Bag'], 2, 'Many Boxes!')
    ],
  },
  // ── Level 68: Count All ──
  {
    id: 'lv68', levelNum: 68, title: 'Count All', emoji: '📐', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('68a', 'pick-one', '2 🍎 + 3 🍎 = ?', ['6', '5', '4', '7'], 1, '2 + 3 = 5 apples!'),
      q('68b', 'pick-one', '4 🐶 + 2 🐶 = ?', ['6', '8', '5', '7'], 0, '4 + 2 = 6 dogs!'),
      q('68c', 'pick-one', '3 ⭐ + 3 ⭐ = ?', ['5', '7', '6', '8'], 2, '3 + 3 = 6 stars!')
    ],
  },
  // ── Level 69: Insects ──
  {
    id: 'lv69', levelNum: 69, title: 'Insects', emoji: '🐛', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('69a', 'pick-one', 'Which can fly?', ['Ant', 'Butterfly', 'Worm', 'Snail'], 1, 'Butterfly!'),
      q('69b', 'pick-one', 'Bees make...?', ['Water', 'Honey', 'Milk', 'Juice'], 1, 'Honey!'),
      q('69c', 'pick-one', 'Ants are...?', ['Big', 'Huge', 'Small', 'Tall'], 2, 'Ants are small!')
    ],
  },
  // ── Level 70: First Place ──
  {
    id: 'lv70', levelNum: 70, title: 'Who Wins', emoji: '🥇', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('70a', 'pick-one', 'In a race, who is best?', ['Last person', 'First person', 'Slow person', 'Tired person'], 1, 'First person wins!'),
      q('70b', 'pick-one', 'Gold medal means you are...?', ['Last', 'Worst', 'Best', 'Lost'], 2, 'Best! You won!'),
      q('70c', 'true-false', 'Winner is number 1', ['True', 'False'], 0, 'Yes! Number 1!')
    ],
  },
  // ── Level 71: Opposites ──
  {
    id: 'lv71', levelNum: 71, title: 'Opposites', emoji: '⬆️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('71a', 'pick-one', 'Opposite of HOT?', ['Cold', 'Warm', 'Wet', 'Dry'], 0, 'Cold!'),
      q('71b', 'pick-one', 'Opposite of BIG?', ['Tall', 'Wide', 'Small', 'Huge'], 2, 'Small!'),
      q('71c', 'pick-one', 'Opposite of HAPPY?', ['Glad', 'Sad', 'Excited', 'Good'], 1, 'Sad!')
    ],
  },
  // ── Level 72: Story Math ──
  {
    id: 'lv72', levelNum: 72, title: 'Story Math', emoji: '📚', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('72a', 'pick-one', 'Anu had 5 🍎. She gave 2 away. How many left?', ['2', '4', '3', '5'], 2, '5 - 2 = 3!'),
      q('72b', 'pick-one', 'A hen has 3 🥚. She gets 2 more. Total?', ['6', '4', '5', '7'], 2, '3 + 2 = 5!'),
      q('72c', 'pick-one', 'You have 2 red 🍬 and 2 blue 🍬. How many?', ['3', '5', '4', '6'], 2, '2 + 2 = 4!')
    ],
  },
  // ── Level 73: Save Earth ──
  {
    id: 'lv73', levelNum: 73, title: 'Save Earth', emoji: '♻️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('73a', 'pick-one', 'We should save...?', ['Water', 'Dirt', 'Rocks', 'Sand'], 0, 'Water!'),
      q('73b', 'true-false', 'Trees are good for Earth', ['True', 'False'], 0, 'Yes! Plant trees!'),
      q('73c', 'pick-one', 'Throw garbage in...?', ['Garden', 'Dustbin', 'River', 'Road'], 1, 'Dustbin!')
    ],
  },
  // ── Level 74: All Shapes ──
  {
    id: 'lv74', levelNum: 74, title: 'Know All Shapes', emoji: '📏', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
    reward: { stars: 1 },
    questions: [
      q('74a', 'pick-one', 'Which is round?', ['Square', 'Circle', 'Triangle', 'Star'], 1, 'Circle!'),
      q('74b', 'pick-one', 'Which has 3 corners?', ['Circle', 'Square', 'Triangle', 'Star'], 2, 'Triangle!'),
      q('74c', 'pick-one', 'Which has 4 corners?', ['Circle', 'Triangle', 'Square', 'Star'], 2, 'Square!')
    ],
  },
  // ── Level 75: Super Work ──
  {
    id: 'lv75', levelNum: 75, title: 'Super Work', emoji: '🏆', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 3 },
    questions: [
      q('75a', 'pick-one', '6 + 2 = ?', ['7', '8', '9', '10'], 1, '8! Great job!'),
      q('75b', 'pick-one', '8 - 3 = ?', ['6', '4', '5', '7'], 2, '5! You did it!'),
      q('75c', 'pick-one', '7 + 2 = ?', ['10', '8', '9', '11'], 2, '9! Amazing!'),
      q('75d', 'true-false', 'You are a super star!', ['True', 'False'], 0, 'YES! You are!')
    ],
  },
  // ── Level 76: Match the Same ──
  {
    id: 'lv76', levelNum: 76, title: 'Match the Same', emoji: '🎯', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
    reward: { stars: 1 },
    questions: [
      q('76a', 'pick-one', 'Which is same as 🔴?', ['🔵', '🔴', '🟢', '🟡'], 1, 'Red circle!'),
      q('76b', 'pick-one', 'Which is same as ⭐?', ['🌙', '🌈', '⭐', '☀️'], 2, 'Star!'),
      q('76c', 'pick-one', 'Which is same as 🍎?', ['🍇', '🍎', '🍌', '🍊'], 1, 'Apple!')
    ],
  },
  // ── Level 77: Count with Me ──
  {
    id: 'lv77', levelNum: 77, title: 'Count with Me', emoji: '🔢', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('77a', 'pick-one', 'Count: 🍄🍄🍄', ['2', '4', '3', '5'], 2, '3 mushrooms!'),
      q('77b', 'pick-one', 'Count: 🐤🐤🐤🐤🐤', ['7', '5', '4', '6'], 1, '5 chicks!'),
      q('77c', 'pick-one', 'Count: 🌷🌷🌷🌷', ['6', '5', '4', '3'], 2, '4 flowers!')
    ],
  },
  // ── Level 78: People Who Love Me ──
  {
    id: 'lv78', levelNum: 78, title: 'People Who Love Me', emoji: '👨‍👩‍👧', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('78a', 'pick-one', 'Who takes care of you?', ['Strangers', 'Family', 'Nobody', 'Monsters'], 1, 'Family!'),
      q('78b', 'true-false', 'Your family loves you', ['True', 'False'], 0, 'Yes! Family loves you!'),
      q('78c', 'pick-one', 'Who cooks food for you?', ['Nobody', 'Family', 'Strangers', 'Robots'], 1, 'Family!')
    ],
  },
  // ── Level 79: Easy Adding ──
  {
    id: 'lv79', levelNum: 79, title: 'Easy Adding', emoji: '➕', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('79a', 'pick-one', '2 + 2 = ?', ['5', '4', '6', '3'], 1, '4!'),
      q('79b', 'pick-one', '3 + 1 = ?', ['3', '4', '5', '2'], 1, '4!'),
      q('79c', 'pick-one', '1 + 4 = ?', ['4', '3', '5', '6'], 2, '5!')
    ],
  },
  // ── Level 80: Easy Take Away ──
  {
    id: 'lv80', levelNum: 80, title: 'Easy Take Away', emoji: '➖', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('80a', 'pick-one', '4 - 1 = ?', ['3', '4', '2', '5'], 0, '3!'),
      q('80b', 'pick-one', '3 - 2 = ?', ['0', '2', '1', '3'], 2, '1!'),
      q('80c', 'pick-one', '5 - 3 = ?', ['3', '1', '4', '2'], 3, '2!')
    ],
  },
  // ── Level 81: This or That ──
  {
    id: 'lv81', levelNum: 81, title: 'This or That', emoji: '👉', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
    reward: { stars: 1 },
    questions: [
      q('81a', 'pick-one', 'Object is NEAR me. We say...?', ['That', 'This'], 1, 'This! (For near things)'),
      q('81b', 'pick-one', 'Object is FAR away. We say...?', ['This', 'That'], 1, 'That! (For far things)'),
      q('81c', 'pick-one', '___ is my nose (touching nose)', ['This', 'That'], 0, 'This is my nose!')
    ],
  },
  // ── Level 82: More Colors ──
  {
    id: 'lv82', levelNum: 82, title: 'More Colors', emoji: '🎨', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
    reward: { stars: 1 },
    questions: [
      q('82a', 'pick-one', 'What color is a strawberry?', ['Blue', 'Red', 'Purple', 'Green'], 1, 'Red!'),
      q('82b', 'pick-one', 'What color is an orange?', ['Yellow', 'Green', 'Orange', 'Red'], 2, 'Orange!'),
      q('82c', 'pick-one', 'What color is a leaf?', ['Red', 'Yellow', 'Brown', 'Green'], 3, 'Green!')
    ],
  },
  // ── Level 83: Time Words ──
  {
    id: 'lv83', levelNum: 83, title: 'Time Words', emoji: '📅', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('83a', 'pick-one', 'Sun is up during...?', ['Night', 'Day'], 1, 'Day time!'),
      q('83b', 'pick-one', 'Moon is up during...?', ['Day', 'Night'], 1, 'Night time!'),
      q('83c', 'pick-one', 'When do we go to school?', ['Night', 'Day'], 1, 'Day time!')
    ],
  },
  // ── Level 84: Easy Patterns ──
  {
    id: 'lv84', levelNum: 84, title: 'Easy Patterns', emoji: '🔁', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('84a', 'pick-one', 'A B A B A __?', ['C', 'D', 'B', 'A'], 2, 'B comes next!'),
      q('84b', 'pick-one', '🍎🍊🍎🍊🍎__?', ['🍌', '🍎', '🍊', '🍇'], 2, 'Orange comes next!'),
      q('84c', 'pick-one', '1 2 1 2 1 __?', ['3', '2', '4', '1'], 1, '2 comes next!')
    ],
  },
  // ── Level 85: Big or Small ──
  {
    id: 'lv85', levelNum: 85, title: 'Big or Small', emoji: '📏', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('85a', 'pick-one', 'Which is bigger: 🐘 or 🐜?', ['🐜 Ant', 'Same', '🐘 Elephant'], 2, 'Elephant is bigger!'),
      q('85b', 'pick-one', 'Which is smaller: 🏠 or 🚗?', ['🚗 Car', '🏠 House', 'Same'], 0, 'Car is smaller!'),
      q('85c', 'pick-one', 'Elephant is...?', ['Small', 'Tiny', 'Big', 'Little'], 2, 'Elephant is big!')
    ],
  },
  // ── Level 86: Which Starts ──
  {
    id: 'lv86', levelNum: 86, title: 'Which Starts', emoji: '🎵', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
    reward: { stars: 1 },
    questions: [
      q('86a', 'pick-one', 'Which starts with C?', ['Dog', 'Rat', 'Pig', 'Cat'], 3, 'Cat starts with C!'),
      q('86b', 'pick-one', 'Which starts with D?', ['Hat', 'Dog', 'Cat', 'Bat'], 1, 'Dog starts with D!'),
      q('86c', 'pick-one', 'Which starts with B?', ['Cat', 'Rat', 'Pig', 'Ball'], 3, 'Ball starts with B!')
    ],
  },
  // ── Level 87: What Comes Next ──
  {
    id: 'lv87', levelNum: 87, title: 'What Comes Next', emoji: '➡️', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('87a', 'pick-one', '1, 2, 3, __?', ['5', '7', '4', '6'], 2, '4!'),
      q('87b', 'pick-one', '5, 6, 7, __?', ['8', '11', '9', '10'], 0, '8!'),
      q('87c', 'pick-one', '3, 4, 5, __?', ['8', '7', '6', '9'], 2, '6!')
    ],
  },
  // ── Level 88: Hot or Cold ──
  {
    id: 'lv88', levelNum: 88, title: 'Hot or Cold', emoji: '🌡️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('88a', 'pick-one', 'Which is hot?', ['❄️ Ice', '🔥 Fire', '☁️ Cloud', '💧 Water'], 1, 'Fire is hot!'),
      q('88b', 'pick-one', 'Which is cold?', ['❄️ Ice cream', '💡 Light', '🔥 Fire', '☀️ Sun'], 0, 'Ice cream is cold!'),
      q('88c', 'pick-one', 'Sun is...?', ['Cold', 'Cool', 'Hot', 'Warm'], 2, 'Sun is hot!')
    ],
  },
  // ── Level 89: Same or Different ──
  {
    id: 'lv89', levelNum: 89, title: 'Same or Different', emoji: '⚖️', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
    reward: { stars: 1 },
    questions: [
      q('89a', 'pick-one', 'Which is different? 🍎🍎🍊🍎', ['🍎 Apple', '🍊 Orange'], 1, 'Orange is different!'),
      q('89b', 'pick-one', 'Which is different? 🔴🔴🔵🔴', ['🔴 Red', '🔵 Blue'], 1, 'Blue is different!'),
      q('89c', 'pick-one', 'Which is same? 🐱🐶🐱🐭', ['🐶 Dog', '🐱 Cat', '🐭 Mouse'], 1, 'The two Cats are same!')
    ],
  },
  // ── Level 90: Yummy Fruits ──
  {
    id: 'lv90', levelNum: 90, title: 'Yummy Fruits', emoji: '🍓', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('90a', 'pick-one', 'Which fruit is red?', ['Banana', 'Strawberry', 'Orange', 'Mango'], 1, 'Strawberry!'),
      q('90b', 'pick-one', 'Which fruit is purple?', ['Apple', 'Papaya', 'Grapes', 'Mango'], 2, 'Grapes!'),
      q('90c', 'pick-one', 'Banana is...?', ['Red', 'Blue', 'Yellow', 'Green'], 2, 'Banana is yellow!')
    ],
  },
  // ── Level 91: Up Down ──
  {
    id: 'lv91', levelNum: 91, title: 'Up Down', emoji: '⬆️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('91a', 'pick-one', 'Birds fly...?', ['Down', 'Left', 'Right', 'Up'], 3, 'Birds fly up!'),
      q('91b', 'pick-one', 'Rain falls...?', ['Right', 'Left', 'Up', 'Down'], 3, 'Rain falls down!'),
      q('91c', 'pick-one', 'Sky is...?', ['Down', 'Up', 'Left', 'Right'], 1, 'Sky is up!')
    ],
  },
  // ── Level 92: Count & Match ──
  {
    id: 'lv92', levelNum: 92, title: 'Count & Match', emoji: '🔢', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('92a', 'pick-one', 'Match: 🍎🍎🍎 = ?', ['2', '5', '4', '3'], 3, '3 apples!'),
      q('92b', 'pick-one', 'Match: 🖐️ = ?', ['6', '4', '3', '5'], 3, '5 fingers!'),
      q('92c', 'pick-one', 'Match: 👀 = ?', ['4', '1', '2', '3'], 2, '2 eyes!')
    ],
  },
  // ── Level 93: Healthy Food ──
  {
    id: 'lv93', levelNum: 93, title: 'Healthy Food', emoji: '🥗', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('93a', 'pick-one', 'Which is healthy?', ['Burger', 'Candy', 'Apple', 'Chips'], 2, 'Apple is healthy!'),
      q('93b', 'pick-one', 'We should drink...?', ['Soda', 'Water', 'Cold drink', 'Juice'], 1, 'Water is healthy!'),
      q('93c', 'pick-one', 'Vegetables are...?', ['Bad', 'Yucky', 'Good', 'Scary'], 2, 'Vegetables are good!')
    ],
  },
  // ── Level 94: Heavy or Light ──
  {
    id: 'lv94', levelNum: 94, title: 'Heavy or Light', emoji: '⚖️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('94a', 'pick-one', 'Which is heavy?', ['🪶 Feather', '🧵 Thread', '🪨 Rock', '🍃 Leaf'], 2, 'Rock is heavy!'),
      q('94b', 'pick-one', 'Which is light?', ['🚗 Car', '🪶 Feather', '🪨 Rock', '🐘 Elephant'], 1, 'Feather is light!'),
      q('94c', 'pick-one', 'Elephant is...?', ['Light', 'Feather', 'Heavy', 'Small'], 2, 'Elephant is heavy!')
    ],
  },
  // ── Level 95: Body Parts ──
  {
    id: 'lv95', levelNum: 95, title: 'Body Parts', emoji: '🧍', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('95a', 'pick-one', 'We smell with our...?', ['Ears', 'Eyes', 'Mouth', 'Nose'], 3, 'We smell with nose!'),
      q('95b', 'pick-one', 'We eat with our...?', ['Nose', 'Eyes', 'Ears', 'Mouth'], 3, 'We eat with mouth!'),
      q('95c', 'pick-one', 'How many hands do we have?', ['4', '1', '2', '3'], 2, 'We have 2 hands!')
    ],
  },
  // ── Level 96: Fast or Slow ──
  {
    id: 'lv96', levelNum: 96, title: 'Fast or Slow', emoji: '🏃', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('96a', 'pick-one', 'Which is fast?', ['🐢 Turtle', '🐇 Rabbit', '🐌 Snail', '🦥 Sloth'], 1, 'Rabbit is fast!'),
      q('96b', 'pick-one', 'Which is slow?', ['🐌 Snail', '🚗 Car', '🚀 Rocket', '✈️ Plane'], 0, 'Snail is slow!'),
      q('96c', 'pick-one', 'Car is...?', ['Slow', 'Fast', 'Sleeping', 'Stopped'], 1, 'Car is fast!')
    ],
  },
  // ── Level 97: Loud or Soft ──
  {
    id: 'lv97', levelNum: 97, title: 'Loud or Soft', emoji: '🔊', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('97a', 'pick-one', 'Which is loud?', ['🤫 Whisper', '🔔 Bell', '🍃 Wind', '🌙 Moon'], 1, 'Bell is loud!'),
      q('97b', 'pick-one', 'Which is soft?', ['📢 Horn', '🤫 Whisper', '🚗 Car', '🥁 Drum'], 1, 'Whisper is soft!'),
      q('97c', 'pick-one', 'Lion roars...?', ['Soft', 'Quiet', 'Loud', 'Silent'], 2, 'Lion roars loud!')
    ],
  },
  // ── Level 98: Find the Shape ──
  {
    id: 'lv98', levelNum: 98, title: 'Find the Shape', emoji: '🔷', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
    reward: { stars: 1 },
    questions: [
      q('98a', 'pick-one', 'Which is a circle?', ['⬜', '🔺', '⚫', '⬛'], 2, 'This is a circle!'),
      q('98b', 'pick-one', 'Which is a triangle?', ['⚫', '🔺', '⬜', '⬛'], 1, 'This is a triangle!'),
      q('98c', 'pick-one', 'Which is a square?', ['🔺', '⚫', '⬛', '🔵'], 2, 'This is a square!')
    ],
  },
  // ── Level 99: Order of Things ──
  {
    id: 'lv99', levelNum: 99, title: 'Order of Things', emoji: '⏮️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('99a', 'pick-one', 'Do we eat before or after cooking?', ['Before', 'After'], 1, 'After cooking!'),
      q('99b', 'pick-one', 'Do we wash hands before or after eating?', ['After', 'Before'], 1, 'Before eating!'),
      q('99c', 'pick-one', 'Do we wake up before or after sleeping?', ['Before', 'After'], 1, 'After sleeping!')
    ],
  },
  // ── Level 100: Super Star ──
  {
    id: 'lv100', levelNum: 100, title: 'Super Star', emoji: '🌟', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
    reward: { stars: 3 },
    questions: [
      q('100a', 'pick-one', 'You are...?', ['Bad', 'Silly', 'Great', 'Sad'], 2, 'You are great!'),
      q('100b', 'true-false', 'You did amazing!', ['True', 'False'], 0, 'Yes! Keep learning!'),
      q('100c', 'pick-one', 'Keep learning?', ['No', 'Maybe', 'Yes!', 'Stop'], 2, 'Yes! Let\'s continue! 🎉')
    ],
  },
  // ── Level 101: What We Wear ──
  {
    id: 'lv101', levelNum: 101, title: 'What We Wear', emoji: '👕', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('101a', 'pick-one', 'We wear ___ on our feet', ['Gloves', 'Hat', 'Scarf', 'Shoes'], 3, 'We wear shoes!'),
      q('101b', 'pick-one', 'We wear ___ on our head', ['Shirt', 'Pants', 'Shoes', 'Hat'], 3, 'We wear a hat!'),
      q('101c', 'pick-one', 'We wear clothes to...?', ['Play', 'Sleep', 'Cover body', 'Eat'], 2, 'Cover our body!')
    ],
  },
  // ── Level 102: Count More ──
  {
    id: 'lv102', levelNum: 102, title: 'Count More', emoji: '🔢', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('102a', 'pick-one', 'Count: ⭐⭐⭐⭐⭐⭐', ['7', '5', '6', '8'], 2, '6 stars!'),
      q('102b', 'pick-one', 'Count: 🍭🍭🍭🍭🍭🍭🍭', ['9', '6', '8', '7'], 3, '7 lollipops!'),
      q('102c', 'pick-one', 'Count: 🎈🎈🎈🎈🎈', ['6', '5', '4', '7'], 1, '5 balloons!')
    ],
  },
  // ── Level 103: My Toys ──
  {
    id: 'lv103', levelNum: 103, title: 'My Toys', emoji: '🧸', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('103a', 'pick-one', 'Which toy is soft?', ['Car', 'Ball', 'Blocks', 'Teddy bear'], 3, 'Teddy bear!'),
      q('103b', 'pick-one', 'Which toy can you kick?', ['Doll', 'Teddy', 'Ball', 'Puzzle'], 2, 'Ball!'),
      q('103c', 'pick-one', 'Which toy has wheels?', ['Doll', 'Car', 'Teddy', 'Ball'], 1, 'Car!')
    ],
  },
  // ── Level 104: Living or Non-Living ──
  {
    id: 'lv104', levelNum: 104, title: 'Living Things', emoji: '🌱', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('104a', 'pick-one', 'Which is Living? 🌱', ['Stone', 'Car', 'Tree', 'Doll'], 2, 'Tree is living! It grows!'),
      q('104b', 'pick-one', 'Which is Non-Living? 🪨', ['Boy', 'Cat', 'Ball', 'Plant'], 2, 'Ball is non-living!'),
      q('104c', 'pick-one', 'Can a car grow?', ['Yes', 'No'], 1, 'No, car is non-living!')
    ],
  },
  // ── Level 105: My House ──
  {
    id: 'lv105', levelNum: 105, title: 'My House', emoji: '🏠', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('105a', 'pick-one', 'Where do you sleep?', ['Bedroom', 'Kitchen', 'Garden', 'Bathroom'], 0, 'In the bedroom!'),
      q('105b', 'pick-one', 'Where do you eat?', ['Bathroom', 'Bedroom', 'Garden', 'Kitchen'], 3, 'In the kitchen!'),
      q('105c', 'pick-one', 'Where do you take bath?', ['Bedroom', 'Bathroom', 'Garden', 'Kitchen'], 1, 'In the bathroom!')
    ],
  },
  // ── Level 106: Add More ──
  {
    id: 'lv106', levelNum: 106, title: 'Add More', emoji: '➕', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('106a', 'pick-one', '4 + 2 = ?', ['6', '8', '5', '7'], 0, '6!'),
      q('106b', 'pick-one', '5 + 2 = ?', ['8', '9', '7', '6'], 2, '7!'),
      q('106c', 'pick-one', '3 + 3 = ?', ['5', '7', '6', '8'], 2, '6!')
    ],
  },
  // ── Level 107: Take Away More ──
  {
    id: 'lv107', levelNum: 107, title: 'Take Away More', emoji: '➖', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('107a', 'pick-one', '6 - 2 = ?', ['4', '3', '5', '6'], 0, '4!'),
      q('107b', 'pick-one', '7 - 3 = ?', ['4', '6', '5', '3'], 0, '4!'),
      q('107c', 'pick-one', '8 - 4 = ?', ['3', '5', '6', '4'], 3, '4!')
    ],
  },
  // ── Level 108: Animal Homes ──
  {
    id: 'lv108', levelNum: 108, title: 'Animal Homes', emoji: '🏡', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('108a', 'pick-one', 'Bird lives in...?', ['Hole', 'Nest', 'Den', 'Cave'], 1, 'Nest!'),
      q('108b', 'pick-one', 'Dog lives in...?', ['Nest', 'Pond', 'House', 'Tree'], 2, 'House with us!'),
      q('108c', 'pick-one', 'Fish lives in...?', ['Air', 'Tree', 'Land', 'Water'], 3, 'Water!')
    ],
  },
  // ── Level 109: Rainbow Colors ──
  {
    id: 'lv109', levelNum: 109, title: 'Rainbow Colors', emoji: '🌈', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
    reward: { stars: 1 },
    questions: [
      q('109a', 'pick-one', 'Which is pink?', ['🟣', '🩷', '🔴', '🟡'], 1, 'Pink!'),
      q('109b', 'pick-one', 'Which is black?', ['🟣', '⚪', '🟤', '⚫'], 3, 'Black!'),
      q('109c', 'pick-one', 'Which is white?', ['⚫', '🔵', '🔴', '⚪'], 3, 'White!')
    ],
  },
  // ── Level 110: Yummy Food ──
  {
    id: 'lv110', levelNum: 110, title: 'Yummy Food', emoji: '🍽️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('110a', 'pick-one', 'We eat ___ for breakfast', ['Pizza', 'Burger', 'Rice', 'Bread'], 3, 'Bread!'),
      q('110b', 'pick-one', 'We drink ___ in the morning', ['Coffee', 'Milk', 'Soda', 'Juice'], 1, 'Milk!'),
      q('110c', 'pick-one', 'Which is a snack?', ['Rice', 'Dal', 'Biscuits', 'Roti'], 2, 'Biscuits!')
    ],
  },
  // ── Level 111: Long or Short ──
  {
    id: 'lv111', levelNum: 111, title: 'Long or Short', emoji: '📏', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
    reward: { stars: 1 },
    questions: [
      q('111a', 'pick-one', 'Which is longer?', ['🐍 Snake', '🖊️ Pen', '🪡 Needle', '🖍️ Crayon'], 0, 'Snake is longer!'),
      q('111b', 'pick-one', 'Which is shorter?', ['🌱 Plant', '🌲 Tree', '🛣️ Road', '🏠 House'], 0, 'Plant is shorter!'),
      q('111c', 'pick-one', 'Train is...?', ['Short', 'Tiny', 'Long', 'Small'], 2, 'Train is long!')
    ],
  },
  // ── Level 112: Animal Sounds ──
  {
    id: 'lv112', levelNum: 112, title: 'More Animal Sounds', emoji: '🎵', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('112a', 'pick-one', 'Pig says...?', ['Woof', 'Oink', 'Moo', 'Baa'], 1, 'Pig says Oink!'),
      q('112b', 'pick-one', 'Sheep says...?', ['Moo', 'Woof', 'Quack', 'Baa'], 3, 'Sheep says Baa!'),
      q('112c', 'pick-one', 'Horse says...?', ['Neigh', 'Moo', 'Quack', 'Meow'], 0, 'Horse says Neigh!')
    ],
  },
  // ── Level 113: People Ages ──
  {
    id: 'lv113', levelNum: 113, title: 'People Ages', emoji: '👶', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('113a', 'pick-one', 'Baby is...?', ['Big', 'Tall', 'Small', 'Giant'], 2, 'Baby is small!'),
      q('113b', 'pick-one', 'You are a...?', ['Baby', 'Kid', 'Adult', 'Old person'], 1, 'You are a kid!'),
      q('113c', 'pick-one', 'Puppy is a ___ dog', ['Big', 'Small', 'Giant', 'Huge'], 1, 'Small dog!')
    ],
  },
  // ── Level 114: Tall or Short ──
  {
    id: 'lv114', levelNum: 114, title: 'Tall or Short', emoji: '📏', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('114a', 'pick-one', 'Which is tall?', ['🐁 Rat', '🦒 Giraffe', '🐜 Ant', '🐭 Mouse'], 1, 'Giraffe is tall!'),
      q('114b', 'pick-one', 'Which is short?', ['🏢 Building', '🐜 Ant', '🌲 Tree', '🦒 Giraffe'], 1, 'Ant is short!'),
      q('114c', 'pick-one', 'Tree is...?', ['Short', 'Tiny', 'Tall', 'Little'], 2, 'Tree is tall!')
    ],
  },
  // ── Level 115: Fun Patterns ──
  {
    id: 'lv115', levelNum: 115, title: 'Fun Patterns', emoji: '🔁', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('115a', 'pick-one', '🐶🐱🐶🐱🐶__?', ['🐹', '🐱', '🐭', '🐶'], 1, 'Cat comes next!'),
      q('115b', 'pick-one', '🔴🔴🔵🔴🔴__?', ['🔴', '🔵', '🟡', '🟢'], 1, 'Blue comes next!'),
      q('115c', 'pick-one', '1 2 3 1 2 __?', ['1', '2', '3', '4'], 2, '3 comes next!')
    ],
  },
  // ── Level 116: Count Back ──
  {
    id: 'lv116', levelNum: 116, title: 'Count Back', emoji: '🔢', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('116a', 'pick-one', '5, 4, 3, __?', ['4', '5', '1', '2'], 3, '2 comes back!'),
      q('116b', 'pick-one', '3, 2, 1, __?', ['2', '3', '0', '4'], 2, '0 comes last!'),
      q('116c', 'pick-one', '4, 3, 2, __?', ['0', '3', '1', '4'], 2, '1 comes back!')
    ],
  },
  // ── Level 117: What Animals Eat ──
  {
    id: 'lv117', levelNum: 117, title: 'What Animals Eat', emoji: '🍃', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('117a', 'pick-one', 'Cow eats...?', ['Meat', 'Grass', 'Fish', 'Bones'], 1, 'Grass!'),
      q('117b', 'pick-one', 'Monkey eats...?', ['Grass', 'Meat', 'Banana', 'Fish'], 2, 'Banana!'),
      q('117c', 'pick-one', 'Rabbit eats...?', ['Fish', 'Eggs', 'Meat', 'Carrots'], 3, 'Carrots!')
    ],
  },
  // ── Level 118: Biggest & Smallest ──
  {
    id: 'lv118', levelNum: 118, title: 'Biggest & Smallest', emoji: '🔢', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('118a', 'pick-one', 'Which number is BIGGEST? 12, 5, 20, 8', ['20', '5', '8', '12'], 0, '20 is the biggest!'),
      q('118b', 'pick-one', 'Which number is SMALLEST? 9, 15, 2, 10', ['2', '10', '9', '15'], 0, '2 is the smallest!'),
      q('118c', 'pick-one', 'Which is BIGGER? 15 or 11?', ['11', '15'], 1, '15 is bigger!')
    ],
  },
  // ── Level 119: More Opposites ──
  {
    id: 'lv119', levelNum: 119, title: 'More Opposites', emoji: '⬆️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('119a', 'pick-one', 'Opposite of DAY?', ['Afternoon', 'Night', 'Morning', 'Evening'], 1, 'Night!'),
      q('119b', 'pick-one', 'Opposite of WET?', ['Damp', 'Moist', 'Dry', 'Water'], 2, 'Dry!'),
      q('119c', 'pick-one', 'Opposite of IN?', ['Inside', 'Between', 'Out', 'Through'], 2, 'Out!')
    ],
  },
  // ── Level 120: More Body ──
  {
    id: 'lv120', levelNum: 120, title: 'More Body Parts', emoji: '🦶', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('120a', 'pick-one', 'How many legs do you have?', ['3', '1', '2', '4'], 2, '2 legs!'),
      q('120b', 'pick-one', 'How many eyes do you have?', ['1', '3', '4', '2'], 3, '2 eyes!'),
      q('120c', 'pick-one', 'We walk with our...?', ['Ears', 'Hands', 'Head', 'Feet'], 3, 'Feet!')
    ],
  },
  // ── Level 121: Veggies ──
  {
    id: 'lv121', levelNum: 121, title: 'Veggies', emoji: '🥦', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('121a', 'pick-one', 'Which is green?', ['Apple', 'Spinach', 'Banana', 'Orange'], 1, 'Spinach!'),
      q('121b', 'pick-one', 'Which is red?', ['Potato', 'Spinach', 'Tomato', 'Cucumber'], 2, 'Tomato!'),
      q('121c', 'pick-one', 'Which is orange?', ['Carrot', 'Potato', 'Garlic', 'Onion'], 0, 'Carrot!')
    ],
  },
  // ── Level 122: Shape Match ──
  {
    id: 'lv122', levelNum: 122, title: 'Shape Match', emoji: '🔷', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
    reward: { stars: 1 },
    questions: [
      q('122a', 'pick-one', 'Pizza slice is...?', ['Square', 'Triangle', 'Circle', 'Star'], 1, 'Triangle!'),
      q('122b', 'pick-one', 'Clock is...?', ['Star', 'Square', 'Triangle', 'Circle'], 3, 'Circle!'),
      q('122c', 'pick-one', 'Book is...?', ['Rectangle', 'Triangle', 'Circle', 'Star'], 0, 'Rectangle!')
    ],
  },
  // ── Level 123: Simple Math ──
  {
    id: 'lv123', levelNum: 123, title: 'Simple Math', emoji: '💰', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('123a', 'pick-one', '1 + 1 = ?', ['3', '4', '1', '2'], 3, '2!'),
      q('123b', 'pick-one', '4 - 2 = ?', ['2', '4', '5', '3'], 0, '2!'),
      q('123c', 'pick-one', '2 + 2 = ?', ['4', '2', '5', '3'], 0, '4!')
    ],
  },
  // ── Level 124: Day and Night ──
  {
    id: 'lv124', levelNum: 124, title: 'Day and Night', emoji: '☀️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('124a', 'pick-one', 'Sun shines in the...?', ['Night', 'Day'], 1, 'Day!'),
      q('124b', 'pick-one', 'Moon comes at...?', ['Day', 'Night'], 1, 'Night!'),
      q('124c', 'pick-one', 'Stars come at...?', ['Day', 'Night'], 1, 'Night!')
    ],
  },
  // ── Level 125: Baby Animals ──
  {
    id: 'lv125', levelNum: 125, title: 'Baby Animals', emoji: '🐣', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('125a', 'pick-one', 'Baby dog is...?', ['Cub', 'Kitten', 'Puppy', 'Chick'], 2, 'Puppy!'),
      q('125b', 'pick-one', 'Baby cat is...?', ['Cub', 'Puppy', 'Kitten', 'Chick'], 2, 'Kitten!'),
      q('125c', 'pick-one', 'Baby hen is...?', ['Kitten', 'Cub', 'Puppy', 'Chick'], 3, 'Chick!')
    ],
  },
  // ── Level 126: Weather ──
  {
    id: 'lv126', levelNum: 126, title: 'Weather', emoji: '🌤️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('126a', 'pick-one', 'Sun makes it...?', ['Cold', 'Dark', 'Hot', 'Wet'], 2, 'Hot!'),
      q('126b', 'pick-one', 'Rain makes you...?', ['Hot', 'Wet', 'Warm', 'Dry'], 1, 'Wet!'),
      q('126c', 'pick-one', 'Snow is...?', ['Hot', 'Warm', 'Cold', 'Wet'], 2, 'Cold!')
    ],
  },
  // ── Level 127: Count to 10 ──
  {
    id: 'lv127', levelNum: 127, title: 'Count to 10', emoji: '🔢', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('127a', 'pick-one', 'What comes after 6?', ['8', '9', '7', '5'], 2, '7!'),
      q('127b', 'pick-one', 'What comes after 7?', ['9', '10', '8', '6'], 2, '8!'),
      q('127c', 'pick-one', 'What comes after 8?', ['7', '10', '9', '11'], 2, '9!')
    ],
  },
  // ── Level 128: School Things ──
  {
    id: 'lv128', levelNum: 128, title: 'School Things', emoji: '🎒', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('128a', 'pick-one', 'You write with a...?', ['Pencil', 'Ruler', 'Sharpener', 'Eraser'], 0, 'Pencil!'),
      q('128b', 'pick-one', 'You cut with...?', ['Pencil', 'Eraser', 'Scissors', 'Ruler'], 2, 'Scissors!'),
      q('128c', 'pick-one', 'You sit on a...?', ['Chair', 'Shelf', 'Board', 'Table'], 0, 'Chair!')
    ],
  },
  // ── Level 129: Prepositions ──
  {
    id: 'lv129', levelNum: 129, title: 'In On Under', emoji: '📦', area: 'letters', areaLabel: 'Letters', areaColor: '#FACC15',
    reward: { stars: 1 },
    questions: [
      q('129a', 'pick-one', 'Cat is ___ the box 📦 (Inside)', ['On', 'In', 'Under', 'Over'], 1, 'In the box!'),
      q('129b', 'pick-one', 'Book is ___ the table 🪑 (Top)', ['In', 'On', 'Under', 'Behind'], 1, 'On the table!'),
      q('129c', 'pick-one', 'Shoes are ___ the bed 🛏️ (Bottom)', ['On', 'In', 'Under', 'Up'], 2, 'Under the bed!')
    ],
  },
  // ── Level 130: Clean or Dirty ──
  {
    id: 'lv130', levelNum: 130, title: 'Clean or Dirty', emoji: '🧼', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('130a', 'pick-one', 'After playing, hands are...?', ['Dirty', 'Wet', 'Clean', 'Dry'], 0, 'Dirty!'),
      q('130b', 'pick-one', 'After washing, hands are...?', ['Wet', 'Clean', 'Dirty', 'Dry'], 1, 'Clean!'),
      q('130c', 'pick-one', 'We should keep room...?', ['Clean', 'Dirty', 'Messy', 'Untidy'], 0, 'Clean!')
    ],
  },
  // ── Level 131: Add Numbers ──
  {
    id: 'lv131', levelNum: 131, title: 'Add Numbers', emoji: '➕', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('131a', 'pick-one', '5 + 1 = ?', ['7', '5', '6', '8'], 2, '6!'),
      q('131b', 'pick-one', '4 + 3 = ?', ['7', '8', '9', '6'], 0, '7!'),
      q('131c', 'pick-one', '6 + 2 = ?', ['9', '7', '8', '10'], 2, '8!')
    ],
  },
  // ── Level 132: Wet or Dry ──
  {
    id: 'lv132', levelNum: 132, title: 'Wet or Dry', emoji: '💧', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('132a', 'pick-one', 'After rain, ground is...?', ['Wet', 'Hot', 'Dry', 'Cold'], 0, 'Wet!'),
      q('132b', 'pick-one', 'Towel makes you...?', ['Dry', 'Hot', 'Cold', 'Wet'], 0, 'Dry!'),
      q('132c', 'pick-one', 'Water makes things...?', ['Wet', 'Dry', 'Hot', 'Cold'], 0, 'Wet!')
    ],
  },
  // ── Level 133: Shapes Around Us ──
  {
    id: 'lv133', levelNum: 133, title: 'Shapes Around Us', emoji: '🔷', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
    reward: { stars: 1 },
    questions: [
      q('133a', 'pick-one', 'Plate is...?', ['Rectangle', 'Square', 'Circle', 'Triangle'], 2, 'Circle!'),
      q('133b', 'pick-one', 'Book is...?', ['Circle', 'Rectangle', 'Triangle', 'Star'], 1, 'Rectangle!'),
      q('133c', 'pick-one', 'Ball is...?', ['Square', 'Star', 'Circle', 'Triangle'], 2, 'Circle!')
    ],
  },
  // ── Level 134: Count Numbers ──
  {
    id: 'lv134', levelNum: 134, title: 'Count Numbers', emoji: '🔢', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('134a', 'pick-one', 'Count: 🐝🐝🐝🐝', ['3', '4', '5', '6'], 1, '4 bees!'),
      q('134b', 'pick-one', 'Count: 🍇🍇🍇🍇🍇', ['6', '4', '7', '5'], 3, '5 grapes!'),
      q('134c', 'pick-one', 'Count: 🎁🎁🎁', ['4', '2', '3', '5'], 2, '3 gifts!')
    ],
  },
  // ── Level 135: Love ──
  {
    id: 'lv135', levelNum: 135, title: 'Love', emoji: '❤️', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('135a', 'pick-one', 'Who loves you?', ['Strangers', 'People who care for you', 'Nobody', 'Monsters'], 1, 'People who care!'),
      q('135b', 'true-false', 'Friends are nice', ['True', 'False'], 0, 'Yes! Friends are nice!'),
      q('135c', 'true-false', 'Sharing is good', ['True', 'False'], 0, 'Yes! Sharing is caring!')
    ],
  },
  // ── Level 136: Color Patterns ──
  {
    id: 'lv136', levelNum: 136, title: 'Color Patterns', emoji: '🎨', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
    reward: { stars: 1 },
    questions: [
      q('136a', 'pick-one', 'Red, Blue, Red, Blue, __?', ['Yellow', 'Red', 'Blue', 'Green'], 2, 'Blue!'),
      q('136b', 'pick-one', 'Green, Green, Red, Green, __?', ['Blue', 'Yellow', 'Green', 'Red'], 2, 'Green!'),
      q('136c', 'pick-one', '🟡🟢🟡🟢__?', ['🔵', '🟡', '🔴', '🟢'], 1, 'Yellow!')
    ],
  },
  // ── Level 137: Hard or Soft ──
  {
    id: 'lv137', levelNum: 137, title: 'Hard or Soft', emoji: '🪨', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('137a', 'pick-one', 'Which is hard?', ['🧽 Sponge', '🪨 Stone', '🍞 Bread', '🧸 Teddy'], 1, 'Stone is hard!'),
      q('137b', 'pick-one', 'Which is soft?', ['🪵 Wood', '🧸 Teddy', '🧱 Brick', '🪨 Rock'], 1, 'Teddy is soft!'),
      q('137c', 'pick-one', 'Pillow is...?', ['Hard', 'Heavy', 'Rough', 'Soft'], 3, 'Soft!')
    ],
  },
  // ── Level 138: Skip Counting ──
  {
    id: 'lv138', levelNum: 138, title: 'Skip Counting', emoji: '⏭️', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('138a', 'pick-one', '2, 4, 6, __?', ['7', '8', '9', '5'], 1, '8! (Skip by 2)'),
      q('138b', 'pick-one', '10, 20, 30, __?', ['40', '50', '25', '35'], 0, '40! (Skip by 10)'),
      q('138c', 'pick-one', '5, 10, 15, __?', ['20', '16', '18', '30'], 0, '20! (Skip by 5)')
    ],
  },
  // ── Level 139: Tasty Food ──
  {
    id: 'lv139', levelNum: 139, title: 'Tasty Food', emoji: '😋', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('139a', 'pick-one', 'Candy is...?', ['Sour', 'Bitter', 'Salty', 'Sweet'], 3, 'Sweet!'),
      q('139b', 'pick-one', 'Chocolate is...?', ['Salty', 'Sour', 'Sweet', 'Bitter'], 2, 'Sweet!'),
      q('139c', 'pick-one', 'Cake is...?', ['Sour', 'Bitter', 'Sweet', 'Salty'], 2, 'Sweet!')
    ],
  },
  // ── Level 140: Count Groups ──
  {
    id: 'lv140', levelNum: 140, title: 'Count Groups', emoji: '🔢', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('140a', 'pick-one', 'Count: 👟👟 = ?', ['1', '3', '2', '4'], 2, '2 shoes!'),
      q('140b', 'pick-one', 'Count: 🧤🧤 = ?', ['3', '1', '4', '2'], 3, '2 gloves!'),
      q('140c', 'pick-one', 'Count: 🍪🍪🍪 = ?', ['4', '2', '3', '5'], 2, '3 cookies!')
    ],
  },
  // ── Level 141: Animal Sounds ──
  {
    id: 'lv141', levelNum: 141, title: 'Animal Sounds', emoji: '🔊', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('141a', 'pick-one', 'Lion says...?', ['Quack', 'Moo', 'Baa', 'Roar'], 3, 'Roar!'),
      q('141b', 'pick-one', 'Frog says...?', ['Ribbit', 'Moo', 'Oink', 'Baa'], 0, 'Ribbit!'),
      q('141c', 'pick-one', 'Elephant makes loud sound', ['True', 'False'], 0, 'Yes! Loud!')
    ],
  },
  // ── Level 142: Touch and Feel ──
  {
    id: 'lv142', levelNum: 142, title: 'Touch and Feel', emoji: '🪨', area: 'shapes', areaLabel: 'Shapes', areaColor: '#10B981',
    reward: { stars: 1 },
    questions: [
      q('142a', 'pick-one', 'Glass is...?', ['Rough', 'Bumpy', 'Smooth', 'Scratchy'], 2, 'Glass is smooth!'),
      q('142b', 'pick-one', 'Sand is...?', ['Smooth', 'Soft', 'Rough', 'Hard'], 2, 'Sand is rough!'),
      q('142c', 'pick-one', 'Cotton is...?', ['Hard', 'Rough', 'Soft', 'Prickly'], 2, 'Cotton is soft!')
    ],
  },
  // ── Level 143: Story Math ──
  {
    id: 'lv143', levelNum: 143, title: 'Story Math', emoji: '📖', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('143a', 'pick-one', 'I have 2 🍎. You give me 2 🍎. Total?', ['3', '4', '5', '6'], 1, '2 + 2 = 4!'),
      q('143b', 'pick-one', '5 🐦 on tree. 2 fly away. How many left?', ['3', '2', '4', '5'], 0, '5 - 2 = 3!'),
      q('143c', 'pick-one', 'Mom gives 1 🍬. Dad gives 1 🍬. Total?', ['3', '1', '2', '4'], 2, '1 + 1 = 2!')
    ],
  },
  // ── Level 144: More or Less ──
  {
    id: 'lv144', levelNum: 144, title: 'More or Less', emoji: '⚖️', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('144a', 'pick-one', '6 is more than...?', ['7', '8', '4', '9'], 2, '4!'),
      q('144b', 'pick-one', '3 is less than...?', ['2', '1', '5', '0'], 2, '5!'),
      q('144c', 'pick-one', 'Which is more: 7 or 5?', ['5', '7'], 1, '7!')
    ],
  },
  // ── Level 145: Directions ──
  {
    id: 'lv145', levelNum: 145, title: 'Directions', emoji: '🧭', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('145a', 'pick-one', 'Birds go...?', ['Down', 'Left', 'Right', 'Up'], 3, 'Up!'),
      q('145b', 'pick-one', 'Rain comes...?', ['Up', 'Left', 'Right', 'Down'], 3, 'Down!'),
      q('145c', 'pick-one', 'Sun rises...?', ['Down', 'Up', 'Left', 'Right'], 1, 'Up!')
    ],
  },
  // ── Level 146: More Fruits ──
  {
    id: 'lv146', levelNum: 146, title: 'More Fruits', emoji: '🍉', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('146a', 'pick-one', 'Watermelon is...?', ['Small', 'Tiny', 'Big', 'Little'], 2, 'Watermelon is big!'),
      q('146b', 'pick-one', 'Cherry is...?', ['Big', 'Huge', 'Small', 'Large'], 2, 'Cherry is small!'),
      q('146c', 'pick-one', 'Orange is...?', ['Blue', 'Red', 'Orange', 'Green'], 2, 'Orange color!')
    ],
  },
  // ── Level 147: Making 10 ──
  {
    id: 'lv147', levelNum: 147, title: 'Making 10', emoji: '🔢', area: 'math', areaLabel: 'Math', areaColor: '#14B8A6',
    reward: { stars: 1 },
    questions: [
      q('147a', 'pick-one', '5 + 5 = ?', ['8', '9', '11', '10'], 3, '10!'),
      q('147b', 'pick-one', '6 + 4 = ?', ['11', '10', '9', '12'], 1, '10!'),
      q('147c', 'pick-one', '7 + 3 = ?', ['9', '11', '10', '12'], 2, '10!')
    ],
  },
  // ── Level 148: Wheels ──
  {
    id: 'lv148', levelNum: 148, title: 'Wheels', emoji: '🚗', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 1 },
    questions: [
      q('148a', 'pick-one', 'Car 🚗 has ___ wheels', ['5', '3', '4', '2'], 2, '4 wheels!'),
      q('148b', 'pick-one', 'Bicycle 🚲 has ___ wheels', ['2', '1', '3', '4'], 0, '2 wheels!'),
      q('148c', 'pick-one', 'Which has wheels?', ['Tree', 'House', 'Bus', 'Cloud'], 2, 'Bus!')
    ],
  },
  // ── Level 149: Number Names ──
  {
    id: 'lv149', levelNum: 149, title: 'Number Names', emoji: '📝', area: 'numbers', areaLabel: 'Numbers', areaColor: '#84CC16',
    reward: { stars: 1 },
    questions: [
      q('149a', 'pick-one', 'Spelling of 10 is...?', ['Ten', 'Tan', 'Tin', 'Ton'], 0, 'T-E-N is Ten!'),
      q('149b', 'pick-one', 'Read this: FIVE', ['5', '4', '3', '6'], 0, 'FIVE means 5!'),
      q('149c', 'pick-one', 'Spelling of 1 is...?', ['One', 'Won', 'On', 'Own'], 0, 'O-N-E is One!')
    ],
  },
  // ── Level 150: You Are Amazing ──
  {
    id: 'lv150', levelNum: 150, title: 'You Are Amazing', emoji: '🏆', area: 'evs', areaLabel: 'My World', areaColor: '#3B82F6',
    reward: { stars: 3 },
    questions: [
      q('150a', 'pick-one', 'You finished ___ levels!', ['100', '50', '150', '200'], 2, '150 levels!'),
      q('150b', 'true-false', 'You are amazing!', ['True', 'False'], 0, 'YES! You are!'),
      q('150c', 'pick-one', 'You are a...?', ['Nobody', 'Loser', 'Super Star', 'Bad kid'], 2, 'Super Star!'),
      q('150d', 'true-false', 'You can do anything!', ['True', 'False'], 0, 'Yes! You can!')
    ],
  },

];
