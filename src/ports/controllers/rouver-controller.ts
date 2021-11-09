import { NextFunction, Request, Response } from 'express';
import Container, { Service } from "typedi";
import { RouverBussines } from '../../bussines';


@Service()
export class RouverController {
    private bussines: RouverBussines;
    constructor(){
        this.bussines = Container.get(RouverBussines);
    }

    async moveRouver(req: Request, res: Response, next: NextFunction){
        try {
            const {zone, rouvers, command } = req.body;
            const output = await this.bussines.moveRouver(zone, rouvers, command)
            res.json(output);
        } catch (error) {
            return next(error)
        }
    }
}