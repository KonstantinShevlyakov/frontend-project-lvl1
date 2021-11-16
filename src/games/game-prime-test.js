import { random } from '../index-test.js';

const isPrime = (num) => {
    const smallestDivisor = (numeral) => {
        let counter = 2;
        for (; numeral % counter !== 0;) {
            counter += 1;
        }
        return counter;
    };
    if (num >= 1 && smallestDivisor(num) === num) {
        return 'yes';
    }
    return 'no';
};

const announcement = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const questions = [];
const correctResults = [];
for (let i =0; i < 3; i += 1) {
    const num = random(1, 100);
    questions.push(num);
    correctResults.push(isPrime(num));
}

export { announcement, questions, correctResults };