import { getRepository, Repository } from "typeorm";
import { ICreateProductDTO } from "../DTO/ICreateProductDTO";
import { Product } from "../entities/Product";
import { IProductRepositories } from "./IProductRepositories";



class ProductRepository implements IProductRepositories{
    private repository: Repository<Product>;

    constructor(){
        this.repository = getRepository(Product);
    }

    async create({ name, price, quantity }: ICreateProductDTO): Promise<Product> {
        const product = this.repository.create({ name, price, quantity });

        await this.repository.save(product);

        return product;
    }
    async findAll(): Promise<Product[]> {
        const allProducts = await this.repository.find();

        return allProducts;
    }
    async findByName(name: string): Promise<Product> {
        const product = await this.repository.findOne({ name });

        return product
    }
    async findById(id: string): Promise<Product> {
        const product = await this.repository.findOne(id);

        return product;
    }
    async updateQuantity(id: string, quantity: number): Promise<void> {
        const product = await this.repository.findOne(id);

        product.quantity = quantity;

        await this.repository.save(product);
    }
}

export { ProductRepository }