import { Router, Request, Response } from 'express';
const r = Router();
r.post('/play', (_: Request, res: Response) => res.json({ ok: true }));
r.post('/pause', (_: Request, res: Response) => res.json({ ok: true }));
r.post('/skip', (_: Request, res: Response) => res.json({ ok: true }));
export default r;
