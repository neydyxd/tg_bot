process.env.BOT_TOKEN = '6788444953:AAFYxvIF0ALYQXbIVFLNlPZ-HNtTAhIwJ7g';
const { Bot } = require('grammy');
const bot = new Bot(process.env.BOT_TOKEN)
// Код ниже заставляет отвечать на любое сообщение текстом 'Приветик!'
bot.command('start', (ctx) => ctx.reply('Да, черт'));
bot.command('help', (ctx) => ctx.reply('Чем я могу помочь?'));
// Код ниже заставляет отвечать на стикеры заданным текстом
bot.on(':sticker', (ctx) => ctx.reply('Вы прислали стикер, подлец!'));
// Код ниже заставляет отвечать на присланный текст. Он отвечает заданным текстом и вашей цитатой:
bot.on(':text', (ctx) => ctx.reply('Приветик! Вы написали:' + ctx.message.text));
bot.start();
console.log('Бот запущен');