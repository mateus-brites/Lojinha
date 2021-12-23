import { ICreateProductDTO } from "../DTO/ICreateProductDTO";
import { Product } from "../entities/Product";


interface IProductRepositories {
    create({ name, price, quantity }: ICreateProductDTO): Promise<Product>;
    findAll(): Promise<Product[]>;
    findByName(name: string): Promise<Product>;
    findById(id: string): Promise<Product>;
    updateQuantity(id: string, quantity: number): Promise<void>;
}

export { IProductRepositories }