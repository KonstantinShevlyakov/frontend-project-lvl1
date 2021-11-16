import {
  greeting, mainQuestion, playerLost, playerWin, random,
} from '../index.js';


const isPrime = (num) => {
  const smallestDivisor = (numeral) => {
    let counter = 2;
    for (; numeral % counter !== 0;) {
      counter += 1;
    }
    return counter;
  };
  if (num >= 1 && smallestDivisor(num) === num) {
    return 'yes';
  }
  return 'no';
};

export const brainPrimeGame = () => {
  let count = 0;
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (count < 3) {
    const num = random(1, 100);
    const correctResult = isPrime(num);
    const question = (mainQuestion(`${num}`));
    if (question === correctResult) {
      console.log('Correct!');
      count += 1;
    } else {
      return playerLost(question, correctResult, userName);
    }
  }
  return playerWin(userName);
};
