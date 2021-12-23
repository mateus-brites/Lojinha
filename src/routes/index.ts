import { Router } from "express"
import { customerRoutes } from "./customer.routes";
import { productRouter } from "./product.routes";

const router = Router();


router.use("/customers", customerRoutes);
router.use("/products", productRouter);

export {router}