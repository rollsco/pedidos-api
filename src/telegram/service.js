const request = require('request');

// TODO improve with Client side version
const sendMessage = text => {
  request({
    uri: process.env.TELEGRAM_BOT_URL,
    qs: {
      chat_id: process.env.TELEGRAM_BOT_CHAT_ID,
      text,
      parse_mode: "Markdown",
    },
    function(error, response, body) {
      if (error || response.statusCode !== 200) {
        console.log("--error", error);
      }
    }
  });
}

module.exports = {
  sendMessage,
}