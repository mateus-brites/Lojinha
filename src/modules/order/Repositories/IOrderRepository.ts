import { ICreateOrdersDTO } from "../DTO/ICreateOrdersDTO"
import { Storage } from "../entities/Storage"


interface IOrderRepository {
    createOrders({ customer_id, order }: ICreateOrdersDTO): Promise<Storage>
    listOrdersOverTo(value: number): Promise<Storage[]>;
    listOrdersbelowTo(value: number): Promise<Storage[]>;
    listOrdersBetweenDates(date1: Date, date2: Date): Promise<Storage[]>;
}

export { IOrderRepository }