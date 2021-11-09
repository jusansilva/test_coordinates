import { Express } from 'express';
import App from './app';
import { Server } from './server';


class Bootstrapp {
    static async main(){
        const app: Express = App.build()
        Server.init(app);
    }
}

Bootstrapp.main();