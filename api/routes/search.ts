import { Router, Request, Response } from 'express';

const r = Router();

/** GET /api/search?q=term */
r.get('/', (req: Request, res: Response) => {
  const q = String(req.query.q ?? '').trim();
  res.json({ results: q ? [{ id: 'demo', title: q }] : [] });
});

export default r;