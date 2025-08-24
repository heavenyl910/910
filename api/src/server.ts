import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';
import http from 'http';
import queue from './routes/queue';
import control from './routes/control';
import search from './routes/search';
import { attachWS } from './ws';

const app = express();
app.use(cors());
app.use(express.json());
app.get('/health', (_: Request, res: Response) => res.json({ ok: true }));
app.use('/api/queue', queue);
app.use('/api/control', control);
app.use('/api/search', search);

const server = http.createServer(app);
const io = attachWS(server);
io.on('connection', s => s.emit('hello', { ok: true }));

const PORT = Number(process.env.PORT || 3001);
server.listen(PORT, () => console.log('API on :' + PORT));
