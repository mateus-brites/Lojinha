import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"
import {v4 as uuid_v4} from "uuid"

@Entity("customer")
class Customer {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    telefone: number
    
    @Column()
    credCard: number

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

export { Customer }