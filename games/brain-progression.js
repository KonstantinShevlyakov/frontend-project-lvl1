#!/usr/bin/env node
import {
    getProg,getHiddenElement, greeting, mainQuestion, playerLost, playerWin, random,
} from '../src/index.js';

const brainGCDGame = () => {
    let count = 0;
    const userName = greeting();
    console.log('What number is missing in the progression?');
    while (count < 3) {
        const arrayLength = random(5, 10);
        const progStep = random(2, 10);
        const element = random(0, 50);
        const progression = getProg(arrayLength, progStep, element);
        const correctResult = getHiddenElement(progression);
        const question = Number(mainQuestion(`${progression}`));
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
console.log(brainGCDGame());
