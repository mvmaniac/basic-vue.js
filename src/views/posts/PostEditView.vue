<script setup lang="ts">
  import type { Post } from '@/types';

  import { useRoute, useRouter } from 'vue-router';

  import { useAlert } from '@/composable/useAlert.ts';
  import { useAxios } from '@/composable/useAxios.ts';

  import AppError from '@/components/app/AppError.vue';
  import AppLoading from '@/components/app/AppLoading.vue';
  import PostForm from '@/components/posts/PostForm.vue';

  const router = useRouter();
  const route = useRoute();
  const { vAlert, vSuccess } = useAlert();

  const id = parseInt(route.params.id as string);

  const { data: form, error, loading } = useAxios<Post>(`/posts/${id}`);

  const {
    error: editError,
    loading: editLoading,
    execute,
  } = useAxios<Post>(
    `/posts/${id}`,
    { method: 'patch' },
    {
      immediate: false,
      onSuccess: () => {
        vSuccess('수정이 완료되었습니다!');
        void router.push({ name: 'PostDetail', params: { id } });
      },
      onError: (err: Error) => {
        vAlert(err.message);
      },
    },
  );

  const edit = () => {
    execute({
      ...form.value,
    });
  };

  const goDetailPage = () =>
    router.push({ name: 'PostDetail', params: { id } });
</script>

<template>
  <AppLoading v-if="loading" />

  <AppError v-else-if="error" :message="error.message" />

  <div v-else>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <AppError v-if="editError" :message="editError.message" />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="edit"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="goDetailPage"
        >
          취소
        </button>
        <button class="btn btn-primary" :disabled="editLoading">
          <template v-if="editLoading">
            <span class="spinner-grow spinner-grow-sm" role="status"></span>
            <span class="visually-hidden">Loading...</span>
          </template>
          <template v-else>수정</template>
        </button>
      </template>
    </PostForm>
  </div>
</template>

<style scoped></style>
