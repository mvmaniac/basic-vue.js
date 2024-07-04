<script setup lang="ts">
  import BaseButton from '@/components/base/BaseButton.vue';
</script>

<template>
  <main>
    <h1>메인 페이지</h1>
    <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" /><br />
    <BaseButton />
  </main>
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
