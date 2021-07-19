import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module
class ElectricityPeriod extends VuexModule {
    private cost = 361.00;
    private beginDate: Date = new Date("2021-07-9");
    private endDate: Date = new Date("2021-10-9");
    private powerUsage = 2700.0;

    get periodCost(){
        return this.cost;
    }

    get periodBeginDate() {
        return this.beginDate;
    }

    get periodEndDate() {
        return this.endDate;
    }

    get periodPowerUsage() {
        return this.powerUsage;
    }

    @Mutation
    setCost(inCost: number){
        this.cost = inCost;
    }

    @Mutation
    setBeginDate(inBeginDate: Date){
        this.beginDate = inBeginDate;
    }

    @Mutation
    setEndDate(inEndDate: Date){
        this.endDate = inEndDate;
    }

    @Mutation
    setPowerUsage(inPowerUsage: number){
        this.powerUsage = inPowerUsage;
    }

    @Action
    public addElectricityPeriod(inCost: number, inBeginDate: Date, inEndDate: Date, inPowerUsage: number): void {
        this.setCost(inCost);
        this.setBeginDate(inBeginDate);
        this.setEndDate(inEndDate);
        this.setPowerUsage(inPowerUsage);
    }
}

export default ElectricityPeriod;
