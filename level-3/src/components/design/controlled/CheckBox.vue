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
    props: {
      value: {
        type: Boolean,
        default: () => false
      }
    },
    // @input 이벤트
    // :value 값
    emits: ['input'],
    methods: {
      toggleCheck() {
        this.$emit('input', !this.value);
      }
    }
  };
</script>

<style></style>
