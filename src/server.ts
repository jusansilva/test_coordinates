import { Express } from "express";
import { AppEnv } from "./adapters";

export class Server {
    static async init(app: Express){
         app.listen(AppEnv.server.port, () => console.log(`server started on port ${AppEnv.server.port} Environment: ${AppEnv.environment}`))   
    }
}