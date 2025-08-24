import { Router, Request, Response } from 'express';
const r = Router();
r.get('/', (req: Request, res: Response) => res.json({ results: [{ id: 'demo', title: String(req.query.q || '') }] }));
export default r;
