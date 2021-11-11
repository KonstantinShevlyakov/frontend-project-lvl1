#!/usr/bin/env node
import {
  getGCD, greeting, mainQuestion, playerLost, playerWin, random,
} from '../src/index.js';

const brainGCDGame = () => {
  let count = 0;
  const userName = greeting();
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
console.log(brainGCDGame());
