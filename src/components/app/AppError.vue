<script setup lang="ts">
  withDefaults(defineProps<{ message: string }>(), {
    message: '',
  });
</script>

<template>
  <div class="text-center text-danger py-4">
    {{ message }}
  </div>
</template>

<style scoped></style>
