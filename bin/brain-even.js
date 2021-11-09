#!/usr/bin/env node

import readlineSync from "readline-sync";
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const brainEvenGame = () => {
    let count = 0;
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
    while (count < 3) {
       const num = random(1, 100);
       const question = readlineSync.question('Question: ' + num + '\nYour answer:');
       if (((num % 2 === 0) && question === 'yes') || ((num % 2 !== 0) && question === 'no')) {
           console.log('Correct!');
           count += 1;
       } else {
           console.log(`"${question}" is wrong answer ;(. Correct answer was.\nLet's try again, ${userName}!`);
           count = 0;
       }
    }
    return (`Congratulations,${userName}`);
};
console.log(brainEvenGame());
