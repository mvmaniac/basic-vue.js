<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  import type { Post } from '@/shared/types';
  import type { Ref } from 'vue';

  import AppError from '@/components/app/AppError.vue';
  import PostForm from '@/components/posts/PostForm.vue';

  import { useAlert } from '@/composable/useAlert.ts';
  import { useAxios } from '@/composable/useAxios.ts';

  const router = useRouter();
  const { vAlert, vSuccess } = useAlert();

  const visibleForm = ref(true);
  const form: Ref<Post> = ref({
    title: '',
    content: '',
  });

  const { error, loading, execute } = useAxios<Post, Post>(
    '/posts',
    {
      method: 'post',
    },
    {
      immediate: false,
      onSuccess: () => {
        vSuccess('등록이 완료되었습니다!');
        void router.push({ name: 'PostList' });
      },
      onError: (err: Error) => {
        vAlert(err.message);
      },
    },
  );

  const save = () => {
    execute({ ...form.value, createdAt: Date.now() });
  };

  const goListPage = () => router.push({ name: 'PostList' });
</script>

<template>
  <div>
    <h2 @click="visibleForm = !visibleForm">게시글 등록</h2>
    <hr class="my-4" />

    <AppError v-if="error" :message="error.message" />

    <PostForm
      v-if="visibleForm"
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="save"
    >
      <template #actions>
        <button type="button" class="btn btn-outline-dark" @click="goListPage">목록</button>
        <button class="btn btn-primary" :disabled="loading">
          <template v-if="loading">
            <span class="spinner-grow spinner-grow-sm" role="status"></span>
            <span class="visually-hidden">Loading...</span>
          </template>
          <template v-else> 저장</template>
        </button>
      </template>
    </PostForm>
  </div>
</template>

<style scoped></style>
