import { AppError } from "@/error/AppError";
import { InMemoryProductRepository } from "@modules/product/InMemoryRepositories/ProductRepositoryInMemory";
import { CreateProductService } from "../createProduct/CreateProductService";
import { UpdateQuantityService } from "./UpdateQuantityServer";


let productRepository: InMemoryProductRepository;
let createProductService: CreateProductService;
let updateQuantityService: UpdateQuantityService;

describe("Update Quantity", () => {
    beforeEach(() => {
        productRepository = new InMemoryProductRepository();
        createProductService = new CreateProductService(productRepository);
        updateQuantityService = new UpdateQuantityService(productRepository);
    })

    it("Should update a quantity of a product", async () => {
        const dataProduct = {
            name: "biscoito de vento",
            price: 3,
            quantity: 10
        }

        const product = await createProductService.execute(dataProduct);

        await updateQuantityService.execute(product.id, 8);

        expect(product.quantity).toEqual(8);
    })

    it("Should not be able update a quantity if id does not exist", async () => {
        const dataProduct = {
            name: "biscoito de vento",
            price: 3,
            quantity: 10
        }

        await createProductService.execute(dataProduct);

        await expect(
            updateQuantityService.execute("1234", 9)
        ).rejects.toEqual( new AppError("id not found"))
    })
})