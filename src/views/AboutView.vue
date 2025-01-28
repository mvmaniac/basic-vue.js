<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useRoute } from 'vue-router';

  import { useCounterStore } from '@/stores/counter';

  const route = useRoute();
  console.log('route.path: ', route.path);

  const store = useCounterStore();
  const { counter, doubleCount, doubleCountPlusOne } = storeToRefs(store);
</script>

<template>
  <div>
    <h2>About View</h2>
    <p>{{ $route.path }}</p>
    <button class="btn btn-primary" @click="$router.push('/')">
      Home으로 이동
    </button>
    <h2>Store</h2>
    <p>counter: {{ counter }}</p>
    <p>doubleCount: {{ doubleCount }}</p>
    <p>doubleCountPlusOne: {{ doubleCountPlusOne }}</p>
    <button @click="store.increment()">Click!!</button>
  </div>
</template>

<style scoped></style>
