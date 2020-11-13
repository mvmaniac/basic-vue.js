<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
  import ToolBar from './components/Toolbar.vue';
  import Spinner from './components/Spinner.vue';
  import bus from './utils/bus';

  export default {
    components: {
      ToolBar,
      Spinner
    },
    data: () => ({
      loadingStatus: false
    }),
    created() {
      bus.$on('start-spinner', this.startSpinner);
      bus.$on('end-spinner', this.endSpinner);
    },
    beforeDestroy() {
      bus.$off('start-spinner', this.startSpinner);
      bus.$off('end-spinner', this.endSpinner);
    },
    methods: {
      startSpinner() {
        this.loadingStatus = true;
      },
      endSpinner() {
        this.loadingStatus = false;
      }
    }
  };
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  a {
    color: #34495e;
    text-decoration: none;
  }

  a.router-link-exact-active {
    text-decoration: underline;
  }

  a:hover {
    color: #42b883;
    text-decoration: underline;
  }

  /* Router transition */
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.5s;
  }
  .page-enter,
  .page-leave-to {
    opacity: 0;
  }
</style>
