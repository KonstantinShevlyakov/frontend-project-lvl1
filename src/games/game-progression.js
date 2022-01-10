import random from '../randomizer.js';

const announcement = 'What number is missing in the progression?';
const questions = [];
const correctResults = [];
const rounds = 3;
for (let i = 0; i < rounds; i += 1) {
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
  correctResults.push(randomElement.toString());
  const index = progression.indexOf(randomElement);
  progression[index] = '..';
  questions.push(progression.toString().split(',').join(' '));
}

export {
  announcement, questions, correctResults, rounds,
};
