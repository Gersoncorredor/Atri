"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorService = void 0;
const Calculator_1 = require("../../Calculator.Core/Strategy/Calculator");
const DefaulStrategy_1 = require("../../Calculator.Core/Strategy/Strategies/DefaulStrategy");
const OperationFactory_1 = require("../../Calculator.Core/Factory/Operations/OperationFactory");
class CalculatorService {
    calculate(operation, a, b) {
        var calculator = new Calculator_1.Calculator();
        calculator.SetStrategy(new DefaulStrategy_1.DefaultStrategy(OperationFactory_1.CreateOperationFactory.create(operation)));
        return calculator.Calculate(a, b);
    }
}
exports.CalculatorService = CalculatorService;
