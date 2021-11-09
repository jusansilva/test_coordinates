import * as Joi from 'joi';
import { SchemaValidator } from '../validations';

const InputValidator = Joi.object({
    zone: Joi.string(),
    rouvers: Joi.array()
})

export class PostInputValidator {
    static post(): SchemaValidator {
        return {
            body: InputValidator
        }
    }
}