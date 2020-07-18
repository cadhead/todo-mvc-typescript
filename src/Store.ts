class Store {
  state: Array<TodoItem> = [];
  
  addItem(item: TodoItem) {
    const { id, name, description } = item;

    let todoItem: TodoItem = {
      id,
      name,
      description,
      done: false
    };

    this.state.push(todoItem);
  }

  removeItem(id: string) {
    let todo = this.state.find(item => item.id === id);

    return todo 
      ? this.state.splice(this.state.indexOf(todo), 1)
      : false;
  }
}

export default Store; 
