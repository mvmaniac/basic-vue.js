<script setup lang="ts">
  // defineModel를 쓰지 않고 아래 처럼 할 수 있음
  withDefaults(defineProps<{ title: string }>(), {
    title: '',
  });

  const emit = defineEmits<{
    'update:title': [value: string];
  }>();

  const changeTitle = (e: Event) => {
    setTimeout(() => {
      emit('update:title', (e.target as HTMLInputElement).value);
    }, 500);
  };

  // 양방향 바인딩 3.4 이후 방법
  const limit = defineModel<number>('limit');
</script>

<template>
  <form @submit.prevent>
    <div class="row g-3">
      <div class="col">
        <input
          :value="title"
          type="text"
          class="form-control"
          placeholder="제목으로 검색해주세요."
          @input="changeTitle"
        />
      </div>
      <div class="col-3">
        <select v-model="limit" class="form-select">
          <option :value="3">3개씩 보기</option>
          <option :value="6">6개씩 보기</option>
          <option :value="9">9개씩 보기</option>
        </select>
      </div>
    </div>
  </form>
</template>

<style scoped></style>
