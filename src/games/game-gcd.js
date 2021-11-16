import { random } from '../index.js';

const getGCD = (num1, num2) => {
    if (num2 !== 0) {
        const tmpNum = num1 % num2;
        return getGCD(num2, tmpNum);
    }
    return num1;
};

const announcement = 'Find the greatest common divisor of given numbers.';
const questions = [];
const correctResults = [];
for (let i = 0; i < 3; i += 1) {
    const num1 = random(0, 100);
    const num2 = random(0, 100);
    questions.push(`${num1} ${num2}`);
    correctResults.push(String(getGCD(num1, num2)));
}

export { announcement, questions, correctResults };