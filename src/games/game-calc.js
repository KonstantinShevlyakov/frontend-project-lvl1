import random from '../randomizer.js';

const announcement = 'What is the result of the expression?';
const gameData = [];
const operators = ['-', '*', '+'];
const rounds = 3;
for (let i = 0; i < rounds; i += 1) {
  const questionsResults = {};
  const num1 = random(0, 10);
  const num2 = random(0, 10);
  const randomOperator = operators[random(0, operators.length)];
  questionsResults.question = (`${num1} ${randomOperator} ${num2}`);
  switch (randomOperator) {
    case '-':
      questionsResults.answer = String(num1 - num2);
      gameData.push(questionsResults);
      break;
    case '+':
      questionsResults.answer = String(num1 + num2);
      gameData.push(questionsResults);
      break;
    case '*':
      questionsResults.answer = String(num1 * num2);
      gameData.push(questionsResults);
      break;
    default:
      console.log('Have no operator');
  }
}

// console.log(gameData);

export {
  announcement, rounds, gameData,
};
