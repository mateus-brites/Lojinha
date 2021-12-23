import { validateRequestSchema } from "@/middleware/signUpValidator"
import { registerSchema } from "@/schema/signUpSchema"
import { AddCredCardController } from "@modules/customer/useCases/addCredCard/AddCredCardController"
import { CreateCustomerController } from "@modules/customer/useCases/createCustomer/CreateCustomerController"
import { ListAllCustomersController } from "@modules/customer/useCases/listAllCustomers/ListAllCustomersController"
import { Router } from "express"


const customerRoutes = Router()

const createCustomerCOntroller = new CreateCustomerController()
const addCredCardController = new AddCredCardController()
const listAllCustomersController = new ListAllCustomersController()

customerRoutes.post("/",
registerSchema,
validateRequestSchema,
createCustomerCOntroller.handle);

customerRoutes.patch("/credCard", addCredCardController.handle);

customerRoutes.get("/all", listAllCustomersController.handle);



export { customerRoutes }