import random from '../randomizer.js';

const announcement = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameData = [];
const rounds = 3;
for (let i = 0; i < rounds; i += 1) {
  const questionResult = {};
  const num = random(0, 100);
  questionResult.question = num;
  questionResult.answer = ((num % 2 === 0) ? 'yes' : 'no');
  gameData.push(questionResult);
}

export {
  announcement, rounds, gameData,
};
