import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
const rl = readline.createInterface(input, output);
// given an equation will calculate the result
const calculate = (equation) => {
    switch (equation.operator) {
        case '+':
            return equation.firstNum + equation.secondNum;
        case '-':
            return equation.firstNum - equation.secondNum;
        case '*':
            return equation.firstNum * equation.secondNum;
        case '/':
            return equation.firstNum / equation.secondNum;
        default:
            throw Error(`${equation.operator} is not a valid arithmatic operation.`);
    }
};
const validateEquationNumbers = (equation) => {
    const firstNum = equation.firstNum;
    const secondNum = equation.secondNum;
    console.log(isNaN(firstNum) || isNaN(secondNum));
    if (isNaN(firstNum) || isNaN(secondNum)) {
        throw Error("Invalid input for one of the operands, ensure that each operand is a valid number and try again.");
    }
};
const calculatorApp = async () => {
    let runningTotal = 0;
    while (true) {
        const firstOperand = await rl.question("Enter first operand: ");
        const operator = await rl.question("Enter desired operation (+, -, /, *): ");
        const secondOperand = await rl.question("Enter second operand: ");
        const eq = {
            firstNum: parseInt(firstOperand),
            secondNum: parseInt(secondOperand),
            operator: operator
        };
        validateEquationNumbers(eq);
        const equationString = firstOperand + operator + secondOperand;
        const result = calculate(eq);
        runningTotal += result;
        console.log(`equation is: ${equationString}`);
        console.log(`result is: ${result}`);
        console.log(`running total: ${runningTotal}`);
    }
};
await calculatorApp();
