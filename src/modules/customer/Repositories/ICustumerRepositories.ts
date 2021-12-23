import { ICreateCustumerDTO } from "../DTO/ICreateCustumerDTO";
import { ILogInDTO } from "../DTO/ILogInDTO";
import { Customer } from "../entities/Customer"



interface ICustomerRepository{
    listAllCustomers(): Promise<Customer[]>
    findById(id: string): Promise<Customer>;
    findByEmail(email: string): Promise<Customer>;
    create({name, email, telefone, credCard, password}: ICreateCustumerDTO): Promise<Customer>;
    addCredCard(credCard: number, id: string): Promise<Customer>;
    logIn({email , password}: ILogInDTO): Promise<string>;
}

export { ICustomerRepository }