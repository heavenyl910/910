const TelegramBot = require('node-telegram-bot-api');
const { addTrack, nextTrack } = require('../shared/queue');
const { VoiceController } = require('../voice');

const token = process.env.BOT_TOKEN || 'YOUR_TOKEN_HERE';
const bot = new TelegramBot(token, { polling: true });
const voice = new VoiceController();

bot.onText(/\/play (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const query = match[1];
  const state = addTrack(chatId, { title: query });
  if (state.now && state.now.title === query) {
    await voice.stream(chatId, state.now);
    bot.sendMessage(chatId, `Now playing: ${query}`);
  } else {
    bot.sendMessage(chatId, `Queued: ${query}`);
  }
});

bot.onText(/\/pause/, async (msg) => {
  const chatId = msg.chat.id;
  await voice.pause(chatId);
  bot.sendMessage(chatId, 'Paused');
});

bot.onText(/\/resume/, async (msg) => {
  const chatId = msg.chat.id;
  await voice.resume(chatId);
  bot.sendMessage(chatId, 'Resumed');
});

// When a track ends (not implemented in stub) you would call nextTrack()
voice.on('trackEnd', (chatId) => {
  const track = nextTrack(chatId);
  if (track) {
    voice.stream(chatId, track);
  }
});
