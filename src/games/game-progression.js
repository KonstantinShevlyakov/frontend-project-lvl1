import {
  getProg, getHiddenElement, greeting, mainQuestion, playerLost, playerWin, random,
} from '../index.js';

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
      console.log(playerLost(question, correctResult, userName));
      count = 0;
    }
  }
  return playerWin(userName);
};
