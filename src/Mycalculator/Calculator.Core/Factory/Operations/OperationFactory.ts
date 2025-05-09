import { IOperation } from "../IOperation";
import { Addition,Subtraction,Multiplication,Division,Modulus,Reciprocal,Square } from "./Operation";

export class CreateOperationFactory {
    static create(operationType: string): IOperation {
        switch (operationType) {
            case "+":
                return new Addition();
            case "-":
                return new Subtraction();
            case "*":
                return new Multiplication();
            case "/":
                return new Division();
            case "%":
                return new Modulus();
            case "r":
                return new Reciprocal();
            case "a":
                return new Square();
            default:
                throw new Error("Invalid operation type");
        }

    }

}