import { Test, TestingModule } from '@nestjs/testing';
import { RatsController } from './rats.controller';
import { RatsService } from './rats.service';

describe('RatsController', () => {
  let controller: RatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RatsController],
      providers: [RatsService],
    }).compile();

    controller = module.get<RatsController>(RatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
