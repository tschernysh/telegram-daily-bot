const TelegramBot = require('node-telegram-bot-api')
const token = '1829089096:AAEFe1BkVuH-rW9zuOCODMhGBQiBPrhkJ2g'

const bot = new TelegramBot(token, {polling: true})


// bot.on('message', (msg) => {
//     const chatId = msg.chat.id
    
//     msg.text === '/start' ? bot.sendMessage(chatId, "Hello bitchez") : bot.sendMessage(chatId, 'unkknown command')

// } )

bot.onText(/\/alarmClock/, (msg) => {

    bot.sendMessage(msg.chat.id, "Choose time when u want to receive message", {
    "reply_markup": {
        "keyboard": [["0:00"],["3:00"],["6:00"],["9:00"],["12:00"],["15:00"],["18:00"],["21:00"],["24:00"]]
        }
    });
    });
    bot.on('message', (msg) => {
        var Hi = "hi";
        if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
            bot.sendMessage(msg.chat.id, "Hello dear user");
        }
        var bye = "bye";
        if (msg.text.toString().toLowerCase().includes(bye)) {
            bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
        }
        var robot = "0:00";
        if (msg.text.indexOf(robot) === 0) {
            bot.sendMessage(msg.chat.id, "Yes I'm robot but not in that way!");
        }
        });


console.log('Restarted');