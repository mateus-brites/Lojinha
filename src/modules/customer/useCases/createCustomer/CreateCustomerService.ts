import { AppError } from "@/error/AppError";
import { ICreateCustumerDTO } from "@modules/customer/DTO/ICreateCustumerDTO";
import { Customer } from "@modules/customer/entities/Customer";
import { ICustomerRepository } from "@modules/customer/Repositories/ICustumerRepositories";
import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { body, validationResult } from "express-validator"



@injectable()
class CreateCustomerService {
    constructor(
        @inject("CustomerRepository")
        private customerRepository: ICustomerRepository
    ) {}

    async execute({name, email, password, telefone, credCard}: ICreateCustumerDTO): Promise<Customer> {
        const findEmail = await this.customerRepository.findByEmail(email)

        if(findEmail){
            throw new AppError("Email already exist", 409);
        }



        const passwordHashad = await hash(password, 8)
        
        const customer = await this.customerRepository.create({name, email, password: passwordHashad, telefone, credCard});
    
        return customer;
    }
}

export { CreateCustomerService };