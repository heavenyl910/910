// api/ws.ts
import type { Server as HTTPServer } from 'http';
import { Server as IOServer, type Socket } from 'socket.io';

export const attachWS = (server: HTTPServer) => {
  const io = new IOServer(server, {
    cors: { origin: '*', methods: ['GET', 'POST'] },
  });

  io.on('connection', (socket: Socket) => {
    socket.emit('hello', { ok: true });
  });

  return io;
};