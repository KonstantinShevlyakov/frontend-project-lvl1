#!/usr/bin/env node
import {greeting, mainQuestion, playerLost, playerWin, random, getRandomOperator} from "../src/index.js";

const brainCalcGame = () => {
    let count = 0;
    const userName = greeting();
    while (count < 3) {
        const item = getRandomOperator();
        const num1 = random(1, 10);
        const num2 = random(1, 10);
        const expression = (`${num1} ${item} ${num2}`);
        const result = eval(expression);
        const question = eval((mainQuestion(expression)));
        if (question === result) {
            console.log('Correct!');
            count += 1;
        } else {
            console.log(playerLost(question, result, userName));
            count = 0;
        }
    }
    return playerWin(userName);
};
console.log(brainCalcGame());