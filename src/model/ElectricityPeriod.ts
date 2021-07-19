
class ElectricityPeriod{
    private cost: number;
    private beginDate: Date;
    private endDate: Date;
    private powerUsage: number;

    constructor(inCost: number, inBeginDate: Date, inEndDate: Date, inPowerUsage: number)
    {
        this.cost = inCost;
        this.beginDate = inBeginDate;
        this.endDate = inEndDate;
        this.powerUsage = inPowerUsage;
    }
}

export {ElectricityPeriod}
