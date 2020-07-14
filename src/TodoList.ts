class TodoList {
  items: Array<TodoItem> = [];

  addItem(item: TodoItem) {
    const {id, name, description} = item;

    let todoItem: TodoItem = {
      id,
      name,
      description,
      done: false
    };

    this.items.push(todoItem);
  }
}

export default TodoList;
