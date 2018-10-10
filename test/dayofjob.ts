export class DayOfJob {
    jobDay: Date;
    entry: Date;
    goLauch: Date;
    returnLauch: Date;
    endDay: Date;
    toString() {
      return `${this.jobDay} =
      Entrada : ${this.entry}
      Almoço Saida: ${this.goLauch}
      Almoço volta: ${this.returnLauch}
      Saida: ${this.endDay}`;
    }
  }