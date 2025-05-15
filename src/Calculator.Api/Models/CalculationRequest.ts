
export class CalculationRequest {

    operation: string;
    a: number;
    b: number;

    constructor(Operation: string, A: number, B: number){        
        this.operation = Operation;
        this.a = A
        this.b = B
        
    }
}