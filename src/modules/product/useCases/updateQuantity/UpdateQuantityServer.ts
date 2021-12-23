import { AppError } from "@/error/AppError";
import { Product } from "@modules/product/entities/Product";
import { IProductRepositories } from "@modules/product/Repositories/IProductRepositories";
import { inject, injectable } from "tsyringe";


injectable()
class UpdateQuantityService {
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepositories
    ){}

    async execute(id: string, quantity: number): Promise<void>{
        const product = await this.productRepository.findById(id)

        if(!product) {
            throw new AppError("id not found");
        }

        await this.productRepository.updateQuantity(id, quantity);
    }
}

export { UpdateQuantityService }