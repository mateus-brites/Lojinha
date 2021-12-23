import "reflect-metadata"
import express, {Request, Response, NextFunction} from "express"
import "express-async-errors";
import { AppError } from "./error/AppError";
import "./container";
import "./database"
import { router } from "./routes"


const app = express();

app.use(express.json());
app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statuscode).json({ message: err.message});
        }app

        return response.status(500).json({
            status: "Error",
            message: `Internal server Error ${err}`,
        });
    }
)


app.listen(3333, () => console.log("Server is running"));