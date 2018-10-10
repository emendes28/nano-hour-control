import { Get, Controller, Post, Put, Delete, Param, Logger, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { DayOfJobDto } from './day-of-job/dto/day-of-job.dto';

@Controller('jobDay')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('history')
  returnAll(): string {
    return this.appService.root();
  }

  @Get('jobday')
  findWithDay(): string {
    const day = new Date();
    Logger.log(day);
    return `This action returns a #${day}`;
  }

  @Post()
  async save(@Body() day: DayOfJobDto) {
    return `This action save a job day #${day.toString()}`;
  }

  @Put(':day')
  update(@Param(':day') day, @Body() jobDay: DayOfJobDto) {
    return `This action update #${day} of a #${jobDay}`;
  }

}
