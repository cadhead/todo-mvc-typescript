import Template from './Template';

class List {
  template: Template;

  constructor() {
    this.template = new Template(
      document.querySelector('#root') as HTMLElement
    );
  }

  bindHandlers(handlers: Handlers, state: Array<TodoItem>) {
    const { newTodoName: newTodo } = this.template.elements;

    newTodo.addEventListener('change', ({ target }) => {
      const element = target as HTMLTextAreaElement;
      const name = element.value.trim();

      if (name) {
        handlers['Add'](name);
        this.template.update(state);
      }
    });
  }
}

export default List;
