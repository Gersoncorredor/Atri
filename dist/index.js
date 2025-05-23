"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CalculatorService_1 = require("./Calculator.Api/Service/CalculatorService");
const CalculatorController_1 = require("./Calculator.Api/Controllers/CalculatorController");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const calculatorService = new CalculatorService_1.CalculatorService();
const calculationController = new CalculatorController_1.CalculationController(calculatorService);
app.post('/calculate', calculationController.calculate.bind(calculationController));
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`puerto :${PORT}`);
});
