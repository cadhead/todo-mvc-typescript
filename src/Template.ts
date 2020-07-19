import TodoListTemplate from './templates/TodoListTemplate';
import TodoItemTemplate from './templates/TodoItemTemplate';

class Template {
  elements: Elements;

  private $root: Element;

  constructor(root: Element) {
    root.innerHTML = TodoListTemplate();

    this.$root = root;
    this.elements = {
      newTodo: root.querySelector('#newTodo') as HTMLElement,
      items: []
    };
  }

  update(state: Array<TodoItem>) {
    const todoItems = this.$root.querySelector('#todoList') as HTMLElement;

    state.forEach(item => {
      if (todoItems.querySelector(`li[data-id='${item.id}']`)) return;

      const element = document.createElement('div');
      element.innerHTML = TodoItemTemplate(item);

      todoItems.prepend(element.firstElementChild as HTMLElement);
    });

    this.elements.items.push();
  }
}

export default Template;
