import { ICalculatorStrategy } from "./ICalculationStrategy";

 class Calculator {
    private strategy!: ICalculatorStrategy;

    public SetStrategy(Strategy: ICalculatorStrategy): void {
        this.strategy = Strategy ;
    }
}