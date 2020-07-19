import Store from './Store';
import List from './List';

class TodoList {
  list: List;

  store: Store;

  handles: Handlers;

  constructor() {
    this.list = new List;
    this.store = new Store();
    this.handles = {
      'Add': this.addItem.bind(this),
    };

    this.list.bindHandlers(this.handles, this.store.state);
  }

  addItem(name: string, description: string) {
    this.store.insert({
      id: Date.now().toString(),
      name,
      description: description || 'No description provided'
    });
  }
}

export default TodoList;
