import type TelegramBot from 'node-telegram-bot-api';
import { bot } from '../telegram';
bot.onText(/^\/start$/, (m: TelegramBot.Message) => bot.sendMessage(m.chat.id, '👋 910 online'));
bot.onText(/^\/ping$/, (m: TelegramBot.Message) => bot.sendMessage(m.chat.id, 'pong'));
