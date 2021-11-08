import readlineSync from 'readline-sync';

export const question = (name) => {
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hello ' + userName + '!');
};