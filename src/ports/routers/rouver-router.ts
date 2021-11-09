import { Router, Request, Response, NextFunction } from "express";
import Container from 'typedi';
import { RouteValidator } from "./validations";
import { PostInputValidator } from './schemas';
import { RouverController } from "../controllers";

const controller = Container.get(RouverController);
const RouverRouter = Router();

RouverRouter.route("/rouver/move")
    .post(RouteValidator.validate(PostInputValidator.post()),
        (req: Request, res: Response, next: NextFunction) => {
            return controller.moveRouver(req, res, next)
        });

RouverRouter.route("/")
    .get((req, res, next) => {
        res.send("to aqui");
    })
export { RouverRouter }