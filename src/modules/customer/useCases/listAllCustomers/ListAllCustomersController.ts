import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllCustomersService } from "./ListAllCustomersService";



class ListAllCustomersController {
    async handle(request: Request, response: Response): Promise<Response> {

        const listAllCustomersService = container.resolve(ListAllCustomersService);

        const allCustomers = await listAllCustomersService.execute();

        return response.status(200).json(allCustomers);
    }
}

export { ListAllCustomersController }