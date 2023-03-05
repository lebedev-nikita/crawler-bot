import assert from "node:assert";
import TelegramBot from "node-telegram-bot-api";

const TELEGRAM_API_TOKEN = process.env.TELEGRAM_API_TOKEN;
assert(TELEGRAM_API_TOKEN);

export const bot = new TelegramBot(TELEGRAM_API_TOKEN, { polling: true });

bot.onText(/.*/, (msg, match) => {
  bot.sendMessage(msg.chat.id, `Your chatId: ${msg.chat.id}`);
});
