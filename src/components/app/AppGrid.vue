<script setup lang="ts">
  import type { Post } from '@/shared/types';

  // TODO:[yhs] 제네릭으로 선언 할 수 없나?, slot 타입도 마찬가지...
  interface Props {
    items: string[] | Post[];
    colClass?: string;
  }

  withDefaults(defineProps<Props>(), {
    colClass: 'col-4',
  });
</script>

<template>
  <div class="row g-3">
    <template v-if="$slots.postItem">
      <div v-for="(item, index) in items" :key="index" :class="colClass">
        <slot name="postItem" :item="item as Post" :index="index" />
      </div>
    </template>

    <template v-if="$slots.default">
      <div v-for="(item, index) in items" :key="index" :class="colClass">
        <slot :item="item as string" :index="index" />
      </div>
    </template>
  </div>
</template>

<style scoped></style>
