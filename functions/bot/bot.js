import { getMainMenu, getSecondMenu } from './keys.js'
import {scheduleObject} from './schedule.js'
import { pleasures } from './pleasures.js'
const { Telegraf } = require("telegraf")
const bot = new Telegraf(process.env.BOT_TOKEN)

let currentMenu=getMainMenu();

bot.start(ctx => {
    try {
        ctx.reply('Привет, котенок! Выбери что хочешь сделать из кнопок ниже!', currentMenu)
    } catch (e) {
        console.error("error in start action:", e)
        ctx.reply("Ошибка, сообщи мне о ней!")
    }
})

bot.hears('Посмотреть расписание', ctx => {
    currentMenu=getSecondMenu()
    try {
        ctx.reply('Хорошо, а сейчас выбери на какой день тебе нужно расписание!', currentMenu)
    } catch (e) {
        console.error("error in schedule action:", e)
        ctx.reply("Ошибка, сообщи мне о ней!")
    }
})

bot.hears('Назад', ctx => {
    currentMenu=getMainMenu()
    try {
        ctx.reply('Слушаюсь!', currentMenu)
    } catch (e) {
        console.error("error in back action:", e)
        ctx.reply("Ошибка, сообщи мне о ней!")
    }
})

bot.hears("Понедельник", ctx => {
    try {
        ctx.reply(scheduleObject.Monday)
    } catch (e) {
        console.error("error in monday shecdule action:", e)
        ctx.reply("Ошибка, сообщи мне о ней!")
    }
})
bot.hears("Вторник", ctx => {
    try {
        ctx.reply(scheduleObject.Tuesday)
    } catch (e) {
        console.error("error in tuesday shecdule action:", e)
        ctx.reply("Ошибка, сообщи мне о ней!")
    }
})
bot.hears("Среда", ctx => {
    try {
        ctx.reply(scheduleObject.Wednesday)
    } catch (e) {
        console.error("error in wednesday shecdule action:", e)
        ctx.reply("Ошибка, сообщи мне о ней!")
    }
})
bot.hears("Четверг", ctx => {
    try {
        ctx.reply(scheduleObject.Thursday)
    } catch (e) {
        console.error("error in thursday shecdule action:", e)
        ctx.reply("Ошибка, сообщи мне о ней!")
    }
})
bot.hears("Пятница", ctx => {
    try {
        ctx.reply(scheduleObject.Friday)
    } catch (e) {
        console.error("error in friday shecdule action:", e)
        ctx.reply("Ошибка, сообщи мне о ней!")
    }
})
bot.hears("Суббота", ctx => {
    try {
        ctx.reply(scheduleObject.Saturday)
    } catch (e) {
        console.error("error in saturday shecdule action:", e)
        ctx.reply("Ошибка, сообщи мне о ней!")
    }
})

bot.hears("Получить приятности в любой момент!", ctx => {
    let randomPleasures = Math.floor(Math.random() * pleasures.length);
    try {
        ctx.reply(pleasures[randomPleasures])
    } catch (e) {
        console.error("error in pleasures action:", e)
        ctx.reply("Ошибка, сообщи мне о ней!")
    }
})

bot.on('text', ctx => {
    try {
        ctx.reply('Не пиши ничего лишнего пожалуйста :3, бот не умеет думать, нажимай на кнопочки которые я сделал для тебя <3', currentMenu)
    } catch (e) {
        console.error("error in other text action:", e)
        ctx.reply("Ошибка, сообщи мне о ней!")
    }
})

exports.handler = async event => {
  try {
    await bot.handleUpdate(JSON.parse(event.body))
    return { statusCode: 200, body: "" }
  } catch (e) {
    console.error("error in handler:", e)
    return { statusCode: 400, body: "This endpoint is meant for bot and telegram communication" }
  }
}
