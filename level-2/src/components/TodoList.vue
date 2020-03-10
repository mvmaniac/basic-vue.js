<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" :key="todoItem.item">
        <i
          class="fas fa-check checkBtn hand"
          :class="{checkBtnCompleted: todoItem.completed}"
          @click="toggleComplete(todoItem, index)"
        ></i>

        <span :class="{textCompleted: todoItem.completed}">
          {{ todoItem.item }}
        </span>

        <span
          class="removeBtn hand"
          title="할 일 삭제"
          @click="removeTodo(todoItem, index)"
        >
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        todoItems: []
      };
    },
    created() {
      const {length} = localStorage;

      if (!length) {
        return;
      }

      for (let i = 0; i < length; i += 1) {
        const key = localStorage.key(i);

        if (key !== 'loglevel:webpack-dev-server') {
          const item = localStorage.getItem(key);
          this.todoItems.push(JSON.parse(item));
        }
      }
    },
    methods: {
      removeTodo(todoItem, index) {
        localStorage.removeItem(todoItem);
        this.todoItems.splice(index, 1);
      },
      toggleComplete(todoItem, index) {
        const item = todoItem;
        item.completed = !item.completed;
        this.updated(item);
      },
      updated(todoItem) {
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      }
    }
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
</style>
