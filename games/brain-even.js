#!/usr/bin/env node
import {
  greeting, mainQuestion, playerLost, playerWin, random,
} from '../src/index.js';

const brainEvenGame = () => {
  let count = 0;
  const userName = greeting();
  while (count < 3) {
    const num = random(0, 100);
    const question = (mainQuestion(num));
    if (((num % 2 === 0) && question === 'yes') || ((num % 2 !== 0) && question === 'no')) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(playerLost(question, (num % 2 ? 'no' : 'yes'), userName));
      count = 0;
    }
  }
  return playerWin(userName);
};
console.log(brainEvenGame());
