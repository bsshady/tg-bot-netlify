import { Markup } from "telegraf"

export function getMainMenu() {
    return Markup.keyboard([
        ['Посмотреть расписание'],
        ['Получить приятности в любой момент!']
    ]).resize()
}

export function getSecondMenu() {
    return Markup.keyboard([
        ['Понедельник'],
        ['Вторник'],
        ['Среда'],
        ['Четверг'],
        ['Пятница'],
        ['Суббота'],
        ['Назад']
    ]).resize()
}