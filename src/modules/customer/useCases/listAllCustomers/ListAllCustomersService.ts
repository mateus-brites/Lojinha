import { ICustomerRepository } from "@modules/customer/Repositories/ICustumerRepositories";
import { inject, injectable } from "tsyringe";



@injectable()
class ListAllCustomersService {
    constructor(
        @inject("CustomerRepository")
        private repository: ICustomerRepository
    ){}

    async execute(){
        const allCustomers = await this.repository.listAllCustomers();

        return allCustomers;
    }
}

export { ListAllCustomersService }