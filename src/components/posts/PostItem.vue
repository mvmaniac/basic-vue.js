<script setup lang="ts">
  import { computed, inject } from 'vue';

  import type { Post } from '@/shared/types';

  import AppCard from '@/components/app/AppCard.vue';

  import { Dayjs } from '@/shared/plugins/symbol';

  const props = withDefaults(defineProps<Post>(), {
    title: '',
    content: '',
    createdAt: '',
  });

  defineEmits<{
    modal: [];
    preview: [];
  }>();

  const dayjs = inject(Dayjs)!;
  const createdDate = computed<string>(() =>
    dayjs(props.createdAt).format('YYYY. MM. DD HH:mm:ss'),
  );
</script>

<template>
  <AppCard>
    <h5 class="card-title text-truncate">{{ title }}</h5>
    <p class="card-text text-truncate">
      {{ content }}
    </p>
    <p class="text-muted">{{ createdDate }}</p>
    <template #footer>
      <div class="d-flex flex-row-reverse">
        <button class="btn p-0" @click.stop="$emit('modal')">
          <i class="bi bi-emoji-sunglasses"></i>
        </button>
        <button class="btn p-1" @click.stop="$emit('preview')">
          <i class="bi bi-app"></i>
        </button>
      </div>
    </template>
  </AppCard>
</template>

<style scoped></style>
