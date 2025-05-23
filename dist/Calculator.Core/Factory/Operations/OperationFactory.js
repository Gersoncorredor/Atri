"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOperationFactory = void 0;
const Operation_1 = require("./Operation");
class CreateOperationFactory {
    static create(operationType) {
        switch (operationType) {
            case "+":
                return new Operation_1.Addition();
            case "-":
                return new Operation_1.Subtraction();
            case "*":
                return new Operation_1.Multiplication();
            case "/":
                return new Operation_1.Division();
            case "%":
                return new Operation_1.Modulus();
            case "r":
                return new Operation_1.Reciprocal();
            case "a":
                return new Operation_1.Square();
            default:
                throw new Error("Invalid operation type");
        }
    }
}
exports.CreateOperationFactory = CreateOperationFactory;
