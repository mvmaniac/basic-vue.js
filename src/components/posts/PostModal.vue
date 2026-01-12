<script setup lang="ts">
  import { computed } from 'vue';

  import type { Post } from '@/shared/types';

  import AppModal from '@/components/app/AppModal.vue';

  interface Props extends Omit<Post, 'id'> {
    modelValue?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    modelValue: false,
    title: '',
    content: '',
  });

  const emit = defineEmits<{
    'update:modelValue': [value: boolean];
  }>();

  const show = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value);
    },
  });

  const closeModal = () => (show.value = false);
</script>

<template>
  <AppModal v-model="show" title="게시글">
    <template #default>
      <div class="row g-3">
        <div class="col-3 text-muted">제목</div>
        <div class="col-9">{{ title }}</div>
        <div class="col-3 text-muted">내용</div>
        <div class="col-9">{{ content }}</div>
        <div class="col-3 text-muted">등록일</div>
        <div class="col-9">
          {{ $dayjs(createdAt).format('YYYY. MM. DD HH:mm:ss') }}
        </div>
      </div>
    </template>
    <template #actions>
      <button type="button" class="btn btn-secondary" @click="closeModal">닫기</button>
    </template>
  </AppModal>
</template>

<style scoped></style>
