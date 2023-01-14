import { Test, TestingModule } from '@nestjs/testing';
import { TourSearchController } from './tour-search.controller';

describe('TourSearchController', () => {
  let controller: TourSearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TourSearchController],
    }).compile();

    controller = module.get<TourSearchController>(TourSearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
