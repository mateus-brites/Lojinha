import { AppError } from "@/error/AppError";
import { InMemoryProductRepository } from "@modules/product/InMemoryRepositories/ProductRepositoryInMemory";
import { CreateProductService } from "./CreateProductService";


let productRepository: InMemoryProductRepository;
let createProductService: CreateProductService;

describe("Create Product", () => {
    beforeEach(() => {
        productRepository = new InMemoryProductRepository();
        createProductService = new CreateProductService(productRepository);
    })

    it("Should be able to create a new product", async () => {
        const dataProduct = {
            name: "biscoito de vento",
            price: 3,
            quantity: 10
        }

        const product = await createProductService.execute(dataProduct);

        expect(product).toHaveProperty("id");
    })

    it("Should not be able to create a new produc if name already exist", async () => {
        const dataProduct = {
            name: "biscoito de vento",
            price: 3,
            quantity: 10
        }

        await createProductService.execute(dataProduct);

        await expect(
            createProductService.execute(dataProduct)
        ).rejects.toEqual( new AppError("The name of this product is already registered"))
    })
})