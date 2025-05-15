import { Request, Response} from "express"
import { CalculationRequest } from "../Models/CalculationRequest"
import { ICalculatorService } from "../Service/ICalculatorService";
import {CalculationResponse} from "../Models/CalcularResponse";


export class CalculationController {
    private readonly calculatorService: ICalculatorService

    constructor(calculatorService: ICalculatorService){
        this.calculatorService = calculatorService
    }


    public calculate = (req:Request, res:Response): void => {
        const request : CalculationRequest = req.body 

        try{
            const result = this.calculatorService.calculate(request.operation,request.a,request.b)
            const response: CalculationResponse = { result };
            res.status(200).json(response);
        }catch(error: any) {
            res.status(400).json({message: error.message})
        }
    }

}
