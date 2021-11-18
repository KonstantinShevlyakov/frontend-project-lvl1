import { random } from '../randomizer.js';

const announcement = 'What number is missing in the progression?';
const questions = [];
const correctResults = [];
for (let i = 0; i < 3; i += 1) {
  const array = [];
  const arrayLength = random(5, 10);
  const progStep = random(2, 10);
  let element = random(0, 50);
  array.push(element);
  for (let j = 0; j < arrayLength; j += 1) {
    element += progStep;
    array.push(element);
  }
  const randomElement = array[random(0, arrayLength - 1)];
  correctResults.push(randomElement.toString());
  const index = array.indexOf(randomElement);
  array[index] = '..';
  questions.push(array);
}

export { announcement, questions, correctResults };
