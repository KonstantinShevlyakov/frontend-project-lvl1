import random from '../randomizer.js';
import gameProperties from '../index.js';
import { roundsCount } from '../index.js';

export default function calc()
{
  const announcement = 'What is the result of the expression?';
  const gameData = [];
  const operators = ['-', '*', '+'];
  const rounds = roundsCount();
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
  return gameProperties(announcement, gameData);
}

// export {
//  announcement, gameData, rounds,
// };
