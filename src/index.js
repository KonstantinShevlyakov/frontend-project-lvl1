import readlineSync from "readline-sync";

export const greeting = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello ${userName}!`);
    return userName;
};

export const mainQuestion = (num) => {
    const question = readlineSync.question(`Question: ${num}\nYour answer:`);
    return question;
};

export const playerLost = (wrongAnswer, correctAnswer, userName) => {
    return (`"${wrongAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
};

export const playerWin = (userName) => {
    return (`Congratulations,${userName}!`);
};

export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const getRandomOperator = (num1, num2) => {
    const operators = ['-', '+', '*'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    return randomOperator;
};

export const getCalcResult = (num1, num2, operator) => {
    switch (operator) {
        case '-':
            return (num1 - num2);
        case '+':
            return (num1 + num2);
        case '*':
            return (num1 * num2);
    }
};

