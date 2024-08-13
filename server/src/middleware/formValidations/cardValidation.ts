import { checkSchema, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { Schema } from 'express-validator'

export const cardValidationSchema: Schema = {
    title: {
        isString: {
            errorMessage: 'Title must be a string',
        },
        notEmpty: {
            errorMessage: 'Title is required',
        },
        trim: true,
        escape: true,
    },
    subtitle: {
        isString: {
            errorMessage: 'Subtitle must be a string',
        },
        optional: {
            options: { nullable: true },
        },
        trim: true,
        escape: true,
    },
    description: {
        isString: {
            errorMessage: 'Description must be a string',
        },
        notEmpty: {
            errorMessage: 'Description is required',
        },
        trim: true,
        escape: true,
    },
    'image.alt': {
        isString: {
            errorMessage: 'Alt must be a string',
        },
        notEmpty: {
            errorMessage: 'Alt is required',
        },
        trim: true,
        escape: true,
    },
    'image.url': {
        isString: {
            errorMessage: 'Alt must be a string',
        },
        notEmpty: {
            errorMessage: 'Alt is required',
        },
        isURL:{
            errorMessage:"url must be valid URL",
        },
        trim: true,
        escape: true,
    },
}

export const cardValidation = (req: Request, res: Response, next: NextFunction) => {
    checkSchema(cardValidationSchema).run(req).then(() => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        next();
    }).catch((err) => {
        next(err);
    });
}