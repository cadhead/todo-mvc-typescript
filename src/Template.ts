import TodoListTemplate from './templates/TodoListTemplate';
import TodoItemTemplate from './templates/TodoItemTemplate';

class Template {
  elements: Elements;
  count: Number = 0;

  private $root: Element;

  constructor(root: Element) {
    this.$root = root;
    this.$root.innerHTML = TodoListTemplate();
    this.elements = {
      newTodoName: this.$root.querySelector('#newTodoName') as HTMLElement,
      todoListEmpty: this.$root.querySelector('#todoListEmpty') as HTMLElement,
      items: []
    };
  }

  update(state: Array<TodoItem>) {
    const todoItems = this.$root.querySelector('#todoList') as HTMLElement;
    const input = <HTMLInputElement>this.elements.newTodoName;
    const { items: itemsElements, todoListEmpty } = this.elements;

    this.count = state.length;  
    this.count
      ? todoListEmpty.classList.add('is-hidden')
      : todoListEmpty.classList.remove('is-hidden');

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
