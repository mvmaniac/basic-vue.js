<template>
  <input
    id="checkbox"
    type="checkbox"
    name="checkbox"
    :value="value"
    @click="toggleCheck"
  />
</template>

<script>
  export default {
    // @input 이벤트
    // :value 값
    props: {
      value: {
        type: Boolean,
        default: () => false
      }
    },
    methods: {
      toggleCheck() {
        this.$emit('input', !this.value);
      }
    }
  };
</script>

<style></style>
