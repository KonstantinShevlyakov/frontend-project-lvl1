import random from '../randomizer.js';

const announcement = 'Answer "yes" if the number is even, otherwise answer "no".';
const questions = [];
const correctResults = [];
const rounds = 3;
for (let i = 0; i < rounds; i += 1) {
  const num = random(0, 100);
  questions.push(num);
  correctResults.push((num % 2 === 0) ? 'yes' : 'no');
}

export { announcement, questions, correctResults, rounds };
