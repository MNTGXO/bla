module.exports = (bot) => {
  bot.command('about', (ctx) => {
    ctx.reply(`
🤖 Koyeb Telegram Bot

Version: 1.0.0
Platform: Node.js with Telegraf
Hosting: Koyeb Cloud

This is a sample modular Telegram bot that demonstrates:
- Command handling
- Webhook setup
- Koyeb deployment
- Plugin architecture

Customize me to build your dream bot!
`, {
      parse_mode: 'Markdown'
    });
  });
};
