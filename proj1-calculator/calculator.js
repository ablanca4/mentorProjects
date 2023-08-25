"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("node:readline/promises");
var node_process_1 = require("node:process");
var rl = readline.createInterface(node_process_1.stdin, node_process_1.stdout);
// given an equation will calculate the result
var calculate = function (equation) {
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
            throw Error("".concat(equation.operator, " is not a valid arithmatic operation."));
    }
};
var calculatorApp = function () { return __awaiter(void 0, void 0, void 0, function () {
    var runningTotal, firstOperand, operator, secondOperand, eq, equationString, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                runningTotal = 0;
                _a.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 5];
                return [4 /*yield*/, rl.question("Enter first operand: ")];
            case 2:
                firstOperand = _a.sent();
                return [4 /*yield*/, rl.question("Enter desired operation (+, -, /, *): ")];
            case 3:
                operator = _a.sent();
                return [4 /*yield*/, rl.question("Enter second operand: ")];
            case 4:
                secondOperand = _a.sent();
                eq = {
                    firstNum: parseInt(firstOperand),
                    secondNum: parseInt(secondOperand),
                    operator: operator
                };
                equationString = firstOperand + operator + secondOperand;
                result = calculate(eq);
                runningTotal += result;
                console.log("equation is: ".concat(equationString));
                console.log("result is: ".concat(result));
                console.log("running total: ".concat(runningTotal));
                return [3 /*break*/, 1];
            case 5: return [2 /*return*/];
        }
    });
}); };
await calculatorApp();
