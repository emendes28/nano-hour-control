import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DayOfJobController } from './day-of-job.controller';
import { DayOfJobService } from './day-of-job.service';
import { DayOfJobSchema } from './schemas/day-of-job.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'DayOfJob', schema: DayOfJobSchema }])],
    controllers: [DayOfJobController],
    providers: [DayOfJobService],
})
export class DayOfJobModule {}
