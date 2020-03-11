import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
  fetch() {
    const initTodoItems = [];
    const {length} = localStorage;

    if (!length) {
      return initTodoItems;
    }

    for (let i = 0; i < length; i += 1) {
      const key = localStorage.key(i);

      if (key !== 'loglevel:webpack-dev-server') {
        const item = localStorage.getItem(key);
        initTodoItems.push(JSON.parse(item));
      }
    }

    return initTodoItems;
  },
  save(item) {
    const todoItem = this.wrapped(item);
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    return todoItem;
  },
  update(todoItem) {
    this.delete(todoItem.item);
    this.save(todoItem);
  },
  delete(todoItem) {
    localStorage.removeItem(todoItem.item);
  },
  clear() {
    localStorage.clear();
  },
  wrapped(item) {
    return Object.prototype.hasOwnProperty.call(item, 'completed')
      ? item
      : {completed: false, item};
  }
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  mutations: {
    addItem(state, todoItem) {
      const savedTodoItem = storage.save(todoItem);
      state.todoItems.push(savedTodoItem);
    },
    removeTodoItem(state, payload) {
      storage.delete(payload.todoItem);
      state.todoItems.splice(payload.index, 1);
    },
    toggleTodoItem(state, payload) {
      const todoItem = state.todoItems[payload.index];
      todoItem.completed = !todoItem.completed;

      storage.update(payload.todoItem);
    },
    clearTodoItems(state) {
      storage.clear();
      // eslint-disable-next-line no-param-reassign
      state.todoItems = [];
    }
  }
});

export default {};
