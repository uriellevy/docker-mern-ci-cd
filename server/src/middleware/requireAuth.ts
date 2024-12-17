import { Response, NextFunction } from 'express';
import { AppError } from '../exceptions/appError';
import { verifyToken } from '../utils/jwt';
import { AuthenticatedRequest, IJWTPayload } from '../interfaces/user';

export const requireAdminAuth = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.authToken;

    if(!token) return next(new AppError("authorization token is required", 403));

    try {
        const {role} = verifyToken(token) as IJWTPayload;
        if(role !== "admin") return next(new AppError("admin authorization required",401))
        next();    
    } catch (error) {
        return next(new AppError("unauthorized request", 401));
    }
}

export const requireAuth = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const {authorization} = req.headers;

    if(!authorization) return next(new AppError("authorization token is required", 401));

    const token = authorization.split(" ")[1];
    try {
        const {_id} = verifyToken(token);
        req.userId = _id;
        next();    
    } catch (error) {
        return next(new AppError("unauthorized request", 401));
    }
}