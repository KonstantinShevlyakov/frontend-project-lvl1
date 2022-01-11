import random from '../randomizer.js';

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
const rounds = 3;
for (let i = 0; i < rounds; i += 1) {
  const questionResults = {};
  const num = random(1, 100);
  if (isPrime(num) === true) {
    questionResults.answer = 'yes';
  } else {
    questionResults.answer = 'no';
  }
  questionResults.question = num;
  gameData.push(questionResults);
}

export {
  announcement, gameData, rounds,
};
