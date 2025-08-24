'use client';

import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

export default function Page() {
  const [connected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    // Build the Socket.IO URL from env or fallback
    const url = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

    // Initialize once when the component mounts
    const socket: Socket = io(url, {
      transports: ['websocket'], // optional: avoids long-polling
    });

    // Handlers
    const onConnect = () => setConnected(true);
    const onDisconnect = () => setConnected(false);

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    // Cleanup: remove handlers and close socket
    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.close();
    };
  }, []);

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Now Playing</h1>
      <div className="rounded-xl border border-neutral-800 p-4">
        WS: {connected ? 'connected' : 'disconnected'}
      </div>
    </main>
  );
}
