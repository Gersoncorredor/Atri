"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    SetStrategy(Strategy) {
        this.strategy = Strategy;
    }
    Calculate(a, b) {
        return this.strategy.calculate(a, b);
    }
}
exports.Calculator = Calculator;
