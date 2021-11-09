import { Router } from 'express';
import { RouverRouter } from './rouver-router';

const api = Router();
api.use(RouverRouter);

export { api };