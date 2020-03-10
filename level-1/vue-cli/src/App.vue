<template>
  <div>
    <app-header :data="str" @renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    'app-header': AppHeader
  },
  data() {
    return {
      str: 'Header'
    };
  },
  methods: {
    renewStr() {
      this.str = 'hi';
    }
  }
};
</script>

<style></style>
