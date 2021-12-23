import { ICreateOrdersDTO } from "../DTO/ICreateOrdersDTO";
import { Storage } from "../entities/Storage";
import { IOrderRepository } from "./IOrderRepository";



class OrderRepository implements IOrderRepository{
    createOrders({ customer_id, order }: ICreateOrdersDTO): Promise<Storage> {
        throw new Error("Method not implemented.");
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

export { OrderRepository }