import random from '../randomizer.js';

const announcement = 'What is the result of the expression?';
const questions = [];
const correctResults = [];
const operators = ['-', '*', '+'];
const rounds = 3;
for (let i = 0; i < rounds; i += 1) {
  const num1 = random(0, 10);
  const num2 = random(0, 10);
  const randomOperator = operators[random(0, operators.length)];
  questions.push(`${num1} ${randomOperator} ${num2}`);
  switch (randomOperator) {
    case '-':
      correctResults.push(String(num1 - num2));
      break;
    case '+':
      correctResults.push(String(num1 + num2));
      break;
    case '*':
      correctResults.push(String(num1 * num2));
      break;
    default:
      console.log('Have no operator');
  }
}

export {
  announcement, questions, correctResults, rounds,
};
