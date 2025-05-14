import express, { Request, Response } from 'express';
import { CalculatorService } from './Calculator.Api/Service/CalculatorService';
import { CalculationController } from './Calculator.Api/Controllers/CalculatorController';

const app = express();
app.use(express.json());

const calculatorService = new CalculatorService();
const calculationController = new CalculationController(calculatorService);


app.post('/calculate', calculationController.calculate.bind(calculationController));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`puerto :${PORT}`);
});
