// shared/queue.test.js
/**
 * @typedef {Object} Track
 * @property {string} id
 * @property {string} title
 * @property {string} [url]
 * @property {Record<string, unknown>} [k]
 */

/** @type {Map<string, Array<Track>>} */
const queues = new Map();

/**
 * Add a track to a chat's queue.
 * @param {string} chatId
 * @param {Track} track
 * @returns {void}
 */
export function addToQueue(chatId, track) {
  const q = queues.get(chatId) ?? [];
  q.push(track);
  queues.set(chatId, q);
}

/**
 * Get the queue for a chat.
 * @param {string} chatId
 * @returns {Track[]}
 */
export function getQueue(chatId) {
  return queues.get(chatId) ?? [];
}

/**
 * Clear the queue for a chat.
 * @param {string} chatId
 * @returns {void}
 */
export function clearQueue(chatId) {
  queues.delete(chatId);
}

/**
 * Pop the next track from the queue.
 * @param {string} chatId
 * @returns {Track | undefined}
 */
export function popNext(chatId) {
  const q = queues.get(chatId);
  if (!q || q.length === 0) return undefined;
  const next = q.shift();
  queues.set(chatId, q);
  return next;
}