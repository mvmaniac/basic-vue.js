<template>
  <div>
    <h1>Controlled Approach</h1>
    <check-box v-model="checked"></check-box>
  </div>
</template>

<script>
  import CheckBox from './CheckBox.vue';

  export default {
    components: {
      CheckBox,
    },
    data: () => ({
      checked: false,
    }),
  };
</script>

<style></style>
