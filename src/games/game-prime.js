import {
  greeting, mainQuestion, playerLost, playerWin, random, isPrime,
} from '../index.js';

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
      console.log(playerLost(question, correctResult, userName));
      count = 0;
    }
  }
  return playerWin(userName);
};
