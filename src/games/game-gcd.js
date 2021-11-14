import {
  greeting, mainQuestion, playerLost, playerWin, random,
} from '../index.js';


const getGCD = (num1, num2) => {
  if (num2 !== 0) {
    const tmpNum = num1 % num2;
    return getGCD(num2, tmpNum);
  }
  return num1;
};

export const brainGCDGame = () => {
  let count = 0;
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  while (count < 3) {
    const num1 = random(0, 100);
    const num2 = random(0, 100);
    const correctResult = getGCD(num1, num2);
    const question = Number(mainQuestion(`${num1} ${num2}`));
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
