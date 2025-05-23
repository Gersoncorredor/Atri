"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultStrategy = void 0;
class DefaultStrategy {
    constructor(operation) {
        this.Operation = operation;
    }
    calculate(a, b = 0) {
        return this.Operation.execute(a, b);
    }
}
exports.DefaultStrategy = DefaultStrategy;
