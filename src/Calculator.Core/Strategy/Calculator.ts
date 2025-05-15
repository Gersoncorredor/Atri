import { ICalculationStrategy } from "./ICalculationStrategy";

 export class Calculator {
    private strategy!: ICalculationStrategy;

    public SetStrategy(Strategy: ICalculationStrategy): void {
        this.strategy = Strategy ;
    }
    
    public Calculate(a:number, b:number):number {
     return this.strategy.calculate(a,b)
    }
}