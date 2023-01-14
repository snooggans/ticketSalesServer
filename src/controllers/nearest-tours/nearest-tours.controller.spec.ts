import { Test, TestingModule } from '@nestjs/testing';
import { NearestToursController } from './nearest-tours.controller';

describe('NearestToursController', () => {
  let controller: NearestToursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NearestToursController],
    }).compile();

    controller = module.get<NearestToursController>(NearestToursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
