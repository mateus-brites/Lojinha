import { Product } from "@modules/product/entities/Product";
import { IProductRepositories } from "@modules/product/Repositories/IProductRepositories";
import { inject, injectable } from "tsyringe";


injectable()
class FindAllProductsService {
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepositories
    ){}

    async execute(): Promise<Product[]>{
        const findAllProducts = await this.productRepository.findAll()
        
        return findAllProducts
    }
}

export { FindAllProductsService }