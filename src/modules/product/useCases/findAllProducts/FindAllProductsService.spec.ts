import { InMemoryProductRepository } from "@modules/product/InMemoryRepositories/ProductRepositoryInMemory";
import { CreateProductService } from "../createProduct/CreateProductService";
import { FindAllProductsService } from "./FindAllProductsService";


let productRepository: InMemoryProductRepository;
let findAllProductsService: FindAllProductsService;
let createProductService: CreateProductService;

describe("Find all products", () => {
    beforeEach(() => {
        productRepository = new InMemoryProductRepository();
        findAllProductsService = new FindAllProductsService(productRepository);
        createProductService = new CreateProductService(productRepository);
    })

    it("Should be able to list all products", async () => {
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

        const product1 = await createProductService.execute(productData1);
        const product2 = await createProductService.execute(productData2);
        const product3 = await createProductService.execute(productData3);

        const allProducts = await findAllProductsService.execute()

        expect(allProducts).toEqual([product1, product2, product3])
    })
})