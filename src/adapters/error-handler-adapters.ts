import { Container } from 'typedi';
import { AppEnv } from '.';
import { Request, Response, NextFunction } from 'express';
import { ErrorMiddleware } from './generic-middleware';

export class ErrorHandlerMiddleware implements ErrorMiddleware {
    handler(err: Error, req: Request, res: Response, next: NextFunction) {
        const statusCode = 'status' in err ? err['status'] : 500;
        const response = {
            statusCode: statusCode,
            message: err.message ,
            errors: err,
            stack: err.stack,
        };

        if (AppEnv.environment !== 'development') {
            delete response.stack;
        }

        res.status(statusCode);

        res.json(response);
    }

    static get(): ErrorHandlerMiddleware {
        return Container.get(ErrorHandlerMiddleware);
    }
}
