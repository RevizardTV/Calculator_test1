//Importing
import { create, all } from 'https://unpkg.com/mathjs@11.8.0/lib/esm/index.js'
const math = create(all)

//Functions

const consoleChecker=()=>{
    console.log("DisplayNum:",displayNum,"\nStoredNums:",storedNums);
}

const resetter=()=>{
    displayNum=0;
    storedNums="";
    setDisplay(displayNum);
    setStored(storedNums);
    console.log(displayNum,"RESETED!");
}

const insertNumber=(sentNumber)=>{
    console.log("Sent Number:",sentNumber);
    console.log("Display on preinsertion:",displayNum);
    displayNum=(displayNum*10)+sentNumber;
    setDisplay(displayNum);
    console.log("Display on InsertNumber set:",displayNum);
}

const operationEnterNumbers=(op)=>{
    let currentString=displayNum.toString();
    if(op==='-' && storedNums==="" && displayNum>0)
    {
        storedNums+="-"+currentString;
    }
    else if(storedNums==="")
    {
        storedNums+=currentString;
    }
    else
    {
        storedNums+=op+currentString;
    }
    displayNum=0;
    setDisplay(displayNum);
    setStored(storedNums);
}

const calculate = (problem) => {
    try {
        // Math.js automatically understands order of operations (PEMDAS)
        const result = math.evaluate(problem);
        displayCurrentValue.innerText = result;
    } catch (error) {
        displayCurrentValue.innerText = "Error";
        console.error("Math Error:", error);
    }
};
//Archived
/*
    
const addNumbers=()=>{
    if(storedNums==="")
    {
        storedNums=displayNum.toString();
    }
    else
    {
        storedNums+="+"+displayNum.toString();
    }
    displayNum=0;
    setDisplay(displayNum);
    setStored(storedNums);
}

const subtractNumbers=()=>{
    
    storedNums+="-"+displayNum.toString();
    displayNum=0;
    setDisplay(displayNum);
    setStored(storedNums);
}

const multiplyNumbers=()=>{
    if(storedNums==="")
    {
        storedNums=displayNum.toString();
    }
    else
    {
        storedNums+="*"+displayNum.toString();
    }
    displayNum=0;
    setDisplay(displayNum);
    setStored(storedNums);
}

const divideNumbers=()=>{
    if(storedNums==="")
    {
        storedNums=displayNum.toString();
    }
    else
    {
        storedNums+="/"+displayNum.toString();
    }
    displayNum=0;
    setDisplay(displayNum);
    setStored(storedNums);
}
*/


// Variable initiation
//let storedNum=0;
let displayNum=0;
let storedNums="";
let result=0;
let valueNumbered=0;
//Node linking
const displayStoredValue=document.getElementById("storedNum");
const displayCurrentValue=document.getElementById("calcNum");
const consoleButton=document.getElementById("Console");
const resetButton=document.getElementById("Reset");
const keypad=document.querySelector(".buttonGrid");

//Presentation connections
const setDisplay=(newValue)=>{
    displayNum=newValue;
    displayCurrentValue.innerText=newValue.toString();
}
const setStored=(newValue)=>{
    displayStoredValue.innerText=newValue
}

//EventListeners

resetButton.addEventListener("click",resetter);

consoleButton.addEventListener("click",consoleChecker);

keypad.addEventListener("click",(event)=>{
    if(event.target.classList.contains("buttonItems")){
        const value=event.target.innerText;
        if(displayNum<0)
        {
            valueNumbered=Number(-value);
        }
        else
        {
             valueNumbered=Number(value);
        }
        if(!(Number.isNaN(valueNumbered)))
        {
            console.log("VALUE NUMBER CALLED:",valueNumbered);
            insertNumber(valueNumbered);
            
        }
        switch(value)
        {
            case '+':
            case '-':
            case '//':
            case '*':
                operationEnterNumbers(value);
                break;
            case '=':
                calculate(storedNums);
            default:
                console.log("Default condition reached");
                break;
        }
    }
})
