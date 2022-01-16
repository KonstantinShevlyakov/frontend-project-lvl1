import readlineSync from 'readline-sync';

function roundsCount() {
  return 3;
}

export default function gameProperties(announcement, gameData) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(announcement);
  const rounds = roundsCount();
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
  return null;
}

export { roundsCount };
