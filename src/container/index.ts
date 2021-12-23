import { InMemoryCustomerRepository } from "@modules/customer/InMemoryRepositories/CustomerRepositoryInMemory";
import { CustomerRepository } from "@modules/customer/Repositories/CustomerRepository";
import { ICustomerRepository } from "@modules/customer/Repositories/ICustumerRepositories";
import { IOrderRepository } from "@modules/order/Repositories/IOrderRepository";
import { OrderRepository } from "@modules/order/Repositories/OrderRepository";
import { IProductRepositories } from "@modules/product/Repositories/IProductRepositories";
import { ProductRepository } from "@modules/product/Repositories/ProductRepository";
import { container } from "tsyringe";

container.registerSingleton<ICustomerRepository>("CustomerRepository", CustomerRepository);

container.registerSingleton<IProductRepositories>("ProductRepository", ProductRepository);

container.registerSingleton<IOrderRepository>("OrderRepository", OrderRepository);