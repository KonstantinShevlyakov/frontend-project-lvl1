import random from '../randomizer.js';
import gameProperties from '../index.js';
import { roundsCount } from '../index.js';

export default function even () {
  const announcement = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameData = [];
  const rounds = roundsCount();
  for (let i = 0; i < rounds; i += 1) {
    const questionResult = {};
    const num = random(0, 100);
    questionResult.question = num;
    questionResult.answer = ((num % 2 === 0) ? 'yes' : 'no');
    gameData.push(questionResult);
  }
  return gameProperties(announcement, gameData);
}

// export {
//   announcement, rounds, gameData,
// };
