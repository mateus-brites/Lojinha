import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class Order1639584589235 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "storage",
                    columns: [
                        {
                            name: "storage_id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "customer_id",
                            type: "uuid"
                        },
                        {
                            name: "totalPrice",
                            type: "numeric",
                        },
                        {
                            name: "products",
                            type: "numeric",
                        },
                        {
                            name: "order_id",
                            type: "uuid",
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()",
                        },
                        {
                            name: "updated_at",
                            type: "timestamp",
                            default: "now()",
                        },
                    ]
                }
            ),
        )

        await queryRunner.createTable(
            new Table(
                {
                    name: "order",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "product_id",
                            type: "uuid",
                        },
                        {
                            name: "quantity",
                            type: "numeric"
                        }
                    ]
                }
            )
        )
        await queryRunner.createForeignKey(
            "storage",
            new TableForeignKey({
                name: "FKStorageOrder",
                referencedTableName: "order",
                referencedColumnNames: ["id"],
                columnNames: ["order_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );
        await queryRunner.createForeignKey(
            "storage",
            new TableForeignKey({
                name: "FKStorageCustomer",
                referencedTableName: "customer",
                referencedColumnNames: ["id"],
                columnNames: ["customer_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("storage", "FKStorageCustomer");
        await queryRunner.dropForeignKey("storage", "FKStorageOrder");
        await queryRunner.dropTable("order");
        await queryRunner.dropTable("storage");
    }
}