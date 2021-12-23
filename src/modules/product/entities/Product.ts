import { Column, Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid_v4 } from "uuid"

@Entity("products")
class Product {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    quantity: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    constructor() {
        if(!this.id) {
            this.id = uuid_v4()
        }
    }
}

export { Product }