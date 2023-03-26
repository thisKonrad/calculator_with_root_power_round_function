/**  ≡≡:: calculator :: SCRIPT JS ::≡≡
 *  functions: +, -, *, /, with eval()*Method, 
 *  functions: √, x², ≈ with Math()Methods ::,
 * */ 

'use strict';

/* :: get the result-area :: */
const resultValue = document.querySelector('#result-area');

/* :: # numbers # - add click event to all numbers and evaluable signs with a loop :: */

const numberSigns = document.querySelectorAll('.sign-number');

numberSigns.forEach( numberSign => {
        numberSign.addEventListener('click', (event)=>{
        console.log('event');
        resultValue.innerText += event.target.innerText;
    })  
});


/** = equal :: add here the basic mathematic functions with getResult() */
const equal = document.querySelector('#equal');
equal.addEventListener('click', getResult);

function getResult(){
    /**  eval() Method evaluates the innerText string in a mathematic operation
    * it only works fine with these operators =► [+, -, *, /,] */

    let result = eval(resultValue.innerText).toFixed(2);
    resultValue.innerText = result;

    /* ensure that if only equal is clicked, undefined wont be displayed */
    if( resultValue.innerText == 'undefined'){
        resultValue.innerText = null;
    }
};


/* stroke and delete all innerText items with one click */
resultValue.addEventListener('click',(e)=>{
    resultValue.innerText = null;
});

/* delete last innerText item with DEL Button */
const del = document.querySelector('#DEL');
    del.addEventListener('click', (e)=>{
    resultValue.innerText = resultValue.innerText.slice(0,-1); 
});


/* ::▼:: other mathematic functions that does not run so well with eval()Method :: */

/* '≈' round */
const round = document.querySelector('#round');
    round.addEventListener('click', (e)=>{
    resultValue.innerText = Math.round(resultValue.innerText);
});

/* '√' root */
const root = document.querySelector('#root');
root.addEventListener('click',(e)=>{
     resultValue.innerText = Math.sqrt(resultValue.innerText).toFixed(2);
});

/* 'x²' power (potenz)  */
const potenz2 = document.querySelector('#power');
    potenz2.addEventListener('click', (e)=>{
    resultValue.innerText = Math.pow(resultValue.innerText, 2).toFixed(2);
});

/* :::::: ≡≡≡ :♦: ≡≡≡ :♦: the end :♦: ≡≡≡ :♦: ≡≡≡ ::::: */