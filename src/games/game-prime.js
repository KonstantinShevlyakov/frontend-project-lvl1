import random from '../randomizer.js';
import gameProperteis, { roundsCount } from '../index.js';

export default function prime() {
  const isPrime = (num) => {
    const smallestDivisor = (numeral) => {
      let counter = 2;
      for (; numeral % counter !== 0;) {
        counter += 1;
      }
      return counter;
    };
    if (num >= 1 && smallestDivisor(num) === num) {
      return true;
    }
    return false;
  };

  const announcement = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameData = [];
  const rounds = roundsCount();
  for (let i = 0; i < rounds; i += 1) {
    const questionResults = {};
    const num = random(1, 100);
    questionResults.answer = isPrime(num) ? 'yes' : 'no';
    questionResults.question = num;
    gameData.push(questionResults);
  }
  return gameProperteis(announcement, gameData);
}

// export {
//   announcement, gameData, rounds,
// };
