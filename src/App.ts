import TodoComponent from './components/TodoComponent';
import TodoList from "./List";

const todoList: TodoList = new TodoList();

async function App() {
  const template = document.createElement('template');
  template.innerHTML = `
    <div class="container">
      ${TodoComponent(todoList.store.state)}
    </div>
  `;
  return template.content.cloneNode(true);
}

export default App;