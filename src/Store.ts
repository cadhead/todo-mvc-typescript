class Store {
  state: Array<TodoItem> = [];
  
  insert(item: TodoItem) {
    this.state.push(item);
  }

  remove(id: string) {
    const item = this.state.find(item => item.id === id);

    return item 
      ? this.state.splice(this.state.indexOf(item), 1)
      : false;
  }

  update(id: string) {
    // ...
  }
}

export default Store; 
