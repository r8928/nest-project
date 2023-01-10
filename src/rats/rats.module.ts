import { Module } from '@nestjs/common';
import { RatsService } from './rats.service';
import { RatsController } from './rats.controller';

@Module({
  controllers: [RatsController],
  providers: [RatsService]
})
export class RatsModule {}
