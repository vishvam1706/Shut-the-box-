let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');
let box9 = document.getElementById('box9');
let d1 = document.getElementById('d1');
let d2 = document.getElementById('d2');
let rollDice = document.getElementById('rollDice');
let hideContent = document.getElementById('hideContent');


function changeDiceValue() {
    if(diceTotal==0)
    {
        rollDice.style.backgroundColor = '#c2fbd7';
    }
    else
    {
        rollDice.style.backgroundColor = '#fbcdc2';
    }
}


let num1 = parseInt(Math.random()*(7-1)+1);
let num2 = parseInt(Math.random()*(7-1)+1);
let total = 45;
let arr = [1,2,3,4,5,6,7,8,9];

let diceTotal = num1+num2;

function winLose()
{
    if(diceTotal == 0 && total == 0 && arr.length == 0)
    {
        rollDice.style.backgroundColor = '#c2fbd7';
        setTimeout(() => {
            hideContent.style.display = 'block';
            hideContent.innerText = 'You Win The Game';
            hideContent.style.backgroundColor = '#93ff7e';
        }, 0);
        setTimeout(() => {
            hideContent.style.display = 'none';
        }, 2000);
        rollDice.innerText = 'Play Again?';
    }
}

function newGame() {
    total = 45;
    arr = [1,2,3,4,5,6,7,8,9];

    d1.innerText=num1;
    d2.innerText=num2;

    diceTotal = num1+num2;
    rollDice.style.backgroundColor = '#c2fbd7';
    box1.style.backgroundColor = '#4eff18b0';
    box2.style.backgroundColor = '#4eff18b0';
    box3.style.backgroundColor = '#4eff18b0';
    box4.style.backgroundColor = '#4eff18b0';
    box5.style.backgroundColor = '#4eff18b0';
    box6.style.backgroundColor = '#4eff18b0';
    box7.style.backgroundColor = '#4eff18b0';
    box8.style.backgroundColor = '#4eff18b0';
    box9.style.backgroundColor = '#4eff18b0';

    box1.addEventListener('click',()=>{
        let value = 1;
        if (arr.includes(value)===true) {
            box1.style.backgroundColor = '#ff2718b0';
            total -= value;
            arr.splice(arr.indexOf(value),1);
            diceTotal -= value;
            changeDiceValue();
            winLose();
            console.log(total);
            console.log(arr);
            console.log(diceTotal);
            console.log(value);
        }
    });

    box2.addEventListener('click',()=>{
        let value = 2;
        if (arr.includes(value)===true) {
            box2.style.backgroundColor = '#ff2718b0';
            total -= value;
            arr.splice(arr.indexOf(value),1);
            diceTotal -= value;
            changeDiceValue();
            winLose();
            console.log(total);
            console.log(arr);
            console.log(diceTotal);
        }
    });

    box3.addEventListener('click',()=>{
        let value = 3;
        if (arr.includes(value)===true) {
            box3.style.backgroundColor = '#ff2718b0';
            total -= value;
            arr.splice(arr.indexOf(value),1);
            diceTotal -= value;
            changeDiceValue();
            winLose();
            console.log(total);
            console.log(arr);
            console.log(diceTotal);
        }
    });

    box4.addEventListener('click',()=>{
        let value = 4;
        if (arr.includes(value)===true) {
            box4.style.backgroundColor = '#ff2718b0';
            total -= value;
            arr.splice(arr.indexOf(value),1);
            diceTotal -= value;
            changeDiceValue();
            winLose();
            console.log(total);
            console.log(arr);
            console.log(diceTotal);
        }
    });

    box5.addEventListener('click',()=>{
        let value = 5;
        if (arr.includes(value)===true) {
            box5.style.backgroundColor = '#ff2718b0';
            total -= value;
            arr.splice(arr.indexOf(value),1);
            diceTotal -= value;
            changeDiceValue();
            winLose();
            console.log(total);
            console.log(arr);
            console.log(diceTotal);
        }
    });

    box6.addEventListener('click',()=>{
        let value = 6;
        if (arr.includes(value)===true) {
            box6.style.backgroundColor = '#ff2718b0';
            total -= value;
            arr.splice(arr.indexOf(value),1);
            diceTotal -= value;
            changeDiceValue();
            winLose();
            console.log(total);
            console.log(arr);
            console.log(diceTotal);
        }
    });

    box7.addEventListener('click',()=>{
        let value = 7;
        if (arr.includes(value)===true) {   
            box7.style.backgroundColor = '#ff2718b0';
            total -= value;
            arr.splice(arr.indexOf(value),1);
            diceTotal -= value;
            changeDiceValue();
            winLose();  
            console.log(total);
            console.log(arr);
            console.log(diceTotal);
        }
    });

    box8.addEventListener('click',()=>{
        let value = 8;
        if (arr.includes(value)===true) {   
            box8.style.backgroundColor = '#ff2718b0';
            total -= value;
            arr.splice(arr.indexOf(value),1);
            diceTotal -= value;
            changeDiceValue();
            winLose();
            console.log(arr);   
            console.log(total);
            console.log(diceTotal);
        }
    });

    box9.addEventListener('click',()=>{
        let value = 9;
        if (arr.includes(value)===true) {   
            box9.style.backgroundColor = '#ff2718b0';
            total -= value;
            arr.splice(arr.indexOf(value),1);
            diceTotal -= value;
            changeDiceValue();
            winLose();
            console.log(total);
            console.log(arr); 
            console.log(diceTotal);
        }
    });
}
rollDice.addEventListener('click',()=>{
    if(diceTotal==0)
    {
        if(arr.length == 2)
        {
            num1 = arr[0];
            num2 = arr[1];
            d1.innerText=num1;
            d2.innerText=num2;
            diceTotal = num1+num2;
            rollDice.style.backgroundColor = '#c2fbd7';
        }
        else if (total == 0) {
            rollDice.innerText = 'click to roll the dice';
            newGame();
        }
        else
        {
            num1 = parseInt(Math.random()*(7-1)+1);
            num2 = parseInt(Math.random()*(7-1)+1);
            d1.innerText=num1;
            d2.innerText=num2;
            rollDice.style.backgroundColor = '#c2fbd7';
            diceTotal = num1+num2;
            console.log('tp');
        }
    }
    else if (diceTotal<0 || diceTotal>0) {
        num1 = parseInt(Math.random()*(7-1)+1);
        num2 = parseInt(Math.random()*(7-1)+1);
        d1.innerText=num1;
        d2.innerText=num2;
        diceTotal = num1+num2;
        rollDice.style.backgroundColor = '#fbcdc2';
        setTimeout(() => {
            hideContent.style.display = 'block';
            hideContent.innerText = 'Retry'
            hideContent.style.backgroundColor = '#ff7e7e'
        }, 0);
        setTimeout(() => {
            hideContent.style.display = 'none';
        }, 2000);
        newGame();
    }
    else
    {
        rollDice.style.backgroundColor = '#fbcdc2';
        d1.innerText=num1;
        d2.innerText=num2;
    }
});

newGame();