const express = require('express');
const { CalculatorService } = require('./Service/CalculatorService'); 
const { CalculationController } = require('./Controllers/CalculatorController');  

const app = express();

app.use(express.json());

const calculatorService = new CalculatorService();

const calculationController = new CalculationController(calculatorService);

app.post("/calculate", calculationController.calculate);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`puerto :${PORT}`);
});
