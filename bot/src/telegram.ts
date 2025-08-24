import TelegramBot from 'node-telegram-bot-api';

const token = process.env.TELEGRAM_TOKEN!;
export const bot = new TelegramBot(token, { polling: true });