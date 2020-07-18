import Store from "./Store";

class TodoList {
  store = new Store();

  addItem(name: string, description: string) {
    this.store.insert({
      id: Date.now().toString(),
      name,
      description
    });
  }
}

export default TodoList;
