import { AppError } from "@/error/AppError";
import { ICreateProductDTO } from "@modules/product/DTO/ICreateProductDTO";
import { Product } from "@modules/product/entities/Product";
import { IProductRepositories } from "@modules/product/Repositories/IProductRepositories";
import { inject, injectable } from "tsyringe";


@injectable()
class CreateProductService {
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepositories
    ){}

    async execute({ name, price, quantity}: ICreateProductDTO): Promise<Product>{
        const findProductByName = await this.productRepository.findByName(name)

        if (findProductByName){
            throw new AppError("The name of this product is already registered")
        }
        const product = this.productRepository.create({ quantity, price, name});

        return product
    }
}

export { CreateProductService }