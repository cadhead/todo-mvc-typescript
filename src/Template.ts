import TodoListTemplate from './templates/TodoListTemplate';
import TodoItemTemplate from './templates/TodoItemTemplate';

class Template {
  elements: Elements;

  private $root: Element;

  constructor(root: Element) {
    root.innerHTML = TodoListTemplate();

    this.$root = root;
    this.elements = {
      newTodoName: root.querySelector('#newTodo') as HTMLElement,
      items: []
    };
  }

  update(state: Array<TodoItem>) {
    const todoItems = this.$root.querySelector('#todoList') as HTMLElement;
    const input = <HTMLInputElement>this.elements.newTodoName;
    const { items: itemsElements } = this.elements;

    state.forEach(item => {
      const element = todoItems.querySelector(`li[data-id='${item.id}']`);
      
      !element
        ? itemsElements.push(this.createNewItem(item) as HTMLElement)
        : itemsElements.splice(itemsElements.indexOf(element), 1);
    });

    todoItems.prepend(...itemsElements);

    input.value = '';
  }

  private createNewItem(item: TodoItem) {
    const element = document.createElement('div');
    element.innerHTML = TodoItemTemplate(item);

    return element.firstElementChild;
  }
}

export default Template;
