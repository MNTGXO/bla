const { Telegraf } = require('telegraf');
const express = require('express');
require('dotenv').config();

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

// Load plugins
require('./plugins')(bot);

// Error handling
bot.catch((err, ctx) => {
  console.error(`Error:`, err);
  ctx?.reply?.('Oops! Something went wrong.');
});

// Koyeb health check endpoint
app.get('/', (req, res) => res.send('Bot is running'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  
  // Webhook setup for production
  if (process.env.NODE_ENV === 'production') {
    const webhookUrl = `${process.env.KOYEB_APP_URL}/telegraf/${bot.secretPathComponent()}`;
    bot.telegram.setWebhook(webhookUrl);
    app.use(bot.webhookCallback(`/telegraf/${bot.secretPathComponent()}`));
    console.log('Webhook configured:', webhookUrl);
  } else {
    bot.launch();
    console.log('Bot running in polling mode');
  }
});
