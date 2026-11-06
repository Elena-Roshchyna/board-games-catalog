import { Module } from '@nestjs/common';
import { BoardGameController } from './board-game.controller';
import { BoardGameService } from './board-game.service';

@Module({
    controllers: [BoardGameController],
    providers: [BoardGameService],
})
export class BoardGameModule {}

