import { Test, TestingModule } from '@nestjs/testing';
import { ParentController } from './parent.controller';
import { ParentService } from './parent.service';

describe('ParentController', () => {
  let controller: ParentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParentController],
      providers: [ParentService],
    }).compile();

    controller = module.get<ParentController>(ParentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
