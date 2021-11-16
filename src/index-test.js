import readlineSync from 'readline-sync';

const gameProperties = (announcement, questions, correctsResults, userName) => {
    console.log(announcement);
    for (let i = 0; i < 3; i += 1) {
        console.log(`Question: ${questions[i]}`);
        const answer = readlineSync.question('Your answer: ');
        if (answer === correctsResults[i]) {
            console.log('Correct');
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${correctsResults[i]}. Let's try again, ${userName}`);
            break;
        }
        if (i === 2) {
            console.log(`Congratulations, ${userName}`);
        }
    }
};

export {
gameProperties
};