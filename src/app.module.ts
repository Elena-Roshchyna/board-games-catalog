import { Module } from '@nestjs/common';
import { BoardGameModule } from './board-game/board-game.module';

@Module({
    imports: [
        BoardGameModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}

