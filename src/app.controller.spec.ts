import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DayOfJobDto } from './day-of-job/dto/day-of-job.dto';

describe('AppController', () => {
  let app: TestingModule;
  let dayOfjob: DayOfJobDto;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('get history', () => {
    it(`should return "Hello word"`,  () => {
      const appController = app.get<AppController>(AppController);
      expect( appController.returnAll()).toBe('Hello World!');
    });
  });
  describe('get dayOfjob', () => {
    const day = new Date();
    it(`should return "This action returns a #${day}"`,  () => {
      const appController = app.get<AppController>(AppController);
      expect( appController.findWithDay()).toMatch(`This action returns a #${day}`);
    });
  });

  describe('post dayOfjob', () => {
    dayOfjob = new DayOfJobDto();
    dayOfjob.jobDay = new Date();
    dayOfjob.entry = new Date();
    dayOfjob.endDay = new Date();
    dayOfjob.goLauch = new Date();
    dayOfjob.returnLauch = new Date();

    it(`should return "This action returns a job day #${dayOfjob.toString()}"`, async () => {
      const appController = app.get<AppController>(AppController);
      expect(await appController.save(dayOfjob)).toBe(`This action save a job day #${dayOfjob.toString()}`);
    });
  });

  describe('put dayOfjob', () => {
    const day = new Date();
    dayOfjob = new DayOfJobDto();
    dayOfjob.jobDay = new Date();
    dayOfjob.entry = new Date();
    dayOfjob.endDay = new Date();
    dayOfjob.goLauch = new Date();
    dayOfjob.returnLauch = new Date();

    it(`should return "This action update a job day #${dayOfjob.toString()}"`, async () => {
      const appController = app.get<AppController>(AppController);
      expect(await appController.update(day, dayOfjob)).toBe(`This action update #${day} of a #${dayOfjob.toString()}`);
    });
  });

});
