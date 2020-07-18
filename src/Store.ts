class Store {
  state: Array<TodoItem> = [];
  
  insert(item: TodoItem) {
    const { id, name, description } = item;

    let todoItem: TodoItem = {
      id,
      name,
      description,
      done: false
    };

    this.state.push(todoItem);
  }

  remove(id: string) {
    let item = this.state.find(item => item.id === id);

    return item 
      ? this.state.splice(this.state.indexOf(item), 1)
      : false;
  }

  update(id: string) {
    // ...
  }
}

export default Store; 
