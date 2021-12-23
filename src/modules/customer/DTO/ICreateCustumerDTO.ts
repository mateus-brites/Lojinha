interface ICreateCustumerDTO {
    name: string;
    email: string;
    telefone: number;
    password: string;
    credCard?: number;
}

export { ICreateCustumerDTO };