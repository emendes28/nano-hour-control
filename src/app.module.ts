import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DayOfJobController } from './day-of-job/day-of-job.controller';
import { DayOfJobModule } from './day-of-job/day-of-job.module';
import { DayOfJobService } from './day-of-job.service';

const prod = 'now:amor5f@ds119323.mlab.com:19323';
const dev = 'localhost:27017';

@Module({
  imports: [MongooseModule.forRoot(`mongodb://${prod}/controle_horas`), DayOfJobModule],
  controllers: [AppController, DayOfJobController],
  providers: [AppService, DayOfJobService],
})
export class AppModule {}
