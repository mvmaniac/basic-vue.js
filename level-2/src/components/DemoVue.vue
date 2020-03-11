<template>
  <div id="app">
    <p>{{ originPrcie }}</p>
    <p>{{ doublePrice }}</p>
    <p>{{ triplePrice }}</p>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters(['originPrice', 'doublePrice', 'triplePrice'])
      // originPrice() {
      //   return this.$store.getters.originPrice;
      // },
      // doublePrice() {
      //   return this.$store.getters.doublePrice;
      // },
      // triplePrice() {
      //   return this.$store.getters.triplePrice;
      // }
    }
  };
</script>

<style></style>
