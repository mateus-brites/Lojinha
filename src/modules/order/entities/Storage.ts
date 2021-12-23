import { Customer } from "@modules/customer/entities/Customer";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid_v4} from "uuid"
import { Order } from "./Order";

@Entity("storage")
class Storage {
    @PrimaryColumn()
    id: string;

    @Column()
    totalPrice: string;

    @ManyToOne(() => Customer)
    @JoinColumn({ name: "customer_id" })
    customer: Customer;

    @Column()
    products: number;

    @ManyToMany(() => Order)
    @JoinTable({
        name: "storage", // nome da tabela criada
        joinColumns: [{ name: "order_id" }],
        inverseJoinColumns: [{ name: "storage_id" }],
      })
    order: Order[]; 

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid_v4()
        }
    }
}

export { Storage }