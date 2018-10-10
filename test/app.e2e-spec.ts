import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { DayOfJob } from './dayofjob';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const uriJobDay = '/jobDay';
  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/jobday (GET)', () => {
    return request(app.getHttpServer())
      .get(`${uriJobDay}/jobday`)
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .expect(`This action returns a #${new Date()}`);
  });

  it('/history (GET)', () => {
    return request(app.getHttpServer())
      .get(`${uriJobDay}/history`)
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .expect('Hello World!');
  });

  it(' (POST)', () => {
    const dayOfjob = new DayOfJob();
    dayOfjob.jobDay = new Date();
    dayOfjob.entry = new Date();
    dayOfjob.endDay = new Date();
    dayOfjob.goLauch = new Date();
    dayOfjob.returnLauch = new Date();
    return request(app.getHttpServer())
      .post(uriJobDay)
      .set('Accept', 'application/json')
      .send(dayOfjob)
      .expect(201);
  });

});
