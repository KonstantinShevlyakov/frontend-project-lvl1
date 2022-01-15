import readlineSync from 'readline-sync';

export default function gameProperties(announcement, greeting, rounds, gameData) {
  const name = greeting();
  console.log(announcement);
  for (let i = 0; i < rounds; i += 1) {
    console.log(`Question: ${gameData[i].question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === gameData[i].answer) {
      console.log('Correct');
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${gameData[i].answer}. Let's try again, ${name}!`);
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
    }
  }
