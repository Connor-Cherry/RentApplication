class ElectricityPeriod {
  private cost: number;
  private beginDate: Date;
  private endDate: Date;
  private powerUsage: number;

  get getCost(): number {
    return this.cost;
  }

  get getBeginDate(): Date {
    return this.beginDate;
  }

  get getEndDate(): Date {
    return this.endDate;
  }

  get getPowerUsage(): number {
    return this.powerUsage;
  }

  getJson() {
    return JSON.stringify(this);
  }

  constructor(
    inCost: number,
    inBeginDate: Date,
    inEndDate: Date,
    inPowerUsage: number
  ) {
    this.cost = inCost;
    this.beginDate = inBeginDate;
    this.endDate = inEndDate;
    this.powerUsage = inPowerUsage;
  }
}

export { ElectricityPeriod };
