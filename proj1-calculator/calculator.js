import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';


// given an equation will calculate the result
const calculate = (firstOperand, optation, secondOperand) => {

    switch(optation) {
        
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
    }

    return equationResult;
}

const calculatorApp = async () => {
    let runningTotal = 0;
    while(true){
        const rl = readline.createInterface(input, output);
        const firstOperand = await rl.question("Enter first operand: ");
        const operator = await rl.question("Enter desired operation (+, -, /, *): ");
        const secondOperand = await rl.question("Enter second operand: ")
        const equation = firstOperand + operator + secondOperand;
        
        let result = calculate(parseInt(firstOperand), operator, parseInt(secondOperand));
        runningTotal += result;
        
        console.log(`equation is: ${equation}`);
        console.log(`result is: ${result}`);
        console.log(`running total: ${runningTotal}`);
    }
}

await calculatorApp();