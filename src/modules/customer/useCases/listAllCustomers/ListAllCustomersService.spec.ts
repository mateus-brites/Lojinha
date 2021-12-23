import { AppError } from "@/error/AppError";
import { beforeEach } from "@jest/globals";
import { InMemoryCustomerRepository } from "@modules/customer/InMemoryRepositories/CustomerRepositoryInMemory";
import { CreateCustomerService } from "../createCustomer/CreateCustomerService";
import { ListAllCustomersService } from "./ListAllCustomersService";



let customerRepository: InMemoryCustomerRepository;
let createCustomerService: CreateCustomerService;
let listAllCustomers: ListAllCustomersService;

describe("List all customers", () => {
    beforeEach(() => {
        customerRepository = new InMemoryCustomerRepository();
        createCustomerService = new CreateCustomerService(customerRepository);
        listAllCustomers = new ListAllCustomersService(customerRepository);
    });

    it("Should be to list all customers", async () => {
        const dataCustomer = {
            name: "Guilherme",
            email: "Guilherme@gmail.com",
            telefone: 19123456789,
            password: "123"
        }

        const dataCustomer2 = {
            name: "Mateus Henrique",
            email: "Mateusmmo15@gmail.com",
            telefone: 19995137830,
            password: "123"
        }

        const customer1 = await createCustomerService.execute(dataCustomer);
        const customer2 = await createCustomerService.execute(dataCustomer2);

        const allCustomers = await listAllCustomers.execute();

        expect(allCustomers).toEqual([customer1, customer2]);
    })
})
