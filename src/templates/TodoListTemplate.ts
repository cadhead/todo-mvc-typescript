export default () => `
<section class="section container">
  <header>
    <div class="hero is-primary">
      <div class="hero-body">
        <h1 class="title">Todo List</h1>
        <p class="subtitle">What needs to be done?</p>
      </div>
    </div>
    <hr class="my-2">
    <input class="input is-small" placeholder="What you gonna do?" type="text" id="newTodoName"/>
    <hr class="my-2">
    <textarea
      class="textarea"
      placeholder="Description"
      type="text"
      id="newTodoDescription"rows="2"
    ></textarea>
    <hr class="my-4">
  </header>
  <main id="todoList">
    <p
      class="notification is-primary is-light"
      id="todoListEmpty">
        Looks like todo-list is empty. Let's create a first todo!
    </p>
    <hr class="my-4">
  </main>
  <footer>
    <p>Enter to add a new todo</p>
    <p>Double-click to edit a todo</p>
  </footer>
</section>`;