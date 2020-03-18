<template>
  <div>
    <h2>Bar Chart</h2>
    <bar-chart></bar-chart>
    <h2>Line Chart</h2>
    <line-chart></line-chart>
  </div>
</template>

<script>
  import BarChart from '../components/chart/BarChart.vue';
  import LineChart from '../components/chart/LineChart.vue';

  export default {
    components: {
      BarChart,
      LineChart
    }
  };
</script>

<style></style>
