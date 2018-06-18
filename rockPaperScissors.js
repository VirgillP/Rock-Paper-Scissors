//User choice
const getUserChoice = (userInput) =>{
 
  if(userInput==='rock'||userInput==='paper'||
     userInput==='scissors'||userInput==='bomb'){
     return userInput.toLowerCase();
     } else{
 console.log('Not a valid choice');     }
};
getUserChoice('paper')
//Computer's choice
const getComputerChoice = ()=>{
   const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
  case 0:
    return 'rock';
    break;
  case 1:
    return 'paper';
    break;
  case 2:
    return 'scissors';
    break;
}
};
 //Determining the winner
const determineWinner = (userChoice, computerChoice) =>{
  if(userChoice === computerChoice){
    return 'its a tie!';}
  
  if (userChoice==='rock'){
    if (computerChoice==='paper'){
      return 'Computer Won';
      }else{
      return 'You Won!';
      }
    }
  
  if (userChoice==='paper'){
    if (computerChoice==='scissors'){
      return 'Computer Won';
      }else{
      return 'You Won!';
      }
    }
  
  if (userChoice==='scissors'){
    if (computerChoice==='rock'){
      return 'Computer Won!';
      }else{
      return 'You Won!';
      }
    }
  if (userChoice==='bomb'){
    if (computerChoice==='rock'){
      return 'You Won!';
      }else{
      return 'You Won!';
      }
    }
};
//Game on!
const playGame = ()=>{
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`You chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
console.log(determineWinner(userChoice,computerChoice));
};
playGame()
