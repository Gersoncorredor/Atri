import { IOperation } from "../IOperation";

export class Addition implements IOperation {
    execute(a:number, b:number): number  {
        return a + b;
    }
}
export class Subtraction implements IOperation {
    execute(a:number, b:number): number  {
        return a - b;
    }
}

export class Multiplication implements IOperation {
    execute(a:number, b:number): number  {
        return a * b;
    }
}
export class Division implements IOperation {
    execute(a:number, b:number): number  {
        if (a === 0) throw new Error("No se puede dividir por cero."); 
        return a / b;
    }
}

export class Modulus implements IOperation {
    execute(a:number, b:number): number  {
        return a % b;
    }
}

export class Reciprocal implements IOperation {
    execute(a:number, b:number): number  {
        if (a === 0) throw new Error("No se puede dividir por cero.");
        return 1 / a;
    }
}

export class Square implements IOperation {
    execute(a:number, b:number): number  {
        return Math.sqrt(a);
    }
}