//create empty array to push individual letters tot hat array using CharCode and a "for loop"
const alphabet = [];
for (i = 97; i <= 122; i++) {
    let arrayLetter = String.fromCharCode(i);
    alphabet.push(arrayLetter);
}

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
//
let addButtonFunction = function () {
    //console.log(this.innerText);

    for (i = 0; i < randomWordArray.length; i++) {
        if (this.innerText == randomWordArray[i]) {
            return console.log('Match!')
        } 
    };
    
    console.log('Wrong!')
    return this.innerText;
};

for (i = 0; i < alphabet.length; i++) {
    document.getElementById('letter-' + i).addEventListener('click', addButtonFunction);
};

