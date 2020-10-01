'use strict'

var numberCorrect = 0
// greeting question
var userName = prompt('Hi there, welcome to my webpage! What is your name?')

console.log('The user\'s name: ' + userName);

alert('It\'s lovely to meet you, ' + userName + '!');

// first question
var whichSchool = prompt( userName + ', I have a few questions for you so you can better get to know me, do you think I went to Seattle University?');

if(whichSchool.toLowerCase() === 'yes' || whichSchool.toLowerCase() === 'y'){

  alert('Correct! I studied forensic Psychology, but only for a year');
  numberCorrect++

} else {

  alert('I did, but switched to something different! ');
}
console.log('User can guess if I went to Seattle U or not');


// second question
var workLife = prompt('Did you know I was a skydive instructor?? ');

if(workLife.toUpperCase() === 'No' || workLife.toUpperCase() === 'N'){        
    alert('Sike! I\'m afraid of heights and dark water which you could encounter both on that type of work life style. Am I right?! ');
} else {
    alert('I had a normal job, Wouldn\'t that be cool if I was!'); 
    numberCorrect++  
} 
console.log('User guesses if I was a skydive instructor or not');

// third question
var workHistory = prompt('Wanna know what my past job was and what I\'m doing now? ');

if(workHistory.toLowerCase() === 'No' || workHistory.toLowerCase() === 'N'){
    alert('Great, I worked at a Salon on Capitol hill for 8+ years and now going to school at Code Fellows to become a Software Developer!');
    numberCorrect++
} else {
    alert('Well I\'ll tell you anyways, I worked at a salon in Seattle and now I\'m in school at Code Fellows to become a Software Developer!');
}
console.log('User finds out past work history plus current schooling');

// forth question
var lifeGoals = prompt('Id love to share with you about my future goals, think I\'ll make a good Software Developer?');

if(lifeGoals.toLowerCase() === 'y' || lifeGoals.toLowerCase() === 'yes'){

    alert('Aww thats sweet that you think so ' + userName + ', Me too! fingers crossed I make it through!');
    numberCorrect++

    console.log('If yes they learn about my future goals in a nice way');

} else if(lifeGoals.toLowerCase() === 'n' || lifeGoals.toLowerCase() === 'no') {

    alert('Well ' + userName + ', I guess I will just have to prove you wrong!');

    console.log('If no user gets message about proving them wrong');
}

// fifth question
var funLanguageFact = prompt('I\'m in the beginning of learning a new language, Wanna know what it is?');

if(funLanguageFact.toLowerCase() === 'y' || funLanguageFact.toLowerCase() === 'yes'){
    
    alert('Great! My boyfriend is from Gambia, West Africa so I am learning his language which is Wolof so that I can better communicate with his family next time we visit!' + ' Well ' + userName + ',' + ' Thanks for visiting and getting to know me better, Have a nice day!');
    numberCorrect++
    console.log('If yes, the user will find out what language I am learning');

} else if(funLanguageFact.toUpperCase() == 'n' || funLanguageFact.toUpperCase() == 'no'){

    alert('But I thought you wanted to get to know me? ' + 'Well thanks anyways for coming by ' + userName + '!' + ' See you around!');

    console.log('If no, then I am disappointed and say goodbye');

}
// guess a number question
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
    alert('That is correct 28 years!');
    numberCorrect++
    break;
   }
if (i === 27 ){
    alert('Aww shucks outta chances! ' + correctAgeNumber + ' is the correct number');
}
}

// array favorite flavor question
var correctFlavor = ['chocolate peanut butter', 'neapolitan', 'cookie dough'];
var userAnswer = '';
var i = 1;

while (i < 6){
    var flavorQuestion = prompt('What are my favorite flavors of ice cream?');
    for (var j = 0; j < correctFlavor.length; j++) {
        if (flavorQuestion.toLowerCase() === correctFlavor[j]) {
            alert('Delicious! That is correct!');
            numberCorrect++
            i = 8; 
           break;
        } 
    }
    if (i < 6){
        userAnswer = flavorQuestion
        i++ 
        console.log(i);
        alert('Nope! ' + userAnswer + ' is incorrect but still delicious');   
    }        
}
if ( i === 6){
    alert('You\'re out of attempts, here are all the correct answers chocolate peanut butter, neapolitan, cookie dough!');
}

// closing question

if (numberCorrect > 5) {
    alert(userName + ', thanks for visiting and getting to know me! You scored ' + numberCorrect + ' out of 7! Have a great day!') 
} else {
    alert(userName + ', thanks for visiting but you only scored ' + numberCorrect + ' out of 7! Have a great day!');
}



// questions to ask:
// what school did i go to
// what did i do for work
// what is my past work experience
// what are my goals
// what language do i want to learn
 