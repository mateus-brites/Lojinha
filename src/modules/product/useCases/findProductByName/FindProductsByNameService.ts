import { Product } from "@modules/product/entities/Product";
import { IProductRepositories } from "@modules/product/Repositories/IProductRepositories";
import { inject, injectable } from "tsyringe";


injectable()
class FindProductsByNameService {
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepositories
    ){}

    async execute(name: string): Promise<Product>{
        const product = await this.productRepository.findByName(name)
        
        return product
    }
}

export { FindProductsByNameService }