import { Router, Express, NextFunction, Request,Response } from "express";
import { api } from "../ports/routers";
import { ErrorHandler } from './exceptions-adapters';
import * as YAMLJS  from 'yamljs';
import * as swaggerUi from 'swagger-ui-express';


export class AdapterRouters {
    static load(app: Express){
        try {
            const swaggerDocument = YAMLJS.load('./swagger.yml');
            const router = Router();
            router.use("^/$", (req, res) => { return res.redirect('/api-docs')});
            router.user('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
            router.use('/api', api)
        } catch (error) {
            console.log(error)
        }
    }

    static handleError(app: Express) {
        app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
            let { statusCode, message, errors } = err;

            if (err.response?.data) {
                errors = err.response.data;
            }

            return res.status(statusCode || 500).json({
                status: "error",
                statusCode,
                message,
                errors
            });
        })
    }
}