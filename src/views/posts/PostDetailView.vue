<script setup lang="ts">
  import type { Post } from '@/types';

  import { computed } from 'vue';
  import {
    onBeforeRouteLeave,
    onBeforeRouteUpdate,
    useRouter,
  } from 'vue-router';
  
  import { useAlert } from '@/composable/useAlert.ts';
  import { useAxios } from '@/composable/useAxios.ts';

  import AppError from '@/components/app/AppError.vue';
  import AppLoading from '@/components/app/AppLoading.vue';

  interface Props {
    id: number;
  }

  const props = withDefaults(defineProps<Props>(), {});
  const router = useRouter();

  /**
   * ref
   * 장) 객체 할당 가능
   * 단) form.value.title, form.value.content
   * 장) 일관성
   *
   * reactvie
   * 단) 객체 할당 불가능
   * 장) form.title, form.content
   */
  // const post: Ref<Post> = ref({
  //   title: '',
  //   content: '',
  // });

  const { vAlert, vSuccess } = useAlert();

  const url = computed(() => `/posts/${props.id}`);
  const { error, loading, data: post } = useAxios<Post>(url);

  const {
    error: removeError,
    loading: removeLoading,
    execute,
  } = useAxios<Post>(
    `/posts/${props.id}`,
    { method: 'delete' },
    {
      immediate: false,
      onSuccess: () => {
        vSuccess('삭제가 완료되었습니다.');
        void router.push({ name: 'PostList' });
      },
      onError: (err) => {
        vAlert(err.message);
      },
    },
  );

  const remove = () => {
    if (!confirm('삭제 하시겠습니까?')) {
      return;
    }
    execute();
  };

  const goListPage = () => router.push({ name: 'PostList' });
  const goEditPage = () =>
    router.push({ name: 'PostEdit', params: { id: props.id } });

  // router.push를 통해 경로가 변경될 때 호출 됨
  onBeforeRouteUpdate(() => {
    console.log('onBeforeRouteUpdate');
  });

  // 페이지를 벗어날 때 호출 됨
  onBeforeRouteLeave(() => {
    console.log('onBeforeRouteLeave');
  });
</script>

<template>
  <AppLoading v-if="loading" />

  <AppError v-else-if="error" :message="error.message" />

  <div v-else>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">
      {{ $dayjs(post.createdAt).format('YYYY. MM. DD HH:mm:ss') }}
    </p>
    <hr class="my-4" />

    <AppError v-if="removeError" :message="removeError.message" />

    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button
          class="btn btn-outline-danger"
          :disabled="removeLoading"
          @click="remove"
        >
          <template v-if="removeLoading">
            <span class="spinner-grow spinner-grow-sm" role="status"></span>
            <span class="visually-hidden">Loading...</span>
          </template>
          <template v-else>삭제</template>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
