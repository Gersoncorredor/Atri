"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculationController = void 0;
class CalculationController {
    constructor(calculatorService) {
        this.calculate = (req, res) => {
            const request = req.body;
            try {
                const result = this.calculatorService.calculate(request.operation, request.a, request.b);
                const response = { result };
                res.status(200).json(response);
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        };
        this.calculatorService = calculatorService;
    }
}
exports.CalculationController = CalculationController;
