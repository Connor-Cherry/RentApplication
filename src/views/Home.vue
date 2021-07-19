<template>
  <div class="home">
    <MainComponent style="width: 100%" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainComponent from "@/components/MainComponent.vue"; // @ is an alias to /src

@Component({
  components: {
    MainComponent,
  },
})
export default class Home extends Vue {}
</script>
