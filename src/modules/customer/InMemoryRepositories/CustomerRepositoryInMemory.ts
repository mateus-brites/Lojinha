import { ICreateCustumerDTO } from "../DTO/ICreateCustumerDTO";
import { ILogInDTO } from "../DTO/ILogInDTO";
import { Customer } from "../entities/Customer";
import { ICustomerRepository } from "../Repositories/ICustumerRepositories";


class InMemoryCustomerRepository implements ICustomerRepository{
    private repository: Customer[] = [];

    async listAllCustomers(): Promise<Customer[]> {
        return this.repository
    }

    async findById(id: string): Promise<Customer> {
        return this.repository.find((customer) => customer.id === id )
    }

    async create({ name, email, telefone, credCard, password }: ICreateCustumerDTO): Promise<Customer> {
        const customer = new Customer()

        Object.assign(customer, {
            name,
            email,
            telefone,
            credCard,
            password
        })

        this.repository.push(customer);

        return customer
        
    }
    async addCredCard(credCard: number, id: string): Promise<Customer> {
        const customer = this.repository.find((customer) => customer.id === id )

        customer.credCard = credCard;

        return customer
    }
    logIn({ email, password }: ILogInDTO): Promise<string> {
        throw new Error("Method not implemented.");
    }

    async findByEmail(email: string): Promise<Customer> {
        const Email = this.repository.find((customer) => customer.email === email);

        return Email;
    }
}

export { InMemoryCustomerRepository }