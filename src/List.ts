import Store from "./Store";

class TodoList {
  store: Store;
  handles: Object;

  constructor() {
    this.store = new Store();
    this.handles = {
      "Add": this.addItem.bind(this),
    }
  }

  addItem(name: string, description: string) {
    this.store.insert({
      id: Date.now().toString(),
      name,
      description
    });
  }
}

export default TodoList;
