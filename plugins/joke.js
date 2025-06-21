const axios = require('axios');

module.exports = (bot) => {
  bot.command('joke', async (ctx) => {
    try {
      ctx.reply('Let me think of a good one...');
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      const joke = `${response.data.setup}\n\n...${response.data.punchline}`;
      ctx.reply(joke);
    } catch (error) {
      console.error('Error fetching joke:', error);
      ctx.reply("Sorry, I couldn't think of a joke right now. Try again later!");
    }
  });
};
