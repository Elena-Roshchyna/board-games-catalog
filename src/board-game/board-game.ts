/*\

Задача 04. Каталог настольных игр
Общая информация
В рамках проекта вы разрабатываете backend-приложение для интернет-магазина настольных игр.

Пока приложение не взаимодействует с базой данных и не предоставляет HTTP API. На данном этапе необходимо только правильно организовать структуру проекта в соответствии с принципами layer-архитектуры, изученными на занятии.

Цель задания
Создать новый модуль приложения, содержащий сущность BoardGame, и разделить ответственность между слоями приложения.

Что необходимо сделать
Шаг 1
Создайте новый модуль:

board-game
Шаг 2
Создайте класс BoardGame.

Класс должен содержать следующие поля:

Поле	Тип
id	number
title	string
minPlayers	number
maxPlayers	number
playTime	number
Шаг 3
Создайте сервис:

BoardGameService
Добавьте в него метод:

findAll(): BoardGame[]
Пока метод должен возвращать заранее созданный массив из минимум трёх объектов BoardGame.

Например:

Каркассон
Колонизаторы
Ticket to Ride
Содержимое объектов вы придумываете самостоятельно.

Шаг 4
Создайте контроллер:

BoardGameController
Добавьте в него метод:

findAll()
Метод должен вызывать соответствующий метод сервиса и возвращать его результат.

Шаг 5
Подключите контроллер и сервис к модулю.

Ожидаемая структура проекта
board-game/
│
├── board-game.module.ts
├── board-game.controller.ts
├── board-game.service.ts
└── board-game.ts
Пример результата работы
Если вызвать метод контроллера, он должен вернуть массив объектов.

Например:

[
    {
        id: 1,
        title: "Каркассон",
        minPlayers: 2,
        maxPlayers: 5,
        playTime: 40
    },
    {
        id: 2,
        title: "Колонизаторы",
        minPlayers: 3,
        maxPlayers: 4,
        playTime: 90
    },
    {
        id: 3,
        title: "Ticket to Ride",
        minPlayers: 2,
        maxPlayers: 5,
        playTime: 60
    }
]
 */



export class BoardGame {
    id: number;
    title: string;
    minPlayers: number;
    maxPlayers: number;
    playTime: number;

constructor(
    id: number,
    title: string,
    minPlayers: number,
    maxPlayers: number,
    playtime: number,
) {
    this.id = id;
    this.title = title;
    this.minPlayers = minPlayers;
    this.maxPlayers = maxPlayers;
    this.playTime = playTime;
  }
}

