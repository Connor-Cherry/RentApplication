import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
} from "vuex-module-decorators";
import store from "../index";
import { ElectricityPeriod } from "../../model/ElectricityPeriod";
import axios from "axios";

@Module({ dynamic: true, store, name: "ElectricityModule" })
class ElectricityModule extends VuexModule {
  private periods: ElectricityPeriod[] = [];

  get allPeriods(): ElectricityPeriod[] {
    return this.periods;
  }

  @Mutation
  public setPeriods(inPeriods: ElectricityPeriod[]): void {
    this.periods = inPeriods;
  }

  @Mutation
  public addPeriod(inPeriod: any): void {
    console.log(typeof inPeriod);
    const periodObj = JSON.parse(JSON.stringify(inPeriod));
    const elecPeriod: ElectricityPeriod = new ElectricityPeriod(
      parseFloat(periodObj.cost),
      new Date(periodObj.beginDate),
      new Date(periodObj.endDate),
      parseFloat(periodObj.powerUsage)
    );
    this.periods.push(elecPeriod);
  }

  @Action
  public async getAllPeriods() {
    const response = await axios.get("http://localhost:5000/api/posts");
    const periods: any = JSON.parse(JSON.stringify(response.data));
    const electricPeriods: ElectricityPeriod[] = [];
    periods.forEach((period: any) => {
      electricPeriods.push(
        new ElectricityPeriod(
          parseFloat(period.cost),
          new Date(period.beginDate),
          new Date(period.endDate),
          parseFloat(period.powerUsage)
        )
      );
    });
    this.context.commit("setPeriods", electricPeriods);
  }

  @Action({ rawError: true })
  public async addElectricityPeriod(inPeriod: ElectricityPeriod) {
    const elecPeriod: string = inPeriod.getJson();
    const response = await axios.post(
      "http://localhost:5000/api/posts",
      JSON.parse(elecPeriod)
    );
    this.context.commit("addPeriod", response.data);
  }

  @Action
  public addElectricityPeriods(inPeriods: ElectricityPeriod[]): void {
    this.context.commit("setPeriods", inPeriods);
  }
}

export default getModule(ElectricityModule);
