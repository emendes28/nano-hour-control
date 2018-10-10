import { Test, TestingModule } from '@nestjs/testing';
import { DayOfJobService } from './day-of-job.service';

describe('DayOfJobService', () => {
  let service: DayOfJobService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DayOfJobService],
    }).compile();
    service = module.get<DayOfJobService>(DayOfJobService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
