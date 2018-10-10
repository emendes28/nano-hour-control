import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DayOfJob } from './interfaces/day-of-job.interface';
import { DayOfJobDto } from './dto/day-of-job.dto';

@Injectable()
export class DayOfJobService {
    constructor(@InjectModel('DayOfJob') private readonly dayOfJobModel: Model<DayOfJob>) {}
  
    async create(dayOfJobDto: DayOfJobDto): Promise<DayOfJob> {
      const dayOfJob = new this.dayOfJobModel(dayOfJobDto);
      return await dayOfJob.save();
    }
  
    async findAll(): Promise<DayOfJob[]> {
      return await this.dayOfJobModel.find().exec();
    }
    
    async findByDate(day: Date): Promise<DayOfJob> {
        return await this.dayOfJobModel.find(day).exec();
    }
    
}
