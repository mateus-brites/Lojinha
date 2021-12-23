import { ICreateProductDTO } from "../DTO/ICreateProductDTO";
import { Product } from "../entities/Product";
import { IProductRepositories } from "../Repositories/IProductRepositories";


class InMemoryProductRepository implements IProductRepositories {
    private repository: Product[] = [];

    async create({ name, price, quantity }: ICreateProductDTO): Promise<Product> {
        const product = new Product()

        Object.assign(product, {
            name,
            price,
            quantity
        })

        this.repository.push(product);

        return product
    }
    async findAll(): Promise<Product[]> {
        return this.repository;
    }
    async findByName(name: string): Promise<Product> {
        return this.repository.find(product => product.name === name);
    }
    async findById(id: string): Promise<Product> {
        return this.repository.find(product => product.id === id);
    }
    async updateQuantity(id: string, quantity: number): Promise<void> {
        const product = this.repository.find(product => product.id === id);
        product.quantity = quantity;
    }
}

export { InMemoryProductRepository }