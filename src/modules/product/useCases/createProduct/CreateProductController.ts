import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductService } from "./CreateProductService"



class CreateProductController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, price, quantity } = request.body;

        const createProductService = container.resolve(CreateProductService);

        const product = await createProductService.execute({ name, price, quantity });

        return response.status(201).json(product);
    }
}

export { CreateProductController }