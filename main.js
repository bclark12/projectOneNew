const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



let createBank = function () {
for (i=0; i < 26; i++) {
    let alphabetLetters = document.createElement('div');
    document.getElementById('letterBank').appendChild(alphabetLetters);
    //alphabetLetters.className = "letter-" + i;
    alphabetLetters.id = "letter-" + i;  
    alphabetLetters.className = "letters"
    alphabetLetters.innerText = alphabet[i]
    
    console.log(alphabet[i])
}
}
createBank()