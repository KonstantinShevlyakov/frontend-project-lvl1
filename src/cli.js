//import readlineSync from 'readline-sync';

//const question = () => {
  //const userName = readlineSync.question('May I have your name? ');
  //return (`Hello ${userName}!`);
//};

//export default question;

import readlineSync from "readline-sync";

let userName = '';
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  return userName;
};

export { greeting, userName};