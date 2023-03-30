<template>
  <LineChart
    id="lineChart"
    :options="chartOptions"
    :data="chartData"
    :width="400"
    :height="400"
  ></LineChart>
</template>

<script>
  import { Line as LineChart } from 'vue-chartjs';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    CategoryScale,
    LinearScale
  } from 'chart.js';

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    CategoryScale,
    LinearScale
  );

  export default {
    components: { LineChart },
    data() {
      return {
        chartData: {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July'
          ],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [0, 10, 5, 2, 20, 30, 45]
            }
          ]
        },
        chartOptions: {}
      };
    }
  };
</script>

<style></style>
