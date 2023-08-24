import storage from './storage';

const state = {
  todoItems: storage.fetch(),
};

const getters = {
  getTodoItems: (draftState) => draftState.todoItems,
};

const mutations = {
  addItem(draftState, todoItem) {
    const savedTodoItem = storage.save(todoItem);
    draftState.todoItems.push(savedTodoItem);
  },

  removeTodoItem(draftState, payload) {
    storage.delete(payload.todoItem);
    draftState.todoItems.splice(payload.index, 1);
  },

  toggleTodoItem(draftState, payload) {
    const todoItem = draftState.todoItems[payload.index];
    todoItem.completed = !todoItem.completed;

    storage.update(payload.todoItem);
  },

  clearTodoItems(draftState) {
    storage.clear();
    // eslint-disable-next-line no-param-reassign
    draftState.todoItems = [];
  },
};

export default {
  state,
  getters,
  mutations,
};
