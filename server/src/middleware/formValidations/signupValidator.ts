import { checkSchema, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import {Schema} from 'express-validator'

export const userValidationSchema: Schema = {
    'name.first': {
        isString: {
            errorMessage: 'First name must be a string',
        },
        notEmpty: {
            errorMessage: 'First name is required',
        },
        trim: true,
        escape: true,
    },
    'name.last': {
        isString: {
            errorMessage: 'Last name must be a string',
        },
        notEmpty: {
            errorMessage: 'Last name is required',
        },
        trim: true,
        escape: true,
    },
    'image.url': {
        isURL: {
            options: {
                protocols: ['http', 'https'],
                require_protocol: true,
            },
            errorMessage: 'Invalid image URL',
        },
        notEmpty: {
            errorMessage: 'Image URL is required',
        },
    },
    'image.alt': {
        isString: {
            errorMessage: 'Image description must be a string',
        },
        optional: {
            options: { nullable: true },
        },
        trim: true,
        escape: true,
    },
    email: {
        isEmail: {
            errorMessage: 'Invalid email address',
        },
        normalizeEmail: true,
        notEmpty: {
            errorMessage: 'Email is required',
        },
    },
    password: {
        isStrongPassword: {
            options: {
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1,
            },
            errorMessage: 'Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one number, and one symbol',
        },
        notEmpty: {
            errorMessage: 'Password is required',
        },
    },
}

export const signupValidation = (req: Request, res: Response, next: NextFunction) => {
    checkSchema(userValidationSchema).run(req).then(() => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        next();
    }).catch((err) => {
        next(err);
    });
}