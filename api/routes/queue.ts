import { Router, Request, Response } from 'express';

type QueueItem = {
  id: string;
  title: string;
  url: string;
};

const state = {
  queue: [] as QueueItem[],
};

const r = Router();

/** GET /api/queue -> current queue */
r.get('/', (_: Request, res: Response) => {
  res.json(state.queue);
});

/** POST /api/queue -> push item {id,title,url} */
r.post('/', (req: Request<unknown, unknown, QueueItem>, res: Response) => {
  const item = req.body;
  if (!item?.id || !item?.title || !item?.url) {
    return res.status(400).json({ ok: false, error: 'id/title/url required' });
  }
  state.queue.push(item);
  res.json({ ok: true, size: state.queue.length });
});

export default r;

r.post('/', (req: Request, res: Response) => {
  const { id, title, url } = req.body ?? {};
  if (!id || !title) {
    return res.status(400).json({ ok: false, error: 'id/title required' });
  }
  state.queue.push({ id, title, url });
  res.json({ ok: true, size: state.queue.length });
});