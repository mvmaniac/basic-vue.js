<script setup lang="ts">
  import { useAlert } from '@/composable/useAlert';

  const { alerts } = useAlert();

  const typeStyle = (type = '') =>
    type === 'error' ? 'alert-danger' : 'alert-primary';
</script>

<template>
  <div class="app-alert">
    <transition-group name="slide">
      <div
        v-for="({ message, type }, index) in alerts"
        :key="index"
        :class="typeStyle(type)"
        class="alert"
        role="alert"
      >
        {{ message }}
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
  .app-alert {
    position: fixed;
    top: 10px;
    right: 10px;
  }

  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.5s ease;
  }

  .slide-enter-to,
  .slide-leave-from {
    opacity: 1;
    transform: translateY(0px);
  }
</style>
