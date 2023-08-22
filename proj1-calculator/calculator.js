import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

let runningTotal = 0;
// given an equation will calculate the result
const calculate = (equation) => {
    const addRegex = new RegExp(/[+]/);
    const subRegex = new RegExp(/[-]/);
    const multRegex = new RegExp(/[*x]/);
    const divRegex = new RegExp(/[/]/);

    let numbers = [];
    let equationResult = 0;
    // matches on + - / x *
    const operatorRegex = /[\+\-\x\*\/]/g;
    const type = operatorRegex.exec(equation);
    switch(type[0]) {
        
        case '+':
            numbers = equation.split(addRegex);
            console.log(numbers);
        
            equationResult = numbers.reduce((a,b) => parseInt(a)+parseInt(b));
            console.log(equationResult);
            break;
        case '-':
            numbers = equation.split(subRegex);
            equationResult = numbers.reduce((a,b) => parseInt(a)-parseInt(b));
            break;
        case 'x':
        case '*':
            numbers = equation.split(multRegex);
            equationResult = numbers.reduce((a,b) => parseInt(a)*parseInt(b));
            break;
        case '/':
            numbers = equation.split(divRegex);
            equationResult = numbers.reduce((a,b) => parseInt(a)/parseInt(b));
            break;
    }

    return equationResult;
}

while(true){
    const rl = readline.createInterface(input, output);
    const currentEquation = await rl.question("What do you want to calculate? ");
    let result = calculate(currentEquation);
    runningTotal += result;
    console.log(`equation is: ${currentEquation}`);
    console.log(`result is: ${result}`);
    console.log(`running total: ${runningTotal}`);
}