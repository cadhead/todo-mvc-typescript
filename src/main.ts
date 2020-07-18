import TodoList from "./List";
import App from './App';

const todo: TodoList = new TodoList();
Object.assign(window, {todo: todo});

const app = async () => {
  let root = document.getElementById('root');

  root !== null
    ? root.appendChild(await App())
    : console.error('Cannot fined root element');
};

app();
