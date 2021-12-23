import { ICreateOrdersDTO } from "../DTO/ICreateOrdersDTO";
import { Order } from "../entities/Order";
import { Storage } from "../entities/Storage";
import { IOrderRepository } from "../Repositories/IOrderRepository";



class OrdersRepositoryInMemory implements IOrderRepository {
    private repository: Storage[] = [];
    
    async createOrders({ customer_id, order }: ICreateOrdersDTO): Promise<Storage> {
        const storage = new Storage()

        Object.assign(storage, {
            customer_id,
            order
        })

        return storage
    }
    listOrdersOverTo(value: number): Promise<Storage[]> {
        throw new Error("Method not implemented.");
    }
    listOrdersbelowTo(value: number): Promise<Storage[]> {
        throw new Error("Method not implemented.");
    }
    listOrdersBetweenDates(date1: Date, date2: Date): Promise<Storage[]> {
        throw new Error("Method not implemented.");
    }
}

export { OrdersRepositoryInMemory }