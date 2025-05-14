import { ICalculationStrategy } from "../ICalculationStrategy";
import { IOperation } from "../../Factory/IOperation";

export class DefaultStrategy implements ICalculationStrategy  {

    private readonly Operation: IOperation;

    constructor(operation: IOperation) {
        this.Operation = operation;
    }
    
    public calculate(a: number, b: number = 0): number {
        return this.Operation.execute(a, b);
    }
}
