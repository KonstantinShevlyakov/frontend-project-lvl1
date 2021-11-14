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