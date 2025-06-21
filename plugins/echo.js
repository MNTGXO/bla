module.exports = (bot) => {
  bot.command('echo', (ctx) => {
    const input = ctx.message.text.split(' ').slice(1).join(' ');
    if (!input) {
      return ctx.reply('Please provide some text after /echo');
    }
    ctx.reply(`You said: ${input}`);
  });
};
