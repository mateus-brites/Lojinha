import { AppError } from "@/error/AppError";
import { InMemoryCustomerRepository } from "@modules/customer/InMemoryRepositories/CustomerRepositoryInMemory";
import { CreateCustomerService } from "../createCustomer/CreateCustomerService";
import { AddCredCardService } from "./AddCredCardService";



let customerRepository: InMemoryCustomerRepository;
let addCredCardService: AddCredCardService;
let createCustomerService: CreateCustomerService;

describe("Add cred card", () => {
    beforeEach(() => {
        customerRepository = new InMemoryCustomerRepository();
        addCredCardService = new AddCredCardService(customerRepository);
        createCustomerService = new CreateCustomerService(customerRepository);
    })

    it("Should be able to add a new cred card", async () => {
        const dataCustomer = {
            name: "Guilherme",
            email: "Guilherme@gmail.com",
            telefone: 19123456789,
            password: "123"
        }

        const customer = await createCustomerService.execute(dataCustomer);

        const customerWithCredCard = await addCredCardService.execute(123456, customer.id);

        expect(customerWithCredCard.credCard).toEqual(123456);
    })

    it("Should not be able to update a cred card if id does not exist", async () => {
        const dataCustomer = {
            name: "Guilherme",
            email: "Guilherme@gmail.com",
            telefone: 19123456789,
            password: "123"
        }

        await createCustomerService.execute(dataCustomer);

        await expect(
            addCredCardService.execute(123456, "not existent")
        ).rejects.toEqual( new AppError("id not found"))
    })
})