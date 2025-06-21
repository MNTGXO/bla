module.exports = (bot) => {
  bot.help((ctx) => {
    ctx.reply(`
Available commands:

/start - Start the bot
/help - Show this help message
/echo [text] - Repeat the text you send
/joke - Get a random joke
/about - Learn about this bot

More features can be added as needed!
`, {
      parse_mode: 'Markdown'
    });
  });
};
