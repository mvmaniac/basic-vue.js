<template>
  <canvas id="lineChart" ref="lineChart" width="400" height="400"></canvas>
</template>

<script>
  import Chart from 'chart.js';

  export default {
    mounted() {
      // const ctx = document.getElementById('lineChart').getContext('2d');
      const ctx = this.$refs.lineChart;

      const lineChart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
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

        // Configuration options go here
        options: {}
      });
    }
  };
</script>

<style></style>
