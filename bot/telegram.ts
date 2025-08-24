// bot/src/telegram.ts
import TelegramBot from 'node-telegram-bot-api';

const token = process.env.TELEGRAM_TOKEN ?? '';
export const bot = new TelegramBot(token, { polling: true });

// optional: tiny noop to assert module-ness
export const startBot = () => {
  bot.on('message', (msg) => {
    if (msg.chat && msg.text) bot.sendMessage(msg.chat.id, 'pong');
  });
};