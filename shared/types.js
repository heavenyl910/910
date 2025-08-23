/**
 * @typedef {Object} Track
 * @property {string} id
 * @property {'yt'|'http'|'tg-file'} source
 * @property {string} title
 * @property {string} [artist]
 * @property {string} [url]
 * @property {string} [tgFileId]
 * @property {number} duration
 * @property {string} [thumb]
 */

/**
 * @typedef {Object} QueueState
 * @property {number} chatId
 * @property {Track} [now]
 * @property {Track[]} next
 * @property {number} volume
 * @property {boolean} muted
 * @property {'off'|'one'|'all'} repeat
 * @property {boolean} shuffle
 * @property {number} [lastMsgId]
 * @property {number} [startedAt]
 */
