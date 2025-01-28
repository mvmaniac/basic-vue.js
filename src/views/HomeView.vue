<script setup lang="ts">
  import type { Person } from '@/types';
  import type { Ref } from 'vue';

  import { inject, ref } from 'vue';
  import { useRouter } from 'vue-router';

  import AppCard from '@/components/app/AppCard.vue';
  import AppGrid from '@/components/app/AppGrid.vue';

  const router = useRouter();
  const goAboutPage = async () => await router.push('/about');

  const items: Ref<string[]> = ref(['사과', '딸기', '포도', '바나나']);

  const person = inject<Person>('person')!;
  console.log('person.name: ', person.name);
</script>

<template>
  <div>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>

    <hr class="my-4" />
    <AppGrid v-slot="{ item }" :items="items">
      <AppCard>{{ item }}</AppCard>
    </AppGrid>

    <hr class="my-4" />
    <h2>{{ $person.name }}</h2>
    <button class="btn btn-primary" @click="person.say">click person</button>
  </div>
</template>

<style scoped></style>
