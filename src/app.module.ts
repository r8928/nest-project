import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { DogsController } from './dogs/dogs.controller';
import { RatsModule } from './rats/rats.module';

@Module({
  imports: [RatsModule],
  controllers: [AppController, CatsController, DogsController],
  providers: [AppService],
})
export class AppModule {}
