import express from 'express';
import { CalculatorService } from './Calculator.Api/Service/CalculatorService';
import { CalculationController } from './Calculator.Api/Controllers/CalculatorController';

const app = express();
app.use(express.json());

const calculatorService = new CalculatorService();
const calculationController = new CalculationController(calculatorService);

app.get('/', (req, res) => {
  res.send('API está corriendo correctamente');
});


app.post('/calculate', calculationController.calculate.bind(calculationController));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`puerto :${PORT}`);
});
