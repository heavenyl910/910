import { Request, Response, NextFunction } from 'express';

// Example auth stub. Call as: app.use(auth)
export function auth(req: Request, _res: Response, next: NextFunction) {
  // attach a fake user for now
  (req as any).user = { id: 'demo' };
  next();
}