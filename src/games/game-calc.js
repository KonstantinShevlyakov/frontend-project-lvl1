#!/usr/bin/env node
import {
  greeting, mainQuestion, playerLost, playerWin, random, getRandomOperator, getCalcResult,
} from '../index.js';

const brainCalcGame = () => {
  let count = 0;
  const userName = greeting();
  console.log('What is the result of the expression?');
  while (count < 3) {
    const randomOperator = getRandomOperator();
    const num1 = random(0, 10);
    const num2 = random(0, 10);
    const correctResult = getCalcResult(num1, num2, randomOperator);
    const question = Number(mainQuestion(`${num1} ${randomOperator} ${num2}`));
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

export default brainCalcGame();
