import TodoItems from './TodoItemsComponent';

const TodoComponent = (state: Array<TodoItem>) => {
  const template: string = `<section class="container">
    <header>
      <h1 class="title">Todo List</h1>
      <p class="subtitle">What needs to be done?</p>
      <input autofocus />
    </header>
    <main>
      ${TodoItems(state)}
    </main>
    <footer class="footer">
      <p>Enter to add a new todo</p>
      <p>Double-click to edit a todo</p>
    </footer>
  </section>`

  return template;
};

export default TodoComponent;