import { ICalculationStrategy } from "./ICalculationStrategy";

 class Calculator {
    private strategy!: ICalculationStrategy;

    public SetStrategy(Strategy: ICalculationStrategy): void {
        this.strategy = Strategy ;
    }
}