const TodoItmesComponent = (state: Array<TodoItem>) => {
  return `
    <ul class="todo-list">
      ${state.length ? state.forEach(item => {
        return `<li>[${item.id}] ${item.name}</li>`
      }) : "Let's add a first todo."}
    </ul>`
}

export default TodoItmesComponent;