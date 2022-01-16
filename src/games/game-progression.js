import random from '../randomizer.js';
import gameProperties, { roundsCount } from '../index.js';

export default function prog() {
  const announcement = 'What number is missing in the progression?';
  const gameData = [];
  const rounds = roundsCount();
  for (let i = 0; i < rounds; i += 1) {
    const questionResult = {};
    const progression = [];
    const progressionLength = random(5, 10);
    const progStep = random(2, 10);
    let element = random(0, 50);
    progression.push(element);
    for (let j = 0; j < progressionLength; j += 1) {
      element += progStep;
      progression.push(element);
    }
    const randomElement = progression[random(0, progressionLength - 1)];
    questionResult.answer = randomElement.toString();
    const index = progression.indexOf(randomElement);
    progression[index] = '..';
    questionResult.question = (progression.toString().split(',').join(' '));
    gameData.push(questionResult);
  }
  return gameProperties(announcement, gameData);
}

// export {
//   announcement, rounds, gameData,
// };
