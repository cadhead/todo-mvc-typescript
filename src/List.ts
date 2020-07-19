import Template from './Template';

class List {
  template: Template;

  constructor() {
    this.template = new Template(
      document.querySelector('#root') as HTMLElement
    );
  }

  bindHandlers(handlers: Handlers) {
    const { newTodo } = this.template.elements;

    newTodo.addEventListener('change', ({ target }) => {
      const element = target as HTMLTextAreaElement;
      const name = element.value;

      return name
        ? handlers['Add'](name, 'something')
        : false;
    });
  }
}

export default List;
