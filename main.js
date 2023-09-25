/**  ≡≡:: calculator :: SCRIPT JS ::≡≡
 *  functions: +, -, *, /, with eval()*Method, 
 *  functions: √, x², ≈ with Math()Methods ::,
 * */ 


(function(){

/* :: get the result-area :: */
const resultValue = document.querySelector('#result_area');


/**  add click event to all numbers
* and evaluable signs with the forEach loop  */

const numberSigns = document.querySelectorAll('.sign');

numberSigns.forEach( numberSign => {

    numberSign.addEventListener('click', (e)=>{
       
        resultValue.innerText += e.target.innerText;

    })  

});


/** = equal :: 
 * add here the basic mathematic functions with getResult() */
const equal = document.querySelector('#equal');

equal.addEventListener('click', getResult);

function getResult(){
    /**  eval() Method evaluates the innerText string 
    * into a mathematic operation
    * it only works fine with this operators [ +, -, *, / ] */

    let result = eval(resultValue.innerText).toFixed(2);
    resultValue.innerText = result;

    /* ensure that if only equal is clicked, 
    * undefined wont be displayed */
    if( resultValue.innerText == 'undefined'){

        resultValue.innerText = null;

    }
    
};


/* stroke and delete all innerText items with one click */
resultValue.addEventListener('click',()=>{

    resultValue.innerText = null;

});

/* delete last innerText item with DEL Button */
const del = document.querySelector('#DEL');

    del.addEventListener('click', ()=>{

    resultValue.innerText = resultValue.innerText.slice(0,-1);

});


/* ::▼:: other mathematic functions 
* that does not run with eval()Method :: */

/* '≈' round */
const round = document.querySelector('#round');

    round.addEventListener('click', ()=>{

    resultValue.innerText = Math.round(resultValue.innerText);

});

/* '√' root */
const root = document.querySelector('#root');
root.addEventListener('click',()=>{

    /** check if value is greater than 0 
    * or you can not calculate the square root*/
    if( resultValue.innerText > 0){

        const mathRoot = Math.sqrt(
            resultValue.innerText).toFixed(2);

        resultValue.innerText = `${mathRoot}`;
    }
    else{

        resultValue.innerText = 'ERROR';

        setTimeout(() => {
            
        resultValue.innerText = null;
    
        }, 1000);

    }
    
});


/* 'x²' power (potenz)  */
const power2 = document.querySelector('#power');

power2.addEventListener('click', ()=>{

        let squareRoot =  Math.pow(
            resultValue.innerText, 2).toFixed(2);

            resultValue.innerText = `${squareRoot}`;

});


/* :::::: ≡≡≡ :♦: ≡≡≡ :♦: the end :♦: ≡≡≡ :♦: ≡≡≡ ::::: */

}());
