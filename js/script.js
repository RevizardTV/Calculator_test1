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
    
    displayNum=(displayNum*10)+sentNumber;
    setDisplay(displayNum);
    console.log("insertNumber called:",displayNum);
}

const operationEnterNumbers=(op)=>{
    let currentString=displayNum.toString();
    if(op==='-' && storedNums==="")
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

const equateNumbers=()=>{
    if(!(storedNums===""))
    {
        result=new Function(`return ${storedNums}`)();

    }
    storedNums="";
    console.log(result);
    setDisplay(result);
    setStored("");
}
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
        const valueNumbered=Number(value);
        if(!(Number.isNaN(valueNumbered)))
        {
            insertNumber(valueNumbered);
        }
        switch(value)
        {
            case '+':
            case '-':
            case '/':
            case '*':
                operationEnterNumbers(value);
                break;
            case '=':
                equateNumbers();
            default:
                console.log("Default condition reached");
                break;
        }
    }
})
