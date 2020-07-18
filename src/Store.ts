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
    let item = this.state.find(item => item.id === id);

    return item 
      ? this.state.splice(this.state.indexOf(item), 1)
      : false;
  }
}

export default Store; 
