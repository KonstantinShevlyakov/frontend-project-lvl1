import readlineSync from 'readline-sync';

export const question = () => {
    const userName = readlineSync.question('May I have your name? ');
    return ('Hello ' + userName + '!');
};