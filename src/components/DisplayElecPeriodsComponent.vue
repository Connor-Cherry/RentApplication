<template>
  <div>
    <div>
      <h3>Electricity Periods</h3>
    </div>
    <div id="periods">
      <div
        v-for="period in allElecPeriods"
        v-bind:key="period.cost"
        class="period"
      >
        <div>{{ period.getCost }}</div>
        <div>{{ period.getEndDate }}</div>
        <div>{{ period.getBeginDate }}</div>
        <div>{{ period.getPowerUsage }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ElectricityModule from "../store/modules/Electricity";
import { ElectricityPeriod } from "../model/ElectricityPeriod";

@Component
export default class DisplayElecPeriodsComponent extends Vue {
  get allElecPeriods(): ElectricityPeriod[] {
    return ElectricityModule.allPeriods;
  }
  created() {
    if (ElectricityModule.allPeriods.length === 0) {
      ElectricityModule.getAllPeriods();
    }
    let periods1: ElectricityPeriod = new ElectricityPeriod(
      361.0,
      new Date("2021-07-9"),
      new Date("2021-10-9"),
      2700.0
    );
    let periods2: ElectricityPeriod = new ElectricityPeriod(
      321.0,
      new Date("2021-10-10"),
      new Date("2022-01-10"),
      2600.0
    );
    let periods3: ElectricityPeriod = new ElectricityPeriod(
      390.0,
      new Date("2022-01-11"),
      new Date("2022-04-11"),
      2900.0
    );
    let periods: ElectricityPeriod[] = [periods1, periods2, periods3];
    ElectricityModule.addElectricityPeriods(periods);
  }
}
</script>

<style scoped></style>
