import * as express from "express";
import { Express } from "express";
import { AdapterRouters } from "./adapters/router-adapters";
import { AppMiddlewares } from "./adapters/app-middlewares-adapters";
export default class App {
    static build() {
        const app: Express = express();
        AppMiddlewares.loadMiddlewares(app);
        AdapterRouters.load(app);
        AdapterRouters.handleError(app);

        return app;
    }
}