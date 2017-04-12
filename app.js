var TelegramBot = require('node-telegram-bot-api');
var express = require('express');
const token = 't278945464:AAFi4blEbA48qw44qP_Ixrzl3qvcIsJbDok';

const options = {
  webHook: {
    port: 443,
    key: `./40413500-dibba-bot.herokuapp.com.key`,  // Path to file with PEM private key
    cert: `./40413500-dibba-bot.herokuapp.com.cert`  // Path to file with PEM certificate
  }
};
// This URL must route to the port set above (i.e. 443)
const url = 'https://dibba-bot.herokuapp.com/';
const bot = new TelegramBot(token);

// This informs the Telegram servers of the new webhook.
//bot.setWebHook(`${url}/bot${token}`, {
//  certificate: options.webHook.cert,
//});


// Just to ping!
bot.on('message', function onMessage(msg) {
  bot.sendMessage(msg.chat.id, 'I am alive!');
});

//var app = express();

// app.get('/', function(req, res){
//   res.send('Hello!');
// });

// app.listen(4000, function () {
//   console.log('Example app listening on port 3000!')
// })