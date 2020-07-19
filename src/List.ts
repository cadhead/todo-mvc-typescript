import Template from './Template';

class List {
  template: Template;

  constructor() {
    this.template = new Template(
      document.querySelector('#root') as HTMLElement
    );
  }

  bindHandlers(handlers: Handlers, state: Array<TodoItem>) {
    const { newTodoName } = this.template.elements;

    newTodoName.addEventListener('keypress', (ev) => {
      const { target, keyCode } = ev as KeyboardEvent;
      
      if (keyCode !== 13) return;

      const element = target as HTMLInputElement;
      const name = element.value.trim();

      if (name) {
        handlers['Add'](name);
        this.template.update(state);
      }
    });
  }
}

export default List;
