import { Column, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid_v4} from "uuid"

@Entity("order")
class Order {
    @PrimaryColumn()
    id: string;

    @Column()
    product_id: string;

    @Column()
    quantity: number;

    constructor() {
        if(!this.id) {
            this.id = uuid_v4()
        }
    }
}

export { Order }