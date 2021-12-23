import { InMemoryCustomerRepository } from "@modules/customer/InMemoryRepositories/CustomerRepositoryInMemory";
import { CreateCustomerService } from "@modules/customer/useCases/createCustomer/CreateCustomerService";
import { OrdersRepositoryInMemory } from "@modules/order/InMemoryRepositories/OrderRepositoryInMemory";
import { Product } from "@modules/product/entities/Product";
import { InMemoryProductRepository } from "@modules/product/InMemoryRepositories/ProductRepositoryInMemory";
import { CreateProductService } from "@modules/product/useCases/createProduct/CreateProductService";
import { CreateOrderService } from "./CreateOrderService";



let orderRepository: OrdersRepositoryInMemory;
let createOrderService: CreateOrderService;
let createCustomerService: CreateCustomerService;
let customerRepository: InMemoryCustomerRepository;
let productRepository: InMemoryProductRepository;
let createProductService: CreateProductService;

describe("Create Order", () => {
    beforeEach(() => {
        orderRepository = new OrdersRepositoryInMemory()
        createOrderService = new CreateOrderService(orderRepository)
        customerRepository = new InMemoryCustomerRepository();
        createCustomerService = new CreateCustomerService(customerRepository);
        productRepository = new InMemoryProductRepository();
        createProductService = new CreateProductService(productRepository);
    })

    it("Should be able to create a new order", async () => {
        const dataCustomer = {
            name: "Guilherme",
            email: "Guilherme@gmail.com",
            telefone: 19123456789,
            password: "123"
        }

        const customer = await createCustomerService.execute(dataCustomer);

        const dataProduct = {
            name: "biscoito de vento",
            price: 3,
            quantity: 10
        }

        const dataProduct2 = {
            name: "biscoito mirabel",
            price: 3,
            quantity: 10
        }

        const product1 = await createProductService.execute(dataProduct);
        const product2 = await createProductService.execute(dataProduct2);

        const dataOrder = {
            customer_id: customer.id,
            order: [
                {
                    id: product1.id,
                    quantity: 1
                },
                {
                    id: product2.id,
                    quantity: 2
                }
            ]
        }

        

        const storage = await createOrderService.execute(dataOrder);

        console.log(storage);

        expect(storage).toHaveProperty("id");
    })
})