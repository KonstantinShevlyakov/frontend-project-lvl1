import random from '../randomizer.js';
import gameProperties from '../index.js';
import { roundsCount } from '../index.js';

export default function gcd () {
  const getGCD = (num1, num2) => {
    if (num2 !== 0) {
      const tmpNum = num1 % num2;
      return getGCD(num2, tmpNum);
    }
    return num1;
  };

  const announcement = 'Find the greatest common divisor of given numbers.';
  const gameData = [];
  const rounds = roundsCount();
  for (let i = 0; i < rounds; i += 1) {
    const questionsResults = {};
    const num1 = random(0, 100);
    const num2 = random(0, 100);
    questionsResults.question = (`${num1} ${num2}`);
    questionsResults.answer = (String(getGCD(num1, num2)));
    gameData.push(questionsResults);
  }
  return gameProperties(announcement, gameData);
}

// export {
//   announcement, rounds, gameData,
// };
