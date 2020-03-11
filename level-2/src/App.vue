<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput @addTodoItem="addItem"></TodoInput>
    <TodoList
      :propsdata="todoItems"
      @removeTodoItem="removeItem"
      @toggleTodoItem="toggleItem"
    ></TodoList>
    <TodoFooter @clearAllItems="clearItems"></TodoFooter>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue';
  import TodoInput from './components/TodoInput.vue';
  import TodoList from './components/TodoList.vue';
  import TodoFooter from './components/TodoFooter.vue';

  export default {
    components: {
      TodoHeader,
      TodoInput,
      TodoList,
      TodoFooter
    },
    data: () => ({
      todoItems: []
    }),
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
      addItem(newTodoItem) {
        const obj = {completed: false, item: newTodoItem};
        localStorage.setItem(newTodoItem, JSON.stringify(obj));
        this.todoItems.push(obj);
      },
      removeItem(index) {
        const todoItem = this.getItem(index);
        localStorage.removeItem(todoItem.item);
        this.todoItems.splice(index, 1);
      },
      toggleItem(index) {
        const todoItem = this.getItem(index);
        todoItem.completed = !todoItem.completed;

        this.updated(todoItem);
      },
      clearItems() {
        localStorage.clear();
        this.todoItems = [];
      },
      getItem(index) {
        return this.todoItems[index];
      },
      updated(todoItem) {
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      }
    }
  };
</script>

<style>
  body {
    text-align: center;
    background-color: #f6f6f6;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }

  .hand {
    cursor: pointer;
  }
</style>
