<script setup lang="ts">
  import { computed } from 'vue';

  interface Props {
    currentPage?: number;
    pageCount?: number;
  }

  const props = withDefaults(defineProps<Props>(), {
    currentPage: 1,
    pageCount: 0,
  });

  defineEmits<{ page: [page: number] }>();

  const isPrevPage = computed(() => ({ disabled: !(props.currentPage > 1) }));
  const isNextPage = computed(() => ({
    disabled: !(props.currentPage < props.pageCount),
  }));
</script>

<template>
  <nav class="mt-5" aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="isPrevPage">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="$emit('page', currentPage - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="page in pageCount"
        :key="page"
        class="page-item"
        :class="{ active: currentPage === page }"
      >
        <a class="page-link" href="#" @click.prevent="$emit('page', page)">
          {{ page }}
        </a>
      </li>
      <li class="page-item" :class="isNextPage">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="$emit('page', currentPage + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
