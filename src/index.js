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

export const playerWin = (userName) => (`Congratulations,${userName}!`);

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
  }
  return ('Error');
};

export const getGCD = (num1, num2) => {
  if (num2 !== 0) {
    const tmpNum = num1 % num2;
    return getGCD(num2, tmpNum);
  }
  return num1;
};

export const getProg = (arrayLength, progStep, element) => {
  const array = [];
  let item = element;
  array.push(item);
  for (let i = 1; i < arrayLength; i += 1) {
    item += progStep;
    array.push(item);
  }
  const randomElement = array[Math.floor(Math.random() * array.length)];
  const index = array.indexOf(randomElement);
  array[index] = '..';
  return array;
};

export const getHiddenElement = (array) => {
  const index = array.indexOf('..');
  let element = array[index];
  let progStep = 0;
  if (index === 0) {
    progStep = array[index + 2] - array[index + 1];
    element = array[index + 1] - progStep;
  }
  if (index === array.length - 1) {
    progStep = array[index - 1] - array[index - 2];
    element = array[index - 1] + progStep;
  } else {
    progStep = (array[index + 1] - array[index - 1]) / 2;
    element = array[index - 1] + progStep;
  }
  return element;
};
