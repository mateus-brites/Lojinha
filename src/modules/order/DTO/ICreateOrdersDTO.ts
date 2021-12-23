

interface ICreateOrdersDTO {
    customer_id: string
    order: IOrder[]
}

interface IOrder {
    id: string //esse id é do produco que o usuário irá comprar.
    quantity: number // quantidade do produto que o usuário irá comprar
}

export { ICreateOrdersDTO }