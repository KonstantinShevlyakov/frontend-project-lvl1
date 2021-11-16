import {
  greeting, mainQuestion, playerLost, playerWin, random,
} from '../index.js';

export const brainEvenGame = () => {
  let count = 0;
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (count < 3) {
    const num = random(0, 100);
    const question = (mainQuestion(num));
    if (((num % 2 === 0) && question === 'yes') || ((num % 2 !== 0) && question === 'no')) {
      console.log('Correct!');
      count += 1;
    } else {
      return playerLost(question, (num % 2 ? 'no' : 'yes'), userName);
    }
  }
  return playerWin(userName);
};

const mainGame = (correctAnswers, questions, rules) => {

}

