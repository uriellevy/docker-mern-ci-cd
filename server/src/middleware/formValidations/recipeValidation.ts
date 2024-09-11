import { checkSchema, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { Schema } from 'express-validator'

export const recipeValidationSchema: Schema = {
    name: {
        isString: {
            errorMessage: 'Name must be a string',
        },
        notEmpty: {
            errorMessage: 'Name is required',
        },
        trim: true,
        escape: true,
    },
    'ingredients.*.amount.value': {
        isNumeric: {
            errorMessage: 'Amount value must be a number',
        },
        notEmpty: {
            errorMessage: 'Amount value is required',
        },
    },
    'ingredients.*.amount.units': {
        isString: {
            errorMessage: 'Amount units must be a string',
        },
        notEmpty: {
            errorMessage: 'Amount units are required',
        },
        trim: true,
        escape: true,
    },
    'ingredients.*.ingredient': {
        isString: {
            errorMessage: 'Ingredient must be a string',
        },
        notEmpty: {
            errorMessage: 'Ingredient is required',
        },
        trim: true,
        escape: true,
    },
    'instructions.*': {
        isString: {
            errorMessage: 'Each instruction must be a string',
        },
        notEmpty: {
            errorMessage: 'Instruction cannot be empty',
        },
        trim: true,
        escape: true,
    },
    'image.alt': {
        isString: {
            errorMessage: 'Image alt must be a string',
        },
        notEmpty: {
            errorMessage: 'Image alt is required',
        },
        trim: true,
        escape: true,
    },
    'image.url': {
        isString: {
            errorMessage: 'Image URL must be a string',
        },
        notEmpty: {
            errorMessage: 'Image URL is required',
        },
        isURL: {
            errorMessage: 'Image URL must be a valid URL',
        },
        trim: true,
    },
    prepTime: {
        isNumeric: {
            errorMessage: 'Prep time must be a number',
        },
        notEmpty: {
            errorMessage: 'Prep time is required',
        },
    },
    cookTime: {
        isNumeric: {
            errorMessage: 'Cook time must be a number',
        },
        notEmpty: {
            errorMessage: 'Cook time is required',
        },
    },
    servings: {
        isNumeric: {
            errorMessage: 'Servings must be a number',
        },
        notEmpty: {
            errorMessage: 'Servings are required',
        },
    },
    cuisine: {
        isString: {
            errorMessage: 'Cuisine must be a string',
        },
        notEmpty: {
            errorMessage: 'Cuisine is required',
        },
        trim: true,
        escape: true,
    },
    difficulty: {
        isString: {
            errorMessage: 'Difficulty must be a string',
        },
        notEmpty: {
            errorMessage: 'Difficulty is required',
        },
        trim: true,
        escape: true,
    },
};

export const recipeValidation = (req: Request, res: Response, next: NextFunction) => {
    checkSchema(recipeValidationSchema).run(req).then(() => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        next();
    }).catch((err) => {
        next(err);
    });
}