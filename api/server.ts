// api/server.ts (relevant bits)
import http from 'http';
import express from 'express';
import cors from 'cors';

import queue from './routes/queue';
import control from './routes/control';
import search from './routes/search';
import { attachWS } from './ws'; // ← named import

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.send('ok'));
app.use('/api/queue', queue);
app.use('/api/control', control);
app.use('/api/search', search);

const server = http.createServer(app);
attachWS(server);

server.listen(3001, () => console.log('API on :3001'));
