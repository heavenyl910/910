export type Track = { id: string; title: string; url?: string; [k: string]: unknown };

const queues = new Map<number | string, Track[]>();

export function addToQueue(chatId: number | string, track: Track) {
  const q = queues.get(chatId) ?? [];
  q.push(track);
  queues.set(chatId, q);
}

export function getQueue(chatId: number | string): Track[] {
  return queues.get(chatId) ?? [];
}

export function clearQueue(chatId: number | string): void {
  queues.delete(chatId);
}

export function popNext(chatId: number | string): Track | undefined {
  const q = queues.get(chatId);
  if (!q || q.length === 0) return undefined;
  const next = q.shift();
  queues.set(chatId, q);
  return next;
}