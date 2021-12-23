import { InMemoryProductRepository } from "@modules/product/InMemoryRepositories/ProductRepositoryInMemory";
import { CreateProductService } from "../createProduct/CreateProductService";
import { FindProductsByNameService } from "./FindProductsByNameService";


let productRepository: InMemoryProductRepository;
let findProductsByNameService: FindProductsByNameService;
let createProductService: CreateProductService;

describe("Find a products", () => {
    beforeEach(() => {
        productRepository = new InMemoryProductRepository();
        findProductsByNameService = new FindProductsByNameService(productRepository);
        createProductService = new CreateProductService(productRepository);
    })

    it("Should be able find product by name", async () => {
        const productData1 = {
            name: "biscoito de vento",
            quantity: 13,
            price: 2.8
        }

        const productData2 = {
            name: "biscoito traquinas",
            quantity: 10,
            price: 1
        }

        const productData3 = {
            name: "biscoito ruffles",
            quantity: 20,
            price: 4
        }

        await createProductService.execute(productData1);
        const product2 = await createProductService.execute(productData2);
        await createProductService.execute(productData3);

        const product = await findProductsByNameService.execute(productData2.name)

        expect(product).toEqual(product2)
    })
})