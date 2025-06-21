module.exports = (bot) => {
  bot.start((ctx) => {
    const welcomeMessage = `
👋 Hello, ${ctx.from.first_name}!

I'm a Telegram bot running on Koyeb. Here's what I can do:

/start - Show this message
/help - Show help information
/echo [text] - Echo back your text
/joke - Tell a random joke
/about - Show information about this bot

You can customize me to do much more!
`;
    ctx.reply(welcomeMessage, {
      parse_mode: 'Markdown',
      disable_web_page_preview: true
    });
  });
};
