import { AppError } from "@/error/AppError";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { container } from "tsyringe";
import { AddCredCardService } from "./AddCredCardService";




class AddCredCardController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, credCard } = request.body;

        const addCredCardService = container.resolve(AddCredCardService);

        const errors = validationResult(request)

        if(!errors.isEmpty()){
            throw new AppError("Email invalid");
        }


        const customer = await addCredCardService.execute(credCard, id);

        return response.status(201).json(customer);
    }
}

export { AddCredCardController }