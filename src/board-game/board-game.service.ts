
import { Injectable } from '@nestjs/common';
import { BoardGame } from './board-game';

@Injectable()
export class BoardGameService {

        private readonly boardGames: BoardGame[] = [
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
                playTime: 90,
            },
            {
                id: 3,
                title: "Ticket to Ride",
                minPlayers: 2,
                maxPlayers: 5,
                playTime: 60,
            },


        ];

        findAll(): BoardGame[] {
            return this.boardGames;
        }
}



