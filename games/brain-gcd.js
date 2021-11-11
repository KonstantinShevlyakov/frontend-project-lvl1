import {
    greeting, mainQuestion, playerLost, playerWin, random
} from '../src/index.js';

const brainCalcGame = () => {
    let count = 0;
    const userName = greeting();
    while (count < 3) {
        const num1 = random(1, 100);
        const num2 = random(1, 100);
        const question = Number(mainQuestion(`${num1} ${num2}`);
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
console.log(brainCalcGame());