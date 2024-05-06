import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['x-auth-token'] as string;

    // Check for token presence
    if (!token) {
      return res
        .status(401)
        .json({ message: 'Unauthorized! No token provided.' });
    }

    try {
      // Verify token using process.env.JWT_SECRET_KEY
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      // Attach decoded payload to request object for access in controllers
      req.user = decoded;
      next();
    } catch (err) {
      console.error(err); // Log error for debugging
      return res.status(401).json({ message: 'Unauthorized! Invalid token.' });
    }
  }
}
