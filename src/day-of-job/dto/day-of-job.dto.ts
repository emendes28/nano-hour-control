export class DayOfJobDto {
    readonly jobDay: Date;
    readonly entry: Date;
    readonly goLauch: Date;
    readonly returnLauch: Date;
    readonly endDay: Date;
    toString() {
      return `${this.jobDay} =
      Entrada : ${this.entry}
      Almoço Saida: ${this.goLauch}
      Almoço volta: ${this.returnLauch}
      Saida: ${this.endDay}`;
    }
  }