// interactive design

const outputElement = document.querySelector("#output");
const btnCopy = document.querySelector("#btn-copy");
const lengthElement = document.querySelector("#length");

const capitalElement = document.querySelector("#capital");
const numberElement = document.querySelector("#number");
const symbolElement = document.querySelector("#symbol");

const generatePasswordBtn = document.querySelector("#generate_password");
const form = document.querySelector("#form");

console.log(outputElement, btnCopy, lengthElement);
console.log(capitalElement, numberElement, symbolElement);
console.log(generatePasswordBtn, form);


let arrayFromLowToHigh = (low, high) => {
    let array = [];
    for (low; low <= high; low++) {
        array.push(low);
    }
    console.log(array);
    return array;
};

const lowerCase = arrayFromLowToHigh(97, 122);
console.log(lowerCase);
const upperCase = arrayFromLowToHigh(65, 90);
const numbers = arrayFromLowToHigh(48, 57);
const symbols = arrayFromLowToHigh(33, 46).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));


form.addEventListener('submit', (e) => {
    e.preventDefault(); //WebAPI
    generatePassword();
});


let generatePassword = () => {

    let charCodeArray = lowerCase;
    if (capitalElement.checked) { charCodeArray = charCodeArray.concat(upperCase); }
    if (numberElement.checked) charCodeArray = charCodeArray.concat(numbers);
    if (symbolElement.checked) charCodeArray = charCodeArray.concat(symbols);
    console.log(capitalElement.checked);
    console.log(charCodeArray);

    let characterAmount = lengthElement.value;
    let generatedCharCode = [];
    let index;

    // logic - main  
    for (var i = 0; i < characterAmount; i++) {
        index = Math.floor(Math.random() * charCodeArray.length);
        generatedCharCode.push(charCodeArray[index]);
    } // logic can be done anyway but i need best practices
    console.log(generatedCharCode);

    let password = charCodeToCharacter(generatedCharCode);
    console.log(password);
    outputElement.value = password;
}

let charCodeToCharacter = (generatedCharCode) => {
    let password = generatedCharCode.map((code) => String.fromCharCode(code))
    return password.join('');
}

btnCopy.addEventListener('click',()=>{

    if(outputElement.value){
        const textareaElement = document.createElement('textarea');
        document.body.appendChild(textareaElement);
        textareaElement.value=outputElement.value;
    
        textareaElement.select();
        document.execCommand('copy');
        textareaElement.remove();
    
        alert('copied to clipboard');
    }
    else{
        alert('There is no password to copy');
    }
});






/* Mistakes:
    low instead of i
    return array pannala

    charCodeArray.concate(uppercase):
    actually inga concat mutate pannathu so nama oru variable la store pannanum
    so charCodeArray = charCodeArray.concate(uppercase):
*/
