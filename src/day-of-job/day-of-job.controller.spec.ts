import { Test, TestingModule } from '@nestjs/testing';
import { DayOfJobController } from './day-of-job.controller';

describe('DayOfJob Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [DayOfJobController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: DayOfJobController = module.get<DayOfJobController>(DayOfJobController);
    expect(controller).toBeDefined();
  });
});
