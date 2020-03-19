import Chart from 'chart.js';

export default {
  install(Vue) {
    console.log('chart plugin loaded');

    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$_Chart = Chart;
  }
};
