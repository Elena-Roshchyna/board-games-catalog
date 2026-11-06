import { Controller, Get } from '@nestjs/common';
import { BoardGameService } from './board-game.service';
import { BoardGame } from './board-game';



@Controller('board-game')
export class BoardGameController {
    constructor(private readonly boardGameService: BoardGameService) {}

    @Get()
    findAll(): BoardGame[]  {

        return this.boardGameService.findAll();
   }

}

