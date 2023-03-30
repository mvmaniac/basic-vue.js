<template>
  <div class="inputBox shadow">
    <input v-model="newTodoItem" type="text" @keyup.enter="addTodo" />
    <span class="addContainer hand" title="할 일 추가" @click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <template #header>경고!</template>
      <template #body><b>제대로 입력 하세욧!</b></template>
    </Modal>
  </div>
</template>

<script>
  import Modal from './common/ModalVue.vue';

  export default {
    components: { Modal },
    data: () => ({
      newTodoItem: '',
      showModal: false
    }),
    methods: {
      addTodo() {
        if (!this.newTodoItem.trim().length) {
          this.showModal = !this.showModal;
          return;
        }

        this.$store.commit('addItem', this.newTodoItem);
        this.clearInput();
      },
      clearInput() {
        this.newTodoItem = '';
      }
    }
  };
</script>

<style scoped>
  input:focus {
    outline: none;
  }

  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
    width: calc(100% - 52px);
  }

  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478f8, #8763f8);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .addBtn {
    color: white;
    vertical-align: middle;
  }
</style>
