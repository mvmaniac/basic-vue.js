<script setup lang="ts">
  import type { Post } from '@/shared/types';

  // 양방향 바인딩 3.4 이전 방법
  withDefaults(defineProps<Post>(), {
    title: '',
    content: '',
  });

  defineEmits<{
    'update:title': [value: string];
    'update:content': [value: string];
  }>();
</script>

<template>
  <form>
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input
        id="title"
        v-focus
        type="text"
        class="form-control"
        :value="title"
        @input="$emit('update:title', ($event.target as HTMLInputElement).value)"
      />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">내용</label>
      <textarea
        id="content"
        class="form-control"
        rows="3"
        :value="content"
        @input="$emit('update:content', ($event.target as HTMLInputElement).value)"
      ></textarea>
    </div>
    <div class="d-flex gap-2 mt-4">
      <slot name="actions" />
    </div>
  </form>
</template>

<style scoped></style>
