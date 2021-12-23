import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCustomerService } from "./CreateCustomerService";




class CreateCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, telefone, credCard, password } = request.body;

        const createCustomerService = container.resolve(CreateCustomerService);

        const customer = await createCustomerService.execute({ name, email, telefone, credCard, password });

        return response.status(201).json(customer);
    }
}

export { CreateCustomerController }