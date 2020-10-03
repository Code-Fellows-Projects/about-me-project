'use strict'

var numberCorrect = 0

var userName = prompt('Hi there, welcome to my webpage! What is your name?')
function askName(){



alert('It\'s lovely to meet you, ' + userName + '!');
}
askName();


function whatSchool(){
    var whichSchool = prompt( userName + ', Lets play a guessing game to get to know me better! Do you think I went to Seattle University?');
    if(whichSchool.toLowerCase() === 'yes' || whichSchool.toLowerCase() === 'y'){
    
      alert('I did! Correct! I studied forensic Psychology,');
      numberCorrect++
    
    } else {
    
      alert('I did, but only for one year! ');
    }
    
}
whatSchool();


function doYouSkyDive(){
    var workLife = prompt('Did you know I use to be a skydive instructor?? ');

if(workLife.toUpperCase() === 'No' || workLife.toUpperCase() === 'N'){        
    alert('Just kidding, I had a normal job, Wouldn\'t that be cool if I was!');
} else {
    alert('True! I\'m afraid of heights and dark water which you could encounter both on that type of work life style. Am I right?! Just kidding, I had a normal job, Wouldn\'t that be cool if I was!'); 
    numberCorrect++  
} 

}
doYouSkyDive();


function pastJobHistory(){
    var workHistory = prompt('Wanna know what you last job was? ');

    if(workHistory.toLowerCase() === 'yes' || workHistory.toLowerCase() === 'y'){
        alert('Great! I worked at a Salon on Capitol hill for 8+ years but now going to school at Code Fellows to become a Software Developer!');
        numberCorrect++
    } else {
        alert('Well I\'ll tell you anyways, I worked at a salon in Seattle and now I\'m in school at Code Fellows to become a Software Developer!');
    }
    
}
pastJobHistory();


function futureGoals(){
    var lifeGoals = prompt('Id love to share with you about my future goals, think I\'ll make a good Software Developer?');

    if(lifeGoals.toLowerCase() === 'y' || lifeGoals.toLowerCase() === 'yes'){
    
        alert('Aww thats sweet that you think so ' + userName + ', Me too! fingers crossed I make it through!');
        numberCorrect++
        

    } else if(lifeGoals.toLowerCase() === 'n' || lifeGoals.toLowerCase() === 'no') {
    
        alert('Well ' + userName + ', I guess I will just have to prove you wrong!');
    
    }
}
futureGoals();


function learnNewLanguage(){
    var funLanguageFact = prompt('I\'m in the beginning of learning a new language, Wanna know what it is?');

    if(funLanguageFact.toLowerCase() === 'y' || funLanguageFact.toLowerCase() === 'yes'){
        
        alert('Great! ' + userName + ' My boyfriend is from Gambia, West Africa so I am learning his fluent language which is Wolof so that I can better communicate with his family next time we visit!' + ' Don\'t worry ' + userName + ' only a few more questions!');
        numberCorrect++
        
    
    } else if(funLanguageFact.toUpperCase() == 'n' || funLanguageFact.toUpperCase() == 'no'){
    
        alert('But I thought you wanted to get to know me? ' + userName + 'I guess you will have to answer a few more questions!');
    
        
    
    }
}
learnNewLanguage();


function guessSeattleQuestion(){
    var correctAgeNumber = 28;
for (var i = 0; i < 4; i++) {
  var numberGuess = prompt('Guess how long ive lived in Seattle!');
  if ((correctAgeNumber < parseInt(numberGuess))) {
    alert('Nope, too high try again!');
  }
    else if ((correctAgeNumber > parseInt(numberGuess))) {
    alert('Nope, too low try again!');
  }
    else if (parseInt(numberGuess) === correctAgeNumber) {
    alert('That is correct 28 years...that\s how old I am...shhhh!');
    numberCorrect++
    break;
   }
if (i === 3){
    alert('Aww shucks outta chances! ' + correctAgeNumber + ' is the correct number!');
}
}
}
guessSeattleQuestion();



var correctFlavor = ['chocolate peanut butter', 'neapolitan', 'cookie dough'];
var userAnswer = '';
var i = 1;
function favoriteIceCreamFlavor(){
    while (i < 7){
        var flavorQuestion = prompt('What are my favorite flavors of ice cream?');
        for (var j = 0; j < correctFlavor.length; j++) {
            if (flavorQuestion.toLowerCase() === correctFlavor[j]) {
                alert('Delicious! That is correct!');
                numberCorrect++
                i = 8; 
               break;
            } 
        }
        if (i < 7){
            userAnswer = flavorQuestion
            i++ 
            console.log(i);
            alert('Nope! ' + userAnswer + ' is incorrect but probably still delicious...because it\'s ice cream duhhh!');   
        }        
    }
    if ( i === 7){
        alert('You\'re out of attempts, here are all the correct answers ' + correctFlavor);
    }
    
}
favoriteIceCreamFlavor();



function howManyQuestionsCorrect(){
    if (numberCorrect > 5) {
        alert(userName + ', thanks for visiting and getting to know me! Good job! You scored ' + numberCorrect + ' out of 7! Have a great day!') 
    } else {
        alert(userName + ', thanks for visiting but you only scored ' + numberCorrect + ' out of 7! Ouch! Have a great day!');
    }
}
howManyQuestionsCorrect();


