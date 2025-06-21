const fs = require('fs');
const path = require('path');

module.exports = (bot) => {
  // Lightweight plugin loader
  ['start', 'help', 'echo', 'joke', 'about'].forEach(file => {
    try {
      require(`./${file}`)(bot);
      console.log(`Loaded plugin: ${file}`);
    } catch (err) {
      console.error(`Error loading ${file}:`, err.message);
    }
  });
};
