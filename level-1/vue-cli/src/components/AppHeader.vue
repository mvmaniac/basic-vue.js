<template>
  <header>
    <h1>{{ data }}</h1>
    <button @click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    sendEvent() {
      this.$emit('renew');
    }
  }
};
</script>

<style></style>
