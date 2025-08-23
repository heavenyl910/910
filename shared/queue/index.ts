const { randomUUID } = require('crypto');

/**
 * Simple in-memory queue map.
 * @type {Map<number, QueueState>}
 */
const queues = new Map();

/**
 * Add a track to the queue. Creates a queue for the chat if needed.
 * @param {number} chatId
 * @param {Partial<Track>} track
 * @returns {QueueState}
 */
function addTrack(chatId, track) {
  const state = queues.get(chatId) || {
    chatId,
    now: undefined,
    next: [],
    volume: 100,
    muted: false,
    repeat: 'off',
    shuffle: false,
  };
  const full = { id: randomUUID(), duration: 0, source: 'http', title: 'Unknown', ...track };
  if (!state.now) {
    state.now = full;
  } else {
    state.next.push(full);
  }
  queues.set(chatId, state);
  return state;
}

/**
 * Shift to next track.
 * @param {number} chatId
 * @returns {Track|undefined}
 */
function nextTrack(chatId) {
  const state = queues.get(chatId);
  if (!state) return undefined;
  const next = state.next.shift();
  state.now = next;
  return next;
}

module.exports = { addTrack, nextTrack, queues };
