//create empty array to push individual letters tot hat array using CharCode and a "for loop"
const alphabet = [];
for (i = 97; i <= 122; i++) {
    let arrayLetter = String.fromCharCode(i);
    alphabet.push(arrayLetter);
}
let wrongLettersArray = [];

//this is where the different words for the game can be entered
let wordsArray = ['movie', 'heyguys', 'anotherword', 'lastone', 'jkonemore'];

//divide the words into more managable pieces
let lettersArray = [];
for (i = 0; i < wordsArray.length; i++) {
splitStringArray = wordsArray[i].split('');
lettersArray.push(splitStringArray);
};

//Now the "lettersArray" array is an array of arrays.
//The individual arrays inside this multi-dimensional array contain
//  individual letters that represent each letter of the chosen word.
let getRandomWordIndex = function () {
    let randomWordIndex = (Math.floor(Math.random() * (lettersArray.length)));
    return randomWordIndex
};

//Now we have a function that can return a random index number that is related to the
//  length of the "lettersArray" array.
//we can use this to choose a random array within that array
let randomWordArray = lettersArray[getRandomWordIndex()];

console.log(randomWordArray);

let createBank = function () {
    for (i=0; i < alphabet.length; i++) {
        let alphabetLetters = document.createElement('div');
        document.getElementById('letterBank').appendChild(alphabetLetters);
        alphabetLetters.id = "letter-" + i;  
        alphabetLetters.className = "letters";
        alphabetLetters.innerText = alphabet[i];
    };
};
createBank();

let createRightBoxes = function () {
    for (i = 0; i < randomWordArray.length; i++) {    
        let rightBoxes = document.createElement('div');
        let rightContainer = document.getElementById('rightContainer');
        rightContainer.appendChild(rightBoxes);
        rightBoxes.id = 'right-' + i;
        rightBoxes.className = 'right';
    }
};
createRightBoxes();


//This is where we control the flow. When i get home create div elements in the dom
//  to represent correct letter choices.

//"this" will refer to the button that was clicked in this function.
let addButtonFunction = function () {       
    for (i = 0; i < randomWordArray.length; i++) {
        if (this.innerText == randomWordArray[i]) {
            let correctDiv = document.getElementById('right-' + i);
            correctDiv.innerText = randomWordArray[i];           
        }       
    };
    for (i = 0; i < randomWordArray.length; i++) {
        if (this.innerText == randomWordArray[i]) {
            this.innerText = '!';
            //this.style.textDecoration = 'line-through';
            this.style.color = 'purple';            
            return console.log('Match!');
        };
    };                       
    
    if (this.innerText === '!') {
        alert('you done picked this letter already')
        return console.log('you done picked this letter already');
    }; 
    //console.log('Wrong!');
    wrongLettersArray.push(this.innerText);
    wrongIdNumber = (wrongLettersArray.length - 1);
    document.getElementById('wrong-' + (wrongIdNumber))
    let wrongLetters = document.getElementById('wrongLetters');
    
    let wrongAnswer = this.innerText;
    wrongLetters.

  
    console.log(wrongAnswer)
    
    
    this.innerText = 'X';
    this.style.color = 'purple';
    //if (this.innerText === 'X') {
    return console.log('wrong');
    //}    
    //return this.innerText;
};

let checkWin = function () {
    for (i = 0; i < randomWordArray.length; i++) {
        let rightBoxes = document.getElementById('right-' + i);
        //console.log(rightBoxes)
        if (rightBoxes.innerText == false) {
            console.log('button is linked');
            return    
        };
    };
    alert('Good job! You Win!');
    console.log('good job');
};
let checkLose = function () {
    let lastWrongBox = document.getElementById('wrong-5');
    if (lastWrongBox.innerText == true) {
        console.log('You Lose!');
    }
    else {
        console.log('almost done')
    }
}
//};
//console.log(String.valueOf('h'))

//let x = document.getElementById('right-1');

//console.log(x.valueOf())



//

for (i = 0; i < alphabet.length; i++) {
    document.getElementById('letter-' + i).addEventListener('click', addButtonFunction);
};
for (i = 0; i < alphabet.length; i++) {
    document.getElementById('letter-' + i).addEventListener('click', checkWin);
};
for (i = 0; i < alphabet.length; i++) {
    document.getElementById('letter-' + i).addEventListener('click', checkLose);
};
