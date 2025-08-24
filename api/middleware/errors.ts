import { NextFunction, Request, Response } from 'express';

// Use as the last middleware: app.use(errorHandler)
export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  const message = err instanceof Error ? err.message : 'Unknown error';
  const status = (err as any)?.status ?? 500;
  res.status(status).json({ ok: false, error: message });
}