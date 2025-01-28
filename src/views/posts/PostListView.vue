<script setup lang="ts">
  import type { Post, SearchParams } from '@/types';
  import type { Ref } from 'vue';

  import { computed, ref, watch } from 'vue';
  import { useRouter } from 'vue-router';
  
  import { useAxios } from '@/composable/useAxios.ts';

  import AppCard from '@/components/app/AppCard.vue';
  import AppError from '@/components/app/AppError.vue';
  import AppGrid from '@/components/app/AppGrid.vue';
  import AppLoading from '@/components/app/AppLoading.vue';
  import AppPagination from '@/components/app/AppPagination.vue';
  import PostFilter from '@/components/posts/PostFilter.vue';
  import PostItem from '@/components/posts/PostItem.vue';
  import PostModal from '@/components/posts/PostModal.vue';
  import PostDetailView from '@/views/posts/PostDetailView.vue';

  const router = useRouter();

  const params: Ref<SearchParams> = ref({
    _sort: 'createdAt',
    _order: 'desc',
    _page: 1,
    _limit: 3,
    title_like: '',
  });

  const {
    response,
    data: posts,
    error,
    loading,
  } = useAxios<Post[], Ref<SearchParams>>('/posts', { params });

  const totalCount = computed(
    () => (response.value?.headers?.['x-total-count'] as number) ?? 0,
  );
  const pageCount = computed(() =>
    Math.ceil(totalCount.value / params.value._limit),
  );

  const goPage = async (id = 1) => {
    // router.push(`/posts/${id}`);
    await router.push({
      name: 'PostDetail',
      params: {
        id,
      },
    });
  };

  const previewId = ref(0);
  const selectPreview = (id = 0) => (previewId.value = id);

  const isExist = computed(() => posts.value && posts.value.length > 0);

  const changeLimit = (value: number) => {
    params.value._limit = value;
    params.value._page = 1;
  };

  // modal
  const show = ref(false);
  const modalTitle = ref('');
  const modalContent = ref('');
  const modalCreatedAt = ref('');
  const openModal = ({ title, content, createdAt }: Post) => {
    show.value = true;
    modalTitle.value = title;
    modalContent.value = content;
    modalCreatedAt.value = createdAt as string;
  };

  watch(posts, (newPosts) => {
    if (newPosts?.length === 0 || !newPosts[0].id) {
      previewId.value = 0;
      return;
    }
    previewId.value = newPosts[0].id;
  });
</script>

<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />

    <PostFilter
      v-model:title="params.title_like"
      :limit="params._limit"
      @update:limit="changeLimit"
    />

    <hr class="my-4" />

    <AppLoading v-if="loading" />

    <AppError v-else-if="error" :message="error.message" />

    <template v-else-if="!isExist">
      <p class="text-center py-4 text-muted">No Results</p>
    </template>

    <template v-else>
      <AppGrid :items="posts" col-class="col-12 col-md-6 col-lg-4">
        <template #postItem="{ item }">
          <post-item
            :title="item.title"
            :content="item.content"
            :created-at="item.createdAt"
            @click="goPage(item.id)"
            @modal="openModal(item)"
            @preview="selectPreview(item.id)"
          ></post-item>
        </template>
      </AppGrid>

      <AppPagination
        :current-page="params._page"
        :page-count="pageCount"
        @page="(page: number) => (params._page = page)"
      />
    </template>

    <teleport to="#modal">
      <PostModal
        v-model="show"
        :title="modalTitle"
        :content="modalContent"
        :created-at="modalCreatedAt"
      />
    </teleport>

    <template v-if="isExist">
      <hr class="my-5" />
      <AppCard>
        <PostDetailView :id="previewId" />
      </AppCard>
    </template>
  </div>
</template>

<style scoped></style>
