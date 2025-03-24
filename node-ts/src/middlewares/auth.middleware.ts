import type { NextFunction, Request, Response } from "express";


export function auth(req: Request, res: Response, next: NextFunction) {
    const token = req.header('token');
    if (token === 'testcode123') {
        next()
    } else {
        
        res.status(401).send('Access denied. No token provided.');
    }
}