//3.	Write a program that checks if a character is a vowel (a, e, i, o, u) or a consonant using switch-case.

function checkWord(word){
    switch(word.toLowerCase()){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        console.log(`${word} is vowel`)
        break;
        default:
            console.log(`${word} is consonant`);
    }
}

checkWord("a");
checkWord("b");

