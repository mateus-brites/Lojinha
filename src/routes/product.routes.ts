import { CreateProductController } from "@modules/product/useCases/createProduct/CreateProductController";
import { Router } from "express";


const productRouter = Router();

const createProductController = new CreateProductController()

productRouter.post("/", createProductController.handle);



export { productRouter }