import {
  greeting, mainQuestion, playerLost, playerWin, random,
} from '../index.js';

const getRandomOperator = () => {
  const operators = ['-', '+', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  return randomOperator;
};

const getCalcResult = (num1, num2, operator) => {
  switch (operator) {
    case '-':
      return (num1 - num2);
    case '+':
      return (num1 + num2);
    case '*':
      return (num1 * num2);
    default:
      return 'Have no operator';
  }
};

export const brainCalcGame = () => {
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
     return playerLost(question, correctResult, userName);
    }
  }
  return playerWin(userName);
};
