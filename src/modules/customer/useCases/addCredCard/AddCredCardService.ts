import { AppError } from "@/error/AppError";
import { Customer } from "@modules/customer/entities/Customer";
import { ICustomerRepository } from "@modules/customer/Repositories/ICustumerRepositories";
import { inject, injectable } from "tsyringe";


@injectable()
class AddCredCardService {
    constructor(
        @inject("CustomerRepository")
        private customerRepository: ICustomerRepository
    ){}

    async execute(credCard: number, id: string): Promise<Customer>{
        const findCustomerById = await this.customerRepository.findById(id);

        if (!findCustomerById) {
            throw new AppError("id not found")
        }
        const customer = await this.customerRepository.addCredCard(credCard, id);

        return customer
        
    }
}

export { AddCredCardService }