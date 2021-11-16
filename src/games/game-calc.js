import { random } from '../index.js';

const announcement = 'What is the result of the expression?';
const questions = [];
const correctResults = [];
const operators = ['-', '*', '+'];
for (let i = 0; i < 3; i += 1) {
  const num1 = random(0, 10);
  const num2 = random(0, 10);
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
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

export { announcement, questions, correctResults };
