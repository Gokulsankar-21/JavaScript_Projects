// interactive design

const outputElement = document.querySelector('#output');
const btnCopy = document.querySelector('#copy');
const passwordLengthEelement =document.querySelector('#length');
const btnPasswordGenerator=document.querySelector('#generate_password')

const numbersElement = document.querySelector('#numbers');
const capitalElement = document.querySelector('#capital');
const smallElement =document.querySelector('#small');
const symbolElement =document.querySelector('#symbol');

const form=document.querySelector('#form');

console.log(outputElement,btnCopy);
console.log(numbersElement,capitalElement,smallElement,symbolElement);
console.log(btnPasswordGenerator,form);

btnCopy.addEventListener('click',async()=>{
   if(outputElement.value){
        await navigator.clipboard.writeText(outputElement.value);
        alert('copied to clipboard');     
        console.log(navigator);
   }
   else{
    alert('there is no password to copy');
   }
});


// ASCII-logics

function generateRandomPassword(min,max){
    let limit = (max-min)+1;
    console.log(limit);

    // let randomNumber = Math.random()*0;
    // console.log(randomNumber);

    return (String.fromCharCode((Math.random()*limit)+min)); 
}


function capitalLetters(){
    return generateRandomPassword(65,90);
}

function smallLetters(){
    return generateRandomPassword(97,122);
}

function numbersValue(){
    return generateRandomPassword(48,57);
}

function symbolsValue(){
    symbol ='~`!@#$%^&*()_+-={}[]<>/|\?'; // index based random pick
    return symbol[Math.floor(Math.random()*symbol.length)];
}

// index based random pick
const functionArray =  [
    {
        element:numbersElement, 
        fun:numbersValue
    },
    {
        element:capitalElement,
        fun:capitalLetters
    },
    {
        element:smallElement,
        fun:smallLetters
    },
    {
        element:symbolElement,
        fun:symbolsValue
    }
];

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const checkedArray= functionArray.filter(({element})=>element.checked); // return obj
    console.log(checkedArray);

    const length = passwordLengthEelement.value;
    let generatedPassword='';

    for (var i=0;i<length;i++){
        randomIndex = Math.floor(Math.random()*checkedArray.length);
        var letter = checkedArray[randomIndex].fun()
        generatedPassword+=letter;

        console.log(letter,generatedPassword);
    }
    outputElement.value=generatedPassword;
});

capitalLetters();
smallLetters();
numbersValue();
symbolsValue();

