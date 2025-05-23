"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = exports.Reciprocal = exports.Modulus = exports.Division = exports.Multiplication = exports.Subtraction = exports.Addition = void 0;
class Addition {
    execute(a, b) {
        return a + b;
    }
}
exports.Addition = Addition;
class Subtraction {
    execute(a, b) {
        return a - b;
    }
}
exports.Subtraction = Subtraction;
class Multiplication {
    execute(a, b) {
        return a * b;
    }
}
exports.Multiplication = Multiplication;
class Division {
    execute(a, b) {
        if (a === 0)
            throw new Error("No se puede dividir por cero.");
        return a / b;
    }
}
exports.Division = Division;
class Modulus {
    execute(a, b) {
        return a % b;
    }
}
exports.Modulus = Modulus;
class Reciprocal {
    execute(a, b) {
        if (a === 0)
            throw new Error("No se puede dividir por cero.");
        return 1 / a;
    }
}
exports.Reciprocal = Reciprocal;
class Square {
    execute(a, b) {
        return Math.sqrt(a);
    }
}
exports.Square = Square;
