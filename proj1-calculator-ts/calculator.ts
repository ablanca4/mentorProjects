import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';


const rl = readline.createInterface(input, output);
type Equation = {
    firstNum:number;
    operator:string;
    secondNum:number;
}
// given an equation will calculate the result
const calculate = (equation:Equation):number => {

    switch(equation.operator) {
        
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
}

const validateEquationNumbers = (equation:Equation) => {
    const firstNum = equation.firstNum;
    const secondNum = equation.secondNum;

    console.log(isNaN(firstNum) || isNaN(secondNum));
    if (isNaN(firstNum) || isNaN(secondNum)) {
        throw Error("Invalid input for one of the operands, ensure that each operand is a valid number and try again.")
    }
}

const calculatorApp = async () => {
    let runningTotal:number = 0;
    while(true){
        
        const firstOperand:string = await rl.question("Enter first operand: ");
        const operator:string = await rl.question("Enter desired operation (+, -, /, *): ");
        const secondOperand:string = await rl.question("Enter second operand: ");

        const eq:Equation = {
            firstNum: parseInt(firstOperand),
            secondNum: parseInt(secondOperand),
            operator: operator
        }

        validateEquationNumbers(eq);

        const equationString:string = firstOperand + operator + secondOperand;
        const result = calculate(eq);
        runningTotal += result;
        
        console.log(`equation is: ${equationString}`);
        console.log(`result is: ${result}`);
        console.log(`running total: ${runningTotal}`);
    }
}

await calculatorApp();