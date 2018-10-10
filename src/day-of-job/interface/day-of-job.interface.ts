import { Document } from 'mongoose';

export interface DayOfJob extends Document {
    readonly jobDay: Date;
    readonly entry: Date;
    readonly goLauch: Date;
    readonly returnLauch: Date;
    readonly endDay: Date;
  }