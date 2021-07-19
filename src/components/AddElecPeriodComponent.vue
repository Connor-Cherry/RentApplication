<template>
  <div>
    <div>
      <v-card-title>
        <h2>Add Electricity Period</h2>
      </v-card-title>
    </div>
    <div>
      <v-card-text>
        <v-form class="px-3">
          <v-menu
            max-width="290px"
            min-width="290px"
            :close-on-content-click="false"
            transition="scale-transition"
          >
            <template v-slot:activator="{ on }">
              <div>
                <v-text-field
                  label="Begin Date"
                  prepend-icon="date_range"
                  :value="beginDate"
                  v-on="on"
                >
                </v-text-field>
              </div>
            </template>
            <v-date-picker v-model="beginDate"></v-date-picker>
          </v-menu>
          <v-menu
            max-width="290px"
            min-width="290px"
            :close-on-content-click="false"
            transition="scale-transition"
          >
            <template v-slot:activator="{ on }">
              <div>
                <v-text-field
                  label="End Date"
                  prepend-icon="date_range"
                  :value="endDate"
                  v-on="on"
                >
                </v-text-field>
              </div>
            </template>
            <v-date-picker v-model="endDate"></v-date-picker>
          </v-menu>
          <v-text-field label="Cost" prefix="$" v-model="cost"></v-text-field>
          <v-text-field
            label="Power Usage"
            suffix="kW"
            v-model="powerUsage"
          ></v-text-field>
          <v-btn text class="success mx-0 mt-3" @click="submit"
            >Add Period</v-btn
          >
        </v-form>
      </v-card-text>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ElectricityModule from "../store/modules/Electricity";
import { ElectricityPeriod } from "../model/ElectricityPeriod";

@Component
export default class AddElecPeriodComponent extends Vue {
  private beginDate = "";
  private endDate = "";
  private cost = 0;
  private powerUsage = 0;

  public submit(e: Event): void {
    e.preventDefault();
    ElectricityModule.addElectricityPeriod(
      new ElectricityPeriod(
        this.cost,
        new Date(this.beginDate),
        new Date(this.endDate),
        this.powerUsage
      )
    );
  }
}
</script>

<style scoped></style>
