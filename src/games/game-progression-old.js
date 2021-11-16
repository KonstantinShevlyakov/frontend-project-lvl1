import {
  greeting, mainQuestion, playerLost, playerWin, random,
} from '../index.js';

const getProg = (arrayLength, progStep, element) => {
  const array = [];
  let item = element;
  array.push(item);
  for (let i = 1; i < arrayLength; i += 1) {
    item += progStep;
    array.push(item);
  }
  const randomElement = array[Math.floor(Math.random() * array.length)];
  const index = array.indexOf(randomElement);
  array[index] = '..';
  return array;
};

const getHiddenElement = (array) => {
  const index = array.indexOf('..');
  let element;
  let progStep;
  if (index === 0) {
    progStep = array[2] - array[1];
    element = array[1] - progStep;
    return element;
  }
  if (index === array.length - 1) {
    progStep = array[index - 1] - array[index - 2];
    element = array[index - 1] + progStep;
    return element;
  }
  progStep = (array[index + 1] - array[index - 1]) / 2;
  element = array[index - 1] + progStep;

  return element;
};

export const brainProgressionGame = () => {
  let count = 0;
  const userName = greeting();
  console.log('What number is missing in the progression?');
  while (count < 3) {
    const arrayLength = random(5, 10);
    const progStep = random(2, 10);
    const element = random(0, 50);
    const progression = getProg(arrayLength, progStep, element);
    const correctResult = getHiddenElement(progression);
    const question = Number(mainQuestion(`${progression.join(' ')}`));
    if (question === correctResult) {
      console.log('Correct!');
      count += 1;
    } else {
      return playerLost(question, correctResult, userName);
    }
  }
  return playerWin(userName);
};
