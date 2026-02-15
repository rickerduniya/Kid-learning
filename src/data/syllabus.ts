// ─── Types ─────────────────────────────────────────────────────────
export type Area =
  | 'letters'
  | 'reading'
  | 'numbers'
  | 'math'
  | 'shapes'
  | 'evs'
  | 'stories'
  | 'rhymes'
  | 'art'
  | 'gk'
  | 'emotions';

export interface SubjectStats {
  sessions: number;
  stars: number;
  seconds: number;
  lastPlayedISO?: string;
  completedItems?: string[]; // track mastered items
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface SyllabusItem {
  id: string;
  label: string;
  value?: string | number;
  image?: string;
  emoji?: string;
  audio?: string;
  clue?: string;
  category?: string;
}

// ─── English Letters (A–Z) with phonics & pictures ─────────────────
export const LETTERS: SyllabusItem[] = [
  { id: 'A', label: 'A', audio: 'A for Apple', emoji: '🍎', clue: 'Apple' },
  { id: 'B', label: 'B', audio: 'B for Ball', emoji: '⚽', clue: 'Ball' },
  { id: 'C', label: 'C', audio: 'C for Cat', emoji: '🐱', clue: 'Cat' },
  { id: 'D', label: 'D', audio: 'D for Dog', emoji: '🐶', clue: 'Dog' },
  { id: 'E', label: 'E', audio: 'E for Elephant', emoji: '🐘', clue: 'Elephant' },
  { id: 'F', label: 'F', audio: 'F for Fish', emoji: '🐟', clue: 'Fish' },
  { id: 'G', label: 'G', audio: 'G for Grapes', emoji: '🍇', clue: 'Grapes' },
  { id: 'H', label: 'H', audio: 'H for Hat', emoji: '🎩', clue: 'Hat' },
  { id: 'I', label: 'I', audio: 'I for Ice cream', emoji: '🍦', clue: 'Ice cream' },
  { id: 'J', label: 'J', audio: 'J for Jam', emoji: '🍯', clue: 'Jam' },
  { id: 'K', label: 'K', audio: 'K for Kite', emoji: '🪁', clue: 'Kite' },
  { id: 'L', label: 'L', audio: 'L for Lion', emoji: '🦁', clue: 'Lion' },
  { id: 'M', label: 'M', audio: 'M for Mango', emoji: '🥭', clue: 'Mango' },
  { id: 'N', label: 'N', audio: 'N for Nose', emoji: '👃', clue: 'Nose' },
  { id: 'O', label: 'O', audio: 'O for Orange', emoji: '🍊', clue: 'Orange' },
  { id: 'P', label: 'P', audio: 'P for Parrot', emoji: '🦜', clue: 'Parrot' },
  { id: 'Q', label: 'Q', audio: 'Q for Queen', emoji: '👸', clue: 'Queen' },
  { id: 'R', label: 'R', audio: 'R for Rabbit', emoji: '🐰', clue: 'Rabbit' },
  { id: 'S', label: 'S', audio: 'S for Sun', emoji: '☀️', clue: 'Sun' },
  { id: 'T', label: 'T', audio: 'T for Tiger', emoji: '🐯', clue: 'Tiger' },
  { id: 'U', label: 'U', audio: 'U for Umbrella', emoji: '☂️', clue: 'Umbrella' },
  { id: 'V', label: 'V', audio: 'V for Van', emoji: '🚐', clue: 'Van' },
  { id: 'W', label: 'W', audio: 'W for Watch', emoji: '⌚', clue: 'Watch' },
  { id: 'X', label: 'X', audio: 'X for Xylophone', emoji: '🎵', clue: 'Xylophone' },
  { id: 'Y', label: 'Y', audio: 'Y for Yak', emoji: '🐂', clue: 'Yak' },
  { id: 'Z', label: 'Z', audio: 'Z for Zebra', emoji: '🦓', clue: 'Zebra' },
];

// ─── Sight Words & CVC Words ──────────────────────────────────────
export const SIGHT_WORDS = [
  'the', 'and', 'is', 'it', 'in', 'to', 'a', 'I', 'my', 'we',
  'he', 'she', 'me', 'no', 'go', 'so', 'do', 'up', 'am', 'at',
  'on', 'an', 'if', 'or', 'us', 'big', 'can', 'did', 'get', 'had',
  'has', 'him', 'his', 'how', 'its', 'let', 'may', 'new', 'now', 'old',
  'our', 'out', 'own', 'run', 'say', 'too', 'use', 'was', 'way', 'who',
  // Advanced Sight Words
  'about', 'better', 'bring', 'carry', 'clean', 'cut', 'done', 'draw', 'drink', 'eight',
  'fall', 'far', 'full', 'got', 'grow', 'hold', 'hot', 'hurt', 'keep', 'kind',
  'laugh', 'light', 'long', 'much', 'myself', 'never', 'only', 'own', 'pick', 'seven',
  'shall', 'show', 'six', 'small', 'start', 'ten', 'today', 'together', 'try', 'warm',
];

export const CVC_WORDS: SyllabusItem[] = [
  { id: 'cat', label: 'CAT', audio: 'C. A. T. Cat', emoji: '🐱' },
  { id: 'bat', label: 'BAT', audio: 'B. A. T. Bat', emoji: '🦇' },
  { id: 'hat', label: 'HAT', audio: 'H. A. T. Hat', emoji: '🎩' },
  { id: 'mat', label: 'MAT', audio: 'M. A. T. Mat', emoji: '🧹' },
  { id: 'rat', label: 'RAT', audio: 'R. A. T. Rat', emoji: '🐀' },
  { id: 'dog', label: 'DOG', audio: 'D. O. G. Dog', emoji: '🐶' },
  { id: 'log', label: 'LOG', audio: 'L. O. G. Log', emoji: '🪵' },
  { id: 'fog', label: 'FOG', audio: 'F. O. G. Fog', emoji: '🌫️' },
  { id: 'hog', label: 'HOG', audio: 'H. O. G. Hog', emoji: '🐷' },
  { id: 'pen', label: 'PEN', audio: 'P. E. N. Pen', emoji: '🖊️' },
  { id: 'hen', label: 'HEN', audio: 'H. E. N. Hen', emoji: '🐔' },
  { id: 'ten', label: 'TEN', audio: 'T. E. N. Ten', emoji: '🔟' },
  { id: 'men', label: 'MEN', audio: 'M. E. N. Men', emoji: '👨' },
  { id: 'cup', label: 'CUP', audio: 'C. U. P. Cup', emoji: '☕' },
  { id: 'pup', label: 'PUP', audio: 'P. U. P. Pup', emoji: '🐕' },
  { id: 'sun', label: 'SUN', audio: 'S. U. N. Sun', emoji: '☀️' },
  { id: 'run', label: 'RUN', audio: 'R. U. N. Run', emoji: '🏃' },
  { id: 'fun', label: 'FUN', audio: 'F. U. N. Fun', emoji: '🎉' },
  { id: 'bun', label: 'BUN', audio: 'B. U. N. Bun', emoji: '🍞' },
  { id: 'pin', label: 'PIN', audio: 'P. I. N. Pin', emoji: '📌' },
  { id: 'bin', label: 'BIN', audio: 'B. I. N. Bin', emoji: '🗑️' },
  { id: 'fin', label: 'FIN', audio: 'F. I. N. Fin', emoji: '🦈' },
  { id: 'win', label: 'WIN', audio: 'W. I. N. Win', emoji: '🏆' },
  { id: 'tin', label: 'TIN', audio: 'T. I. N. Tin', emoji: '🥫' },
  // Advanced CVC & 4-Letter Words
  { id: 'frog', label: 'FROG', audio: 'F. R. O. G. Frog', emoji: '🐸' },
  { id: 'crab', label: 'CRAB', audio: 'C. R. A. B. Crab', emoji: '🦀' },
  { id: 'drum', label: 'DRUM', audio: 'D. R. U. M. Drum', emoji: '🥁' },
  { id: 'flag', label: 'FLAG', audio: 'F. L. A. G. Flag', emoji: '🚩' },
  { id: 'star', label: 'STAR', audio: 'S. T. A. R. Star', emoji: '⭐' },
  { id: 'moon', label: 'MOON', audio: 'M. O. O. N. Moon', emoji: '🌙' },
  { id: 'cake', label: 'CAKE', audio: 'C. A. K. E. Cake', emoji: '🎂' },
  { id: 'book', label: 'BOOK', audio: 'B. O. O. K. Book', emoji: '📖' },
  { id: 'tree', label: 'TREE', audio: 'T. R. E. E. Tree', emoji: '🌳' },
  { id: 'bird', label: 'BIRD', audio: 'B. I. R. D. Bird', emoji: '🐦' },
  { id: 'shop', label: 'SHOP', audio: 'S. H. O. P. Shop', emoji: '🏪' },
  { id: 'ball', label: 'BALL', audio: 'B. A. L. L. Ball', emoji: '⚽' },
  { id: 'doll', label: 'DOLL', audio: 'D. O. L. L. Doll', emoji: '🎎' },
  { id: 'duck', label: 'DUCK', audio: 'D. U. C. K. Duck', emoji: '🦆' },
  { id: 'fish', label: 'FISH', audio: 'F. I. S. H. Fish', emoji: '🐟' },
  { id: 'milk', label: 'MILK', audio: 'M. I. L. K. Milk', emoji: '🥛' },
  { id: 'nest', label: 'NEST', audio: 'N. E. S. T. Nest', emoji: '🪺' },
  { id: 'king', label: 'KING', audio: 'K. I. N. G. King', emoji: '🤴' },
  { id: 'ring', label: 'RING', audio: 'R. I. N. G. Ring', emoji: '💍' },
  { id: 'bear', label: 'BEAR', audio: 'B. E. A. R. Bear', emoji: '🐻' },
];

export const VOWELS = ['A', 'E', 'I', 'O', 'U'];
export const CONSONANTS = 'BCDFGHJKLMNPQRSTVWXYZ'.split('');

// ─── Numbers (1–50) ────────────────────────────────────────────────
export const NUMBERS = Array.from({ length: 100 }, (_, i) => i + 1).map(n => ({
  id: String(n),
  label: String(n),
  value: n,
  audio: String(n),
  clue: `Number ${n}`,
}));

export const NUMBER_NAMES: Record<number, string> = {
  1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five',
  6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine', 10: 'Ten',
  11: 'Eleven', 12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen', 15: 'Fifteen',
  16: 'Sixteen', 17: 'Seventeen', 18: 'Eighteen', 19: 'Nineteen', 20: 'Twenty',
};

// ─── Math ──────────────────────────────────────────────────────────
export interface MathProblem {
  id: string;
  a: number;
  b: number;
  op: '+' | '-';
  answer: number;
  visual: string; // emoji to show
}

export function generateMathProblems(count: number, maxNum: number, ops: Array<'+' | '-'>): MathProblem[] {
  const problems: MathProblem[] = [];
  const emojis = ['🍎', '⭐', '🌸', '🐟', '🎈', '🍪', '🦋', '🌻'];
  for (let i = 0; i < count; i++) {
    const op = ops[Math.floor(Math.random() * ops.length)];
    let a: number, b: number;
    if (op === '+') {
      a = Math.floor(Math.random() * maxNum) + 1;
      b = Math.floor(Math.random() * (maxNum - a)) + 1;
    } else {
      a = Math.floor(Math.random() * maxNum) + 2;
      b = Math.floor(Math.random() * (a - 1)) + 1;
    }
    problems.push({
      id: `${op}${a}${b}${i}`,
      a, b, op,
      answer: op === '+' ? a + b : a - b,
      visual: emojis[Math.floor(Math.random() * emojis.length)],
    });
  }
  return problems;
}

export const COMPARISON_PAIRS = [
  { id: 'c1', a: 5, b: 3, answer: 'bigger' as const },
  { id: 'c2', a: 2, b: 7, answer: 'smaller' as const },
  { id: 'c3', a: 9, b: 4, answer: 'bigger' as const },
  { id: 'c4', a: 1, b: 8, answer: 'smaller' as const },
  { id: 'c5', a: 6, b: 6, answer: 'equal' as const },
  { id: 'c6', a: 3, b: 10, answer: 'smaller' as const },
  { id: 'c7', a: 8, b: 2, answer: 'bigger' as const },
  { id: 'c8', a: 4, b: 4, answer: 'equal' as const },
];

export const PATTERNS = [
  { id: 'p1', seq: ['🔴', '🔵', '🔴', '🔵', '🔴'], answer: '🔵', options: ['🔴', '🔵', '🟢'] },
  { id: 'p2', seq: ['⭐', '🌙', '⭐', '🌙', '⭐'], answer: '🌙', options: ['⭐', '🌙', '☀️'] },
  { id: 'p3', seq: ['🍎', '🍎', '🍌', '🍎', '🍎'], answer: '🍌', options: ['🍎', '🍌', '🍇'] },
  { id: 'p4', seq: ['🐱', '🐶', '🐱', '🐶', '🐱'], answer: '🐶', options: ['🐱', '🐶', '🐰'] },
  { id: 'p5', seq: ['🟡', '🟢', '🟡', '🟢', '🟡'], answer: '🟢', options: ['🟡', '🟢', '🔴'] },
  { id: 'p6', seq: ['△', '○', '△', '○', '△'], answer: '○', options: ['△', '○', '□'] },
  { id: 'p7', seq: ['1', '2', '1', '2', '1'], answer: '2', options: ['1', '2', '3'] },
  { id: 'p8', seq: ['🌺', '🌺', '🌻', '🌺', '🌺'], answer: '🌻', options: ['🌺', '🌻', '🌹'] },
  // Advanced Patterns
  { id: 'p9', seq: ['🔴', '🔵', '🟢', '🔴', '🔵'], answer: '🟢', options: ['🔴', '🔵', '🟢'] },
  { id: 'p10', seq: ['A', 'B', 'C', 'A', 'B'], answer: 'C', options: ['A', 'B', 'C'] },
  { id: 'p11', seq: ['1', '2', '3', '1', '2'], answer: '3', options: ['1', '2', '3'] },
  { id: 'p12', seq: ['⬆️', '⬇️', '⬅️', '⬆️', '⬇️'], answer: '⬅️', options: ['⬅️', '➡️', '⬆️'] },
  { id: 'p13', seq: ['🍎', '🍌', '🍒', '🍎', '🍌'], answer: '🍒', options: ['🍎', '🍌', '🍒'] },
  { id: 'p14', seq: ['🐶', '🐱', '🐭', '🐶', '🐱'], answer: '🐭', options: ['🐶', '🐱', '🐭'] },
  { id: 'p15', seq: ['🌑', '🌓', '🌕', '🌑', '🌓'], answer: '🌕', options: ['🌑', '🌓', '🌕'] },
  { id: 'p16', seq: ['❄️', '💧', '☀️', '❄️', '💧'], answer: '☀️', options: ['❄️', '💧', '☀️'] },
  { id: 'p17', seq: ['🚗', 'Bus', '🚗', 'Bus', '🚗'], answer: 'Bus', options: ['🚗', 'Bus', '🚲'] },
  { id: 'p18', seq: ['👶', '👦', '👨', '👶', '👦'], answer: '👨', options: ['👶', '👦', '👨'] },
];

// ─── Shapes (Extended) ─────────────────────────────────────────────
export const SHAPES = [
  { id: 'circle', label: 'Circle', emoji: '⚫', realWorld: 'Wheel, Coin, Clock' },
  { id: 'square', label: 'Square', emoji: '⬛', realWorld: 'Window, Tile, Dice' },
  { id: 'triangle', label: 'Triangle', emoji: '🔺', realWorld: 'Roof, Pizza slice, Hanger' },
  { id: 'rectangle', label: 'Rectangle', emoji: '📱', realWorld: 'Door, Book, Phone' },
  { id: 'oval', label: 'Oval', emoji: '🥚', realWorld: 'Egg, Mirror, Spoon' },
  { id: 'star', label: 'Star', emoji: '⭐', realWorld: 'Badge, Cookie, Decoration' },
  { id: 'diamond', label: 'Diamond', emoji: '💎', realWorld: 'Kite, Playing card' },
  { id: 'heart', label: 'Heart', emoji: '❤️', realWorld: 'Card, Love symbol' },
  { id: 'crescent', label: 'Crescent', emoji: '🌙', realWorld: 'Moon at night' },
  { id: 'hexagon', label: 'Hexagon', emoji: '⬡', realWorld: 'Honeycomb, Nut/bolt' },
  { id: 'arrow', label: 'Arrow', emoji: '➡️', realWorld: 'Road sign, Direction' },
  { id: 'cross', label: 'Cross / Plus', emoji: '➕', realWorld: 'First aid, Hospital' },
  // Advanced 3D Shapes
  { id: 'cube', label: 'Cube', emoji: '🧊', realWorld: 'Ice cube, Box, Dice' },
  { id: 'sphere', label: 'Sphere', emoji: '⚽', realWorld: 'Ball, Planet, Marble' },
  { id: 'cone', label: 'Cone', emoji: '🍦', realWorld: 'Ice cream cone, Party hat' },
  { id: 'cylinder', label: 'Cylinder', emoji: '🛢️', realWorld: 'Can, Drum, Pipe' },
  { id: 'pyramid', label: 'Pyramid', emoji: '⛺', realWorld: 'Tent, Egypt pyramid' },
  { id: 'prism', label: 'Prism', emoji: '🏚️', realWorld: 'Roof, Tent' },
];

export const COLORS = [
  { id: 'red', label: 'Red', hex: '#EF4444', emoji: '🔴', things: 'Apple, Fire truck, Rose' },
  { id: 'blue', label: 'Blue', hex: '#3B82F6', emoji: '🔵', things: 'Sky, Ocean, Blueberry' },
  { id: 'green', label: 'Green', hex: '#22C55E', emoji: '🟢', things: 'Grass, Frog, Leaf' },
  { id: 'yellow', label: 'Yellow', hex: '#EAB308', emoji: '🟡', things: 'Banana, Sun, Lemon' },
  { id: 'orange', label: 'Orange', hex: '#F97316', emoji: '🟠', things: 'Orange fruit, Carrot' },
  { id: 'purple', label: 'Purple', hex: '#A855F7', emoji: '🟣', things: 'Grapes, Brinjal' },
  { id: 'pink', label: 'Pink', hex: '#EC4899', emoji: '🩷', things: 'Rose, Flamingo' },
  { id: 'brown', label: 'Brown', hex: '#92400E', emoji: '🟤', things: 'Chocolate, Tree trunk' },
  { id: 'black', label: 'Black', hex: '#111827', emoji: '⚫', things: 'Night sky, Crow' },
  { id: 'white', label: 'White', hex: '#F9FAFB', emoji: '⚪', things: 'Snow, Milk, Cloud' },
  { id: 'grey', label: 'Grey', hex: '#6B7280', emoji: '🩶', things: 'Elephant, Rock' },
  { id: 'golden', label: 'Golden', hex: '#D97706', emoji: '🥇', things: 'Medal, Crown, Wheat' },
  // Advanced Colors
  { id: 'teal', label: 'Teal', hex: '#14B8A6', emoji: '🟦', things: 'Peacock feather, Ocean' },
  { id: 'indigo', label: 'Indigo', hex: '#6366F1', emoji: '👖', things: 'Jeans, Night sky' },
  { id: 'violet', label: 'Violet', hex: '#8B5CF6', emoji: '🍆', things: 'Eggplant, Flower' },
  { id: 'maroon', label: 'Maroon', hex: '#9f1239', emoji: '🍷', things: 'Berry, Brick' },
  { id: 'olive', label: 'Olive', hex: '#84cc16', emoji: '🫒', things: 'Olive, Leaf' },
  { id: 'beige', label: 'Beige', hex: '#f5f5dc', emoji: '🏜️', things: 'Sand, Skin' },
  { id: 'navy', label: 'Navy', hex: '#1e3a8a', emoji: '👮', things: 'Uniform, Deep sea' },
  { id: 'coral', label: 'Coral', hex: '#ff7f50', emoji: '🪸', things: 'Coral, Flower' },
];

// ─── EVS (Environmental Science) ──────────────────────────────────
export const ANIMALS: SyllabusItem[] = [
  // Domestic
  { id: 'dog', label: 'Dog', emoji: '🐶', audio: 'Dog says Woof', category: 'domestic' },
  { id: 'cat', label: 'Cat', emoji: '🐱', audio: 'Cat says Meow', category: 'domestic' },
  { id: 'cow', label: 'Cow', emoji: '🐮', audio: 'Cow says Moo. Cow gives us milk.', category: 'domestic' },
  { id: 'horse', label: 'Horse', emoji: '🐴', audio: 'Horse says Neigh', category: 'domestic' },
  { id: 'goat', label: 'Goat', emoji: '🐐', audio: 'Goat says Meh', category: 'domestic' },
  { id: 'sheep', label: 'Sheep', emoji: '🐑', audio: 'Sheep says Baa. Sheep gives us wool.', category: 'domestic' },
  { id: 'hen', label: 'Hen', emoji: '🐔', audio: 'Hen says cluck cluck. Hen gives us eggs.', category: 'domestic' },
  { id: 'duck', label: 'Duck', emoji: '🦆', audio: 'Duck says Quack', category: 'domestic' },
  // Wild
  { id: 'lion', label: 'Lion', emoji: '🦁', audio: 'Lion roars. Lion is the king of jungle.', category: 'wild' },
  { id: 'tiger', label: 'Tiger', emoji: '🐯', audio: 'Tiger growls. Tiger has stripes.', category: 'wild' },
  { id: 'elephant', label: 'Elephant', emoji: '🐘', audio: 'Elephant trumpets. Elephant is very big.', category: 'wild' },
  { id: 'monkey', label: 'Monkey', emoji: '🐒', audio: 'Monkey loves bananas', category: 'wild' },
  { id: 'bear', label: 'Bear', emoji: '🐻', audio: 'Bear growls. Bear sleeps in winter.', category: 'wild' },
  { id: 'giraffe', label: 'Giraffe', emoji: '🦒', audio: 'Giraffe has a very long neck', category: 'wild' },
  { id: 'zebra', label: 'Zebra', emoji: '🦓', audio: 'Zebra has black and white stripes', category: 'wild' },
  { id: 'deer', label: 'Deer', emoji: '🦌', audio: 'Deer runs very fast', category: 'wild' },
  { id: 'crocodile', label: 'Crocodile', emoji: '🐊', audio: 'Crocodile lives in water', category: 'wild' },
  { id: 'fox', label: 'Fox', emoji: '🦊', audio: 'Fox is clever and sly', category: 'wild' },
  // Water
  { id: 'fish', label: 'Fish', emoji: '🐟', audio: 'Fish lives in water', category: 'water' },
  { id: 'whale', label: 'Whale', emoji: '🐋', audio: 'Whale is the biggest animal', category: 'water' },
  { id: 'dolphin', label: 'Dolphin', emoji: '🐬', audio: 'Dolphin is very smart', category: 'water' },
  { id: 'octopus', label: 'Octopus', emoji: '🐙', audio: 'Octopus has eight arms', category: 'water' },
  // Birds
  { id: 'parrot', label: 'Parrot', emoji: '🦜', audio: 'Parrot can talk', category: 'bird' },
  { id: 'eagle', label: 'Eagle', emoji: '🦅', audio: 'Eagle flies very high', category: 'bird' },
  { id: 'owl', label: 'Owl', emoji: '🦉', audio: 'Owl comes out at night', category: 'bird' },
  { id: 'peacock', label: 'Peacock', emoji: '🦚', audio: 'Peacock is the national bird of India', category: 'bird' },
  { id: 'penguin', label: 'Penguin', emoji: '🐧', audio: 'Penguin lives in cold places', category: 'bird' },
  // Insects
  { id: 'butterfly', label: 'Butterfly', emoji: '🦋', audio: 'Butterfly has beautiful wings', category: 'insect' },
  { id: 'bee', label: 'Bee', emoji: '🐝', audio: 'Bee makes honey', category: 'insect' },
  { id: 'ant', label: 'Ant', emoji: '🐜', audio: 'Ant is very hardworking', category: 'insect' },
  { id: 'ladybug', label: 'Ladybug', emoji: '🐞', audio: 'Ladybug has spots', category: 'insect' },
];

export const BODY_PARTS: SyllabusItem[] = [
  { id: 'head', label: 'Head', emoji: '🧠', audio: 'This is our head. We think with our brain.' },
  { id: 'eyes', label: 'Eyes', emoji: '👀', audio: 'We have two eyes. We see with our eyes.' },
  { id: 'ears', label: 'Ears', emoji: '👂', audio: 'We have two ears. We hear with our ears.' },
  { id: 'nose', label: 'Nose', emoji: '👃', audio: 'We have one nose. We smell with our nose.' },
  { id: 'mouth', label: 'Mouth', emoji: '👄', audio: 'We eat and talk with our mouth.' },
  { id: 'teeth', label: 'Teeth', emoji: '🦷', audio: 'We chew food with our teeth. Brush your teeth every day.' },
  { id: 'hands', label: 'Hands', emoji: '🤲', audio: 'We have two hands. We hold things with our hands.' },
  { id: 'fingers', label: 'Fingers', emoji: '🖐️', audio: 'We have ten fingers. Five on each hand.' },
  { id: 'legs', label: 'Legs', emoji: '🦵', audio: 'We have two legs. We walk and run with our legs.' },
  { id: 'feet', label: 'Feet', emoji: '🦶', audio: 'We have two feet. We stand on our feet.' },
  { id: 'heart', label: 'Heart', emoji: '❤️', audio: 'Our heart pumps blood. It beats all the time.' },
  { id: 'stomach', label: 'Stomach', emoji: '🫃', audio: 'Food goes to our stomach.' },
];

export const SEASONS: SyllabusItem[] = [
  { id: 'summer', label: 'Summer', emoji: '☀️', audio: 'Summer is very hot. We eat ice cream and drink water.' },
  { id: 'rainy', label: 'Rainy Season', emoji: '🌧️', audio: 'Rain comes in monsoon. We use umbrellas.' },
  { id: 'winter', label: 'Winter', emoji: '❄️', audio: 'Winter is cold. We wear sweaters and jackets.' },
  { id: 'spring', label: 'Spring', emoji: '🌸', audio: 'Spring has beautiful flowers. Birds sing happily.' },
  { id: 'autumn', label: 'Autumn', emoji: '🍂', audio: 'In autumn, leaves fall from trees.' },
];

export const SOLAR_SYSTEM: SyllabusItem[] = [
  { id: 'sun', label: 'Sun', emoji: '☀️', audio: 'The Sun gives us light and heat.' },
  { id: 'mercury', label: 'Mercury', emoji: '🌑', audio: 'Mercury is the closest planet to the Sun.' },
  { id: 'venus', label: 'Venus', emoji: '🌕', audio: 'Venus is the hottest planet.' },
  { id: 'earth', label: 'Earth', emoji: '🌍', audio: 'We live on Earth. It has water and life.' },
  { id: 'moon', label: 'Moon', emoji: '🌙', audio: 'The Moon goes around the Earth at night.' },
  { id: 'mars', label: 'Mars', emoji: '🪐', audio: 'Mars is the Red Planet.' },
  { id: 'jupiter', label: 'Jupiter', emoji: '🟠', audio: 'Jupiter is the biggest planet.' },
  { id: 'saturn', label: 'Saturn', emoji: '🪐', audio: 'Saturn has beautiful rings.' },
  { id: 'star', label: 'Stars', emoji: '✨', audio: 'Stars twinkle in the night sky.' },
  { id: 'astronaut', label: 'Astronaut', emoji: '👩‍🚀', audio: 'Astronauts go to space in rockets.' },
];

export const TRANSPORT: SyllabusItem[] = [
  { id: 'car', label: 'Car', emoji: '🚗', audio: 'Car goes on the road', category: 'road' },
  { id: 'bus', label: 'Bus', emoji: '🚌', audio: 'Bus carries many people', category: 'road' },
  { id: 'bicycle', label: 'Bicycle', emoji: '🚲', audio: 'Bicycle has two wheels', category: 'road' },
  { id: 'autorickshaw', label: 'Auto Rickshaw', emoji: '🛺', audio: 'Auto rickshaw has three wheels', category: 'road' },
  { id: 'train', label: 'Train', emoji: '🚂', audio: 'Train runs on the track. Choo choo!', category: 'rail' },
  { id: 'airplane', label: 'Airplane', emoji: '✈️', audio: 'Airplane flies in the sky', category: 'air' },
  { id: 'helicopter', label: 'Helicopter', emoji: '🚁', audio: 'Helicopter can go up and down', category: 'air' },
  { id: 'ship', label: 'Ship', emoji: '🚢', audio: 'Ship sails on the sea', category: 'water' },
  { id: 'boat', label: 'Boat', emoji: '⛵', audio: 'Boat is small and sails on water', category: 'water' },
  { id: 'ambulance', label: 'Ambulance', emoji: '🚑', audio: 'Ambulance takes sick people to hospital', category: 'road' },
  { id: 'firetruck', label: 'Fire Truck', emoji: '🚒', audio: 'Fire truck puts out fire', category: 'road' },
  { id: 'rocket', label: 'Rocket', emoji: '🚀', audio: 'Rocket goes to space', category: 'air' },
];

export const COMMUNITY_HELPERS: SyllabusItem[] = [
  { id: 'doctor', label: 'Doctor', emoji: '👨‍⚕️', audio: 'Doctor helps sick people get better.' },
  { id: 'teacher', label: 'Teacher', emoji: '👩‍🏫', audio: 'Teacher teaches us in school.' },
  { id: 'police', label: 'Police Officer', emoji: '👮', audio: 'Police officer keeps us safe.' },
  { id: 'firefighter', label: 'Firefighter', emoji: '🧑‍🚒', audio: 'Firefighter puts out fires.' },
  { id: 'farmer', label: 'Farmer', emoji: '👨‍🌾', audio: 'Farmer grows food for us.' },
  { id: 'chef', label: 'Chef', emoji: '👨‍🍳', audio: 'Chef cooks delicious food.' },
  { id: 'pilot', label: 'Pilot', emoji: '👨‍✈️', audio: 'Pilot flies the airplane.' },
  { id: 'postman', label: 'Postman', emoji: '📮', audio: 'Postman delivers our letters.' },
  { id: 'dentist', label: 'Dentist', emoji: '🦷', audio: 'Dentist takes care of our teeth.' },
  { id: 'soldier', label: 'Soldier', emoji: '💂', audio: 'Soldier protects our country.' },
];

export const PLANTS: SyllabusItem[] = [
  { id: 'tree', label: 'Tree', emoji: '🌳', audio: 'Trees give us oxygen, shade and fruits.' },
  { id: 'flower', label: 'Flower', emoji: '🌺', audio: 'Flowers are beautiful and colorful.' },
  { id: 'rose', label: 'Rose', emoji: '🌹', audio: 'Rose is the queen of flowers.' },
  { id: 'sunflower', label: 'Sunflower', emoji: '🌻', audio: 'Sunflower faces the sun.' },
  { id: 'tulip', label: 'Tulip', emoji: '🌷', audio: 'Tulip comes in many colors.' },
  { id: 'leaf', label: 'Leaf', emoji: '🍃', audio: 'Leaves are green. They make food for the plant.' },
  { id: 'seed', label: 'Seed', emoji: '🌱', audio: 'Seeds grow into plants.' },
  { id: 'cactus', label: 'Cactus', emoji: '🌵', audio: 'Cactus grows in the desert.' },
];

// ─── Stories ───────────────────────────────────────────────────────
export interface Story {
  id: string;
  title: string;
  text: string;
  emoji: string;
  moral: string;
  questions: Array<{ q: string; options: string[]; answer: number }>;
}

export const STORIES: Story[] = [
  {
    id: 'helpful_cat', title: 'The Helpful Cat', emoji: '🐱',
    text: 'A little cat saw a puppy stuck in a small box. The cat called for help. Together they opened the box. The puppy smiled. Helping friends feels good.',
    moral: 'Always help others.',
    questions: [
      { q: 'Who was stuck?', options: ['Cat', 'Puppy', 'Bird'], answer: 1 },
      { q: 'What did the cat do?', options: ['Ran away', 'Called for help', 'Slept'], answer: 1 },
    ],
  },
  {
    id: 'clean_hands', title: 'Clean Hands', emoji: '🧼',
    text: 'Before eating, Mia washed her hands with soap. After playing, she washed again. Clean hands keep germs away. Mia stayed healthy and happy.',
    moral: 'Always wash your hands.',
    questions: [
      { q: 'When did Mia wash hands?', options: ['Before eating', 'Before sleeping', 'Never'], answer: 0 },
      { q: 'Why wash hands?', options: ['For fun', 'Keep germs away', 'Teacher said'], answer: 1 },
    ],
  },
  {
    id: 'share_toys', title: 'Share the Toys', emoji: '🧸',
    text: 'Two friends wanted the same ball. They took turns. Both got to play. Sharing makes games fun. Everyone was happy.',
    moral: 'Sharing is caring.',
    questions: [
      { q: 'What did they share?', options: ['Food', 'Ball', 'Book'], answer: 1 },
      { q: 'What happened when they shared?', options: ['They fought', 'Everyone was happy', 'Nobody played'], answer: 1 },
    ],
  },
  {
    id: 'kind_elephant', title: 'The Kind Elephant', emoji: '🐘',
    text: 'A big elephant saw a small bird crying. The bird had lost its nest. The elephant gently lifted the bird to a tree. The bird found its family. Kindness makes everyone smile.',
    moral: 'Be kind to everyone, big or small.',
    questions: [
      { q: 'Who was crying?', options: ['Elephant', 'Bird', 'Monkey'], answer: 1 },
      { q: 'What did the elephant do?', options: ['Walked away', 'Lifted the bird to a tree', 'Ate the nest'], answer: 1 },
    ],
  },
  {
    id: 'truthful_rani', title: 'Truthful Rani', emoji: '👧',
    text: 'Rani broke a glass by mistake. She was scared. But she told her mother the truth. Her mother smiled and said, "Thank you for being honest." Rani felt proud.',
    moral: 'Always tell the truth.',
    questions: [
      { q: 'What did Rani break?', options: ['A toy', 'A glass', 'A book'], answer: 1 },
      { q: 'Did Rani tell the truth?', options: ['Yes', 'No', 'She hid'], answer: 0 },
    ],
  },
  {
    id: 'ant_grasshopper', title: 'The Ant and the Grasshopper', emoji: '🐜',
    text: 'An ant worked hard all summer. It saved food. A grasshopper played and sang. When winter came, the ant had food. The grasshopper was hungry. Hard work pays off.',
    moral: 'Work hard and save for the future.',
    questions: [
      { q: 'Who worked hard?', options: ['Grasshopper', 'Ant', 'Bee'], answer: 1 },
      { q: 'Who had food in winter?', options: ['Grasshopper', 'Ant', 'Both'], answer: 1 },
    ],
  },
  {
    id: 'magic_word', title: 'The Magic Words', emoji: '✨',
    text: 'Rohan learned three magic words: Please, Thank You, and Sorry. When he said "Please," people helped him. When he said "Thank you," people smiled. When he said "Sorry," friends forgave him. Good manners are like magic!',
    moral: 'Use good manners — please, thank you, sorry.',
    questions: [
      { q: 'How many magic words?', options: ['Two', 'Three', 'Four'], answer: 1 },
      { q: 'What happened when he used them?', options: ['People got angry', 'People were happy', 'Nothing'], answer: 1 },
    ],
  },
  {
    id: 'thirsty_crow', title: 'The Thirsty Crow', emoji: '🐦‍⬛',
    text: 'A crow was very thirsty. He found a pot with a little water at the bottom. He could not reach it. The clever crow dropped small stones into the pot one by one. The water rose up. The crow drank the water happily.',
    moral: 'Think before you act. There is always a way.',
    questions: [
      { q: 'What did the crow want?', options: ['Food', 'Water', 'A nest'], answer: 1 },
      { q: 'What did the crow put in the pot?', options: ['Stones', 'Sand', 'Leaves'], answer: 0 },
    ],
  },
  {
    id: 'bunny_garden', title: 'Bunny\'s Garden', emoji: '🐰',
    text: 'Bunny planted a seed in the garden. Every day he gave it water. He waited patiently. After many days, a beautiful flower bloomed. Bunny learned that patience brings wonderful things.',
    moral: 'Be patient. Good things take time.',
    questions: [
      { q: 'What did Bunny plant?', options: ['A tree', 'A seed', 'A stone'], answer: 1 },
      { q: 'What grew from the seed?', options: ['A fruit', 'A flower', 'A weed'], answer: 1 },
    ],
  },
  {
    id: 'lion_mouse', title: 'The Lion and the Mouse', emoji: '🦁',
    text: 'A small mouse woke up a sleeping lion. The lion let the mouse go. Later, the lion was caught in a net. The tiny mouse chewed the ropes and freed the lion. Even the smallest friend can be a big help.',
    moral: 'No one is too small to help.',
    questions: [
      { q: 'Who was caught in a net?', options: ['Mouse', 'Lion', 'Cat'], answer: 1 },
      { q: 'Who saved the lion?', options: ['Elephant', 'Mouse', 'Tiger'], answer: 1 },
    ],
  },
];

// ─── Rhymes ────────────────────────────────────────────────────────
export interface Rhyme {
  id: string;
  title: string;
  emoji: string;
  lines: string[];
  fillBlanks: Array<{ line: string; blank: string; options: string[] }>;
}

export const RHYMES: Rhyme[] = [
  {
    id: 'twinkle', title: 'Twinkle Twinkle', emoji: '⭐',
    lines: ['Twinkle, twinkle, little star,', 'How I wonder what you are!', 'Up above the world so high,', 'Like a diamond in the sky.'],
    fillBlanks: [{ line: 'Twinkle, twinkle, little ___', blank: 'star', options: ['star', 'car', 'bar'] }],
  },
  {
    id: 'baa_baa', title: 'Baa Baa Black Sheep', emoji: '🐑',
    lines: ['Baa, baa, black sheep,', 'Have you any wool?', 'Yes sir, yes sir,', 'Three bags full.'],
    fillBlanks: [{ line: 'Have you any ___?', blank: 'wool', options: ['wool', 'food', 'milk'] }],
  },
  {
    id: 'humpty', title: 'Humpty Dumpty', emoji: '🥚',
    lines: ['Humpty Dumpty sat on a wall,', 'Humpty Dumpty had a great fall.', 'All the king\'s horses and all the king\'s men,', 'Couldn\'t put Humpty together again.'],
    fillBlanks: [{ line: 'Humpty Dumpty sat on a ___', blank: 'wall', options: ['wall', 'ball', 'tall'] }],
  },
  {
    id: 'jack_jill', title: 'Jack and Jill', emoji: '⛰️',
    lines: ['Jack and Jill went up the hill,', 'To fetch a pail of water.', 'Jack fell down and broke his crown,', 'And Jill came tumbling after.'],
    fillBlanks: [{ line: 'Jack and Jill went up the ___', blank: 'hill', options: ['hill', 'mill', 'fill'] }],
  },
  {
    id: 'rain_rain', title: 'Rain Rain Go Away', emoji: '🌧️',
    lines: ['Rain, rain, go away,', 'Come again another day.', 'Little Johnny wants to play,', 'Rain, rain, go away.'],
    fillBlanks: [{ line: 'Come again another ___', blank: 'day', options: ['day', 'way', 'play'] }],
  },
  {
    id: 'mary_lamb', title: 'Mary Had a Little Lamb', emoji: '🐑',
    lines: ['Mary had a little lamb,', 'Its fleece was white as snow.', 'And everywhere that Mary went,', 'The lamb was sure to go.'],
    fillBlanks: [{ line: 'Its fleece was white as ___', blank: 'snow', options: ['snow', 'show', 'glow'] }],
  },
  {
    id: 'wheels_bus', title: 'Wheels on the Bus', emoji: '🚌',
    lines: ['The wheels on the bus go round and round,', 'Round and round, round and round.', 'The wheels on the bus go round and round,', 'All through the town.'],
    fillBlanks: [{ line: 'The wheels on the bus go round and ___', blank: 'round', options: ['round', 'sound', 'ground'] }],
  },
  {
    id: 'old_macdonald', title: 'Old MacDonald', emoji: '👨‍🌾',
    lines: ['Old MacDonald had a farm, E-I-E-I-O!', 'And on his farm he had a cow, E-I-E-I-O!', 'With a moo-moo here and a moo-moo there,', 'Here a moo, there a moo, everywhere a moo-moo!'],
    fillBlanks: [{ line: 'Old MacDonald had a ___', blank: 'farm', options: ['farm', 'car', 'park'] }],
  },
  {
    id: 'itsy_bitsy', title: 'Itsy Bitsy Spider', emoji: '🕷️',
    lines: ['The itsy bitsy spider climbed up the water spout,', 'Down came the rain and washed the spider out.', 'Out came the sun and dried up all the rain,', 'And the itsy bitsy spider climbed up the spout again.'],
    fillBlanks: [{ line: 'Down came the ___ and washed the spider out', blank: 'rain', options: ['rain', 'train', 'pain'] }],
  },
  {
    id: 'johny_johny', title: 'Johny Johny Yes Papa', emoji: '👶',
    lines: ['Johny, Johny, Yes, Papa?', 'Eating sugar? No, Papa!', 'Telling lies? No, Papa!', 'Open your mouth, Ha ha ha!'],
    fillBlanks: [{ line: 'Eating ___? No, Papa!', blank: 'sugar', options: ['sugar', 'water', 'food'] }],
  },
];

// ─── GK (General Knowledge) ──────────────────────────────────────
export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const FRUITS: SyllabusItem[] = [
  { id: 'apple', label: 'Apple', emoji: '🍎', audio: 'Apple is red and sweet' },
  { id: 'banana', label: 'Banana', emoji: '🍌', audio: 'Banana is yellow and long' },
  { id: 'orange', label: 'Orange', emoji: '🍊', audio: 'Orange is round and juicy' },
  { id: 'grapes', label: 'Grapes', emoji: '🍇', audio: 'Grapes grow in bunches' },
  { id: 'mango', label: 'Mango', emoji: '🥭', audio: 'Mango is the king of fruits' },
  { id: 'watermelon', label: 'Watermelon', emoji: '🍉', audio: 'Watermelon is big and green' },
  { id: 'strawberry', label: 'Strawberry', emoji: '🍓', audio: 'Strawberry is small and red' },
  { id: 'pineapple', label: 'Pineapple', emoji: '🍍', audio: 'Pineapple has a spiky skin' },
  { id: 'cherry', label: 'Cherry', emoji: '🍒', audio: 'Cherry is tiny and red' },
  { id: 'coconut', label: 'Coconut', emoji: '🥥', audio: 'Coconut has water inside' },
  { id: 'peach', label: 'Peach', emoji: '🍑', audio: 'Peach is soft and sweet' },
  { id: 'lemon', label: 'Lemon', emoji: '🍋', audio: 'Lemon is sour and yellow' },
  // Advanced Fruits
  { id: 'kiwi', label: 'Kiwi', emoji: '🥝', audio: 'Kiwi is brown outside and green inside' },
  { id: 'avocado', label: 'Avocado', emoji: '🥑', audio: 'Avocado has a big seed' },
  { id: 'pear', label: 'Pear', emoji: '🍐', audio: 'Pear is sweet and juicy' },
  { id: 'plum', label: 'Plum', emoji: '🫐', audio: 'Plum is purple and sweet' },
  { id: 'fig', label: 'Fig', emoji: 'বিহার', audio: 'Fig is sweet and chewy' }, // Note: Fig emoji might be rare, using closest
  { id: 'pomegranate', label: 'Pomegranate', emoji: '🍎', audio: 'Pomegranate has many red seeds' }, // reusing Apple/Red emoji if no pomegranate
  { id: 'melon', label: 'Melon', emoji: '🍈', audio: 'Melon is sweet and green' },
  { id: 'olive', label: 'Olive', emoji: '🫒', audio: 'Olive grows on trees' },
  { id: 'blueberry', label: 'Blueberry', emoji: '🫐', audio: 'Blueberry is small and blue' },
  { id: 'raspberry', label: 'Raspberry', emoji: '🍇', audio: 'Raspberry is red and bumpy' },
];

export const VEGETABLES: SyllabusItem[] = [
  { id: 'carrot', label: 'Carrot', emoji: '🥕', audio: 'Carrot is orange and crunchy' },
  { id: 'potato', label: 'Potato', emoji: '🥔', audio: 'Potato grows under the ground' },
  { id: 'tomato', label: 'Tomato', emoji: '🍅', audio: 'Tomato is red and round' },
  { id: 'onion', label: 'Onion', emoji: '🧅', audio: 'Onion can make you cry' },
  { id: 'corn', label: 'Corn', emoji: '🌽', audio: 'Corn is yellow' },
  { id: 'broccoli', label: 'Broccoli', emoji: '🥦', audio: 'Broccoli is green and healthy' },
  { id: 'peas', label: 'Peas', emoji: '🫛', audio: 'Peas are small and green' },
  { id: 'chili', label: 'Chili', emoji: '🌶️', audio: 'Chili is very spicy' },
  { id: 'garlic', label: 'Garlic', emoji: '🧄', audio: 'Garlic has a strong smell' },
  { id: 'mushroom', label: 'Mushroom', emoji: '🍄', audio: 'Mushroom grows in damp places' },
  { id: 'eggplant', label: 'Brinjal', emoji: '🍆', audio: 'Brinjal is purple' },
  { id: 'cucumber', label: 'Cucumber', emoji: '🥒', audio: 'Cucumber is cool and green' },
  // Advanced Vegetables
  { id: 'spinach', label: 'Spinach', emoji: 'Leafy', audio: 'Spinach makes you strong' },
  { id: 'cabbage', label: 'Cabbage', emoji: '🥬', audio: 'Cabbage has many leaves' },
  { id: 'cauliflower', label: 'Cauliflower', emoji: '🥦', audio: 'Cauliflower looks like a white flower' },
  { id: 'capsicum', label: 'Capsicum', emoji: '🫑', audio: 'Capsicum comes in green, red and yellow' },
  { id: 'beetroot', label: 'Beetroot', emoji: '🍠', audio: 'Beetroot is dark red' },
  { id: 'radish', label: 'Radish', emoji: '🥕', audio: 'Radish is white and crunchy' },
  { id: 'ginger', label: 'Ginger', emoji: '🫚', audio: 'Ginger is good for health' },
  { id: 'pumpkin', label: 'Pumpkin', emoji: '🎃', audio: 'Pumpkin is big and orange' },
  { id: 'sweet_potato', label: 'Sweet Potato', emoji: '🍠', audio: 'Sweet potato is sweet' },
  { id: 'lettuce', label: 'Lettuce', emoji: '🥬', audio: 'Lettuce is used in salads' },
];

export const OPPOSITES: Array<{ id: string; a: string; b: string; emojiA: string; emojiB: string }> = [
  { id: 'big_small', a: 'Big', b: 'Small', emojiA: '🐘', emojiB: '🐜' },
  { id: 'hot_cold', a: 'Hot', b: 'Cold', emojiA: '🔥', emojiB: '🧊' },
  { id: 'happy_sad', a: 'Happy', b: 'Sad', emojiA: '😊', emojiB: '😢' },
  { id: 'up_down', a: 'Up', b: 'Down', emojiA: '⬆️', emojiB: '⬇️' },
  { id: 'fast_slow', a: 'Fast', b: 'Slow', emojiA: '🐇', emojiB: '🐢' },
  { id: 'day_night', a: 'Day', b: 'Night', emojiA: '☀️', emojiB: '🌙' },
  { id: 'open_close', a: 'Open', b: 'Close', emojiA: '📖', emojiB: '📕' },
  { id: 'tall_short', a: 'Tall', b: 'Short', emojiA: '🦒', emojiB: '🐁' },
  { id: 'light_heavy', a: 'Light', b: 'Heavy', emojiA: '🪶', emojiB: '🏋️' },
  { id: 'full_empty', a: 'Full', b: 'Empty', emojiA: '🥛', emojiB: '🫙' },
  // Advanced Opposites
  { id: 'wet_dry', a: 'Wet', b: 'Dry', emojiA: '💧', emojiB: '🌵' },
  { id: 'hard_soft', a: 'Hard', b: 'Soft', emojiA: '🪨', emojiB: '🧸' },
  { id: 'loud_quiet', a: 'Loud', b: 'Quiet', emojiA: '📢', emojiB: '🤫' },
  { id: 'clean_dirty', a: 'Clean', b: 'Dirty', emojiA: '✨', emojiB: '💩' },
  { id: 'thick_thin', a: 'Thick', b: 'Thin', emojiA: '📚', emojiB: '📄' },
  { id: 'near_far', a: 'Near', b: 'Far', emojiA: '🏠', emojiB: '🏔️' },
  { id: 'push_pull', a: 'Push', b: 'Pull', emojiA: '👉', emojiB: '🪢' },
  { id: 'float_sink', a: 'Float', b: 'Sink', emojiA: '⛵', emojiB: '⚓' },
  { id: 'rough_smooth', a: 'Rough', b: 'Smooth', emojiA: '🍍', emojiB: '🍎' },
  { id: 'left_right', a: 'Left', b: 'Right', emojiA: '⬅️', emojiB: '➡️' },
];

export const GOOD_HABITS: SyllabusItem[] = [
  { id: 'brush', label: 'Brush Teeth', emoji: '🪥', audio: 'Brush your teeth morning and night.' },
  { id: 'bath', label: 'Take Bath', emoji: '🛁', audio: 'Take a bath every day to stay clean.' },
  { id: 'wash_hands', label: 'Wash Hands', emoji: '🧼', audio: 'Wash hands before eating and after playing.' },
  { id: 'early_rise', label: 'Wake Up Early', emoji: '⏰', audio: 'Early to bed, early to rise makes you healthy.' },
  { id: 'eat_veggies', label: 'Eat Vegetables', emoji: '🥗', audio: 'Eat fruits and vegetables to stay strong.' },
  { id: 'exercise', label: 'Exercise', emoji: '🏃', audio: 'Play and exercise to keep your body fit.' },
  { id: 'tidy', label: 'Keep Things Tidy', emoji: '🧹', audio: 'Keep your room and toys clean and tidy.' },
  { id: 'drink_water', label: 'Drink Water', emoji: '💧', audio: 'Drink lots of water every day.' },
  { id: 'be_polite', label: 'Be Polite', emoji: '🙏', audio: 'Say please, thank you, and sorry.' },
  { id: 'read_books', label: 'Read Books', emoji: '📚', audio: 'Reading books makes you smart.' },
];

// ─── Emotions & Life Skills ───────────────────────────────────────
export const EMOTIONS = [
  { id: 'happy', label: 'Happy', emoji: '😊', audio: 'I feel happy when I play with friends.' },
  { id: 'sad', label: 'Sad', emoji: '😢', audio: 'I feel sad when someone is mean.' },
  { id: 'angry', label: 'Angry', emoji: '😠', audio: 'I feel angry but I can take deep breaths.' },
  { id: 'scared', label: 'Scared', emoji: '😨', audio: 'I feel scared but I can ask for help.' },
  { id: 'surprised', label: 'Surprised', emoji: '😲', audio: 'Surprise! Something unexpected happened.' },
  { id: 'excited', label: 'Excited', emoji: '🤩', audio: 'I feel excited about going to a party.' },
  { id: 'shy', label: 'Shy', emoji: '😊', audio: 'I feel shy meeting new people. It is okay.' },
  { id: 'proud', label: 'Proud', emoji: '😤', audio: 'I feel proud when I do something good.' },
  { id: 'tired', label: 'Tired', emoji: '😴', audio: 'I feel tired. I should rest.' },
  { id: 'loved', label: 'Loved', emoji: '🥰', audio: 'I feel loved by my family.' },
];

export const SAFETY_RULES: SyllabusItem[] = [
  { id: 'stranger', label: 'Don\'t go with strangers', emoji: '🚫', audio: 'Never go with a stranger. Tell your parent.' },
  { id: 'fire', label: 'Don\'t play with fire', emoji: '🔥', audio: 'Fire is dangerous. Never play with matches.' },
  { id: 'road', label: 'Look both ways', emoji: '🚦', audio: 'Look left and right before crossing the road.' },
  { id: 'medicine', label: 'Don\'t eat unknown things', emoji: '💊', audio: 'Never eat medicine or unknown things without asking.' },
  { id: 'water', label: 'Be careful near water', emoji: '🏊', audio: 'Always be with an adult near water.' },
  { id: 'helmet', label: 'Wear helmet', emoji: '⛑️', audio: 'Wear a helmet when riding a bicycle.' },
  { id: 'seatbelt', label: 'Wear seatbelt', emoji: '🪢', audio: 'Always wear your seatbelt in the car.' },
  { id: 'phone', label: 'Know your parents\' phone number', emoji: '📞', audio: 'Remember your parents phone number.' },
];

// ─── Areas (Home screen tiles) ────────────────────────────────────
export const AREAS: Array<{ area: Area; title: string; subtitle: string; color: string; emoji: string; image?: string }> = [
  { area: 'letters', title: 'ABC Phonics', subtitle: 'Letters & sounds', color: '#FACC15', emoji: '🔤', image: '/images/categories/letters.png' },
  { area: 'reading', title: 'Reading', subtitle: 'Words & sentences', color: '#F472B6', emoji: '📖', image: '/images/categories/reading.png' },
  { area: 'numbers', title: 'Numbers', subtitle: 'Count 1 to 50', color: '#84CC16', emoji: '🔢', image: '/images/categories/numbers.png' },
  { area: 'math', title: 'Math Fun', subtitle: 'Add, subtract, patterns', color: '#14B8A6', emoji: '➕', image: '/images/categories/math.png' },
  { area: 'shapes', title: 'Shapes & Colors', subtitle: 'Find & match', color: '#10B981', emoji: '🔷', image: '/images/categories/shapes.png' },
  { area: 'evs', title: 'My World', subtitle: 'Animals, plants & more', color: '#3B82F6', emoji: '🌍', image: '/images/categories/evs.png' },
  { area: 'stories', title: 'Story Time', subtitle: 'Listen & answer', color: '#FB923C', emoji: '📚', image: '/images/categories/stories.png' },
  { area: 'rhymes', title: 'Rhymes', subtitle: 'Sing along!', color: '#8B5CF6', emoji: '🎵', image: '/images/categories/rhymes.png' },
  { area: 'art', title: 'Draw & Trace', subtitle: 'Letters & numbers', color: '#EC4899', emoji: '✏️', image: '/images/categories/art.png' },
  { area: 'gk', title: 'Smart Kids', subtitle: 'Days, fruits & more', color: '#06B6D4', emoji: '🧠', image: '/images/categories/gk.png' },
  { area: 'emotions', title: 'Feelings', subtitle: 'Emotions & safety', color: '#2DD4BF', emoji: '💖', image: '/images/categories/emotions.png' },
];
