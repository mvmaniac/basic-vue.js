<template>
  <div class="clearAllContainer">
    <span
      class="clearAllBtn hand"
      title="전체 할 일 지우기"
      @click="clearTodoItems"
    >
      ClearAll
    </span>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    methods: {
      // clearTodo() {
      //   this.$store.commit('clearTodoItems');
      // }
      ...mapMutations(['clearTodoItems'])
    }
  };
</script>

<style scoped>
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }

  .clearAllBtn {
    color: #e20303;
    display: block;
  }
</style>
