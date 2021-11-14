import readlineSync from 'readline-sync';

export const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  return userName;
};

export const mainQuestion = (num) => {
  const question = readlineSync.question(`Question: ${num}\nYour answer:`);
  return question;
};

export const playerLost = (wrongAnswer, correctAnswer, userName) => (`"${wrongAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);

export const playerWin = (userName) => console.log(`Congratulations,${userName}!`);

export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const getRandomOperator = () => {
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
    default:
      return 'Have no operator';
  }
};

export const getGCD = (num1, num2) => {
  if (num2 !== 0) {
    const tmpNum = num1 % num2;
    return getGCD(num2, tmpNum);
  }
  return num1;
};

export const isPrime = (num) => {
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
