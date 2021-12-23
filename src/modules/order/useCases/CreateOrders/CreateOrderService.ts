import { ICreateOrdersDTO } from "@modules/order/DTO/ICreateOrdersDTO";
import { IOrderRepository } from "@modules/order/Repositories/IOrderRepository";
import { inject, injectable } from "tsyringe";



@injectable()
class CreateOrderService {
    constructor(
        @inject("OrderRepository")
        private repository: IOrderRepository
    ){}

    async execute({ customer_id, order }: ICreateOrdersDTO){
        const storage = await this.repository.createOrders({customer_id, order});

        return storage
    }
}

export { CreateOrderService }