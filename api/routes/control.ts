import { Router, Request, Response } from 'express';

const r = Router();

r.post('/play', (_: Request, res: Response) => res.json({ ok: true, action: 'play' }));
r.post('/pause', (_: Request, res: Response) => res.json({ ok: true, action: 'pause' }));
r.post('/skip', (_: Request, res: Response) => res.json({ ok: true, action: 'skip' }));

export default r;