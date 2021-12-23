import { AppError } from "@/error/AppError";
import { beforeEach } from "@jest/globals";
import { InMemoryCustomerRepository } from "@modules/customer/InMemoryRepositories/CustomerRepositoryInMemory";
import { CreateCustomerService } from "./CreateCustomerService";



let customerRepository: InMemoryCustomerRepository;
let createCustomerService: CreateCustomerService;

describe("create customer", () => {
    beforeEach(() => {
        customerRepository = new InMemoryCustomerRepository();
        createCustomerService = new CreateCustomerService(customerRepository);
    });

    it("Should be able to create a new customer", async () => {
        const dataCustomer = {
            name: "Guilherme",
            email: "Guilherme@gmail.com",
            telefone: 19123456789,
            password: "123"
        }

        const customer = await createCustomerService.execute(dataCustomer);

        expect(customer).toHaveProperty("id");
    })

    it("Should not be able to create a new user if email already exist", async () => {
        const dataCustomer1 = {
            name: "Guilherme",
            email: "Guilherme@gmail.com",
            telefone: 19123456789,
            password: "123"
        }

        const dataCustomer2 = {
            name: "Guilherme2",
            email: "Guilherme@gmail.com",
            telefone: 19123456789,
            password: "123"
        }

        await createCustomerService.execute(dataCustomer1);

        await expect( 
            createCustomerService.execute(dataCustomer2)
        ).rejects.toEqual( new AppError("Email already exist", 409))
    })
})
