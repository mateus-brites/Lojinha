import { getRepository, Repository } from "typeorm";
import { ICreateCustumerDTO } from "../DTO/ICreateCustumerDTO";
import { ILogInDTO } from "../DTO/ILogInDTO";
import { Customer } from "../entities/Customer";
import { ICustomerRepository } from "../Repositories/ICustumerRepositories";


class CustomerRepository implements ICustomerRepository{
    private repository: Repository<Customer>;

    constructor() {
        this.repository = getRepository(Customer);
    }
    async listAllCustomers(): Promise<Customer[]> {
        const customers = this.repository.find();

        return customers;
    }
    
    async findById(id: string): Promise<Customer> {
        const customer = await this.repository.findOne(id)

        return customer;
    }
    async findByEmail(email: string): Promise<Customer> {
        const customer = await this.repository.findOne({ email })

        return customer;
    }
    async create({ name, email, telefone, credCard, password }: ICreateCustumerDTO): Promise<Customer> {
        const customer = this.repository.create({ name, email, telefone, credCard, password });

        await this.repository.save(customer);
        console.log("oi");

        return customer
    }
    async addCredCard(credCard: number, id: string): Promise<Customer> {
        const customer = await this.repository.findOne(id)

        customer.credCard = credCard;

        await this.repository.save(customer);

        return customer

    }
    async logIn({ email, password }: ILogInDTO): Promise<string> {
        throw new Error("Method not implemented.");
    }
}

export { CustomerRepository }