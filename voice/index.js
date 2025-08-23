const { EventEmitter } = require('events');

/**
 * Very small stub of the voice controller. In real implementation this would
 * wrap GramJS + GramTGCalls.
 */
class VoiceController extends EventEmitter {
  constructor() {
    super();
    this.playing = new Map();
  }

  async join(chatId) {
    // no-op for stub
  }

  async stream(chatId, track) {
    this.playing.set(chatId, { track, paused: false });
    this.emit('trackStart', chatId, track);
  }

  async pause(chatId) {
    const s = this.playing.get(chatId);
    if (s && !s.paused) {
      s.paused = true;
      this.emit('paused', chatId);
    }
  }

  async resume(chatId) {
    const s = this.playing.get(chatId);
    if (s && s.paused) {
      s.paused = false;
      this.emit('resumed', chatId);
    }
  }
}

module.exports = { VoiceController };
