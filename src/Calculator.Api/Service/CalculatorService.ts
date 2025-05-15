import { ICalculatorService } from "./ICalculatorService";
import { Calculator } from "../../Calculator.Core/Strategy/Calculator"
import { DefaultStrategy } from "../../Calculator.Core/Strategy/Strategies/DefaulStrategy"
import { CreateOperationFactory } from "../../Calculator.Core/Factory/Operations/OperationFactory"

 export class CalculatorService implements ICalculatorService {

    public calculate(operation: string, a: number, b: number) {
        var calculator = new Calculator();
        calculator.SetStrategy(
            new DefaultStrategy(
                CreateOperationFactory.create(operation)
            )
        )
        return calculator.Calculate(a,b);
    }
}
