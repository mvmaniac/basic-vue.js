<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in todoItems" :key="todoItem.item">
        <i
          class="fas fa-check checkBtn hand"
          :class="{ checkBtnCompleted: todoItem.completed }"
          @click="toggleComplete({ todoItem, index })"
        ></i>

        <span :class="{ textCompleted: todoItem.completed }">
          {{ todoItem.item }}
        </span>

        <span
          class="removeBtn hand"
          title="할 일 삭제"
          @click="removeTodoItem({ todoItem, index })"
        >
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';

  export default {
    computed: {
      // todoItems() {
      //   return this.$store.getters.getTodoItems;
      // }
      ...mapGetters({ todoItems: 'getTodoItems' }),
    },
    methods: {
      // 인자는 호출하는 쪽에서 넘김 파라미터가 그대로 넘어감...
      ...mapMutations(['removeTodoItem']),
      ...mapMutations({ toggleComplete: 'toggleTodoItem' }),
    },
  };
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0;
    margin-top: 0;
    text-align: left;
  }

  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }

  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }

  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin: 0 10px 0 5px;
  }

  .checkBtnCompleted {
    color: #b3adad;
  }

  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }

  /* 리스트 아이템 트랜지션 효과 */
  .list-enter-active,
  .list-leave-active {
    transition: all 1s;
  }

  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
