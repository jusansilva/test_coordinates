import { Express } from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { ErrorHandlerMiddleware } from './error-handler-adapters';
import { AppEnv } from '.';
export class AppMiddlewares {

    static loadMiddlewares(app: Express) {
                
        console.log('Loading cors');
        app.use(cors({
            origin: "*",
            exposedHeaders: ['content-type', 'content-length'],
            maxAge: 600,
            methods: ['GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS'],
            allowedHeaders: ['Accept', 'Content-Type', 'Authorization', 'x-api-key'] 
        }));

        console.log('Loading BodyParser');
        app.use(bodyParser.json());

        console.log('Loading ErrorHandlerMiddleware');
        app.use(ErrorHandlerMiddleware.get().handler);
    }
}
