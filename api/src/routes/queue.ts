import { Router, Request, Response } from 'express';
const r = Router();
const state = { queue: [] as any[] };
r.get('/', (_: Request, res: Response) => res.json(state.queue));
r.post('/', (req: Request, res: Response) => { state.queue.push(req.body); res.json({ ok: true }); });
export default r;
