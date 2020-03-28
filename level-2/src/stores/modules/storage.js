export default {
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
