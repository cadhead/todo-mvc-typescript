const setClassIfDone = (item: TodoItem, className: string) => {
  return item.done ? className : '';
};

export default (item: TodoItem) => `<section class="section">
<div data-id="${item.id}" class="card ${setClassIfDone(item, 'is-completed')}">
  <header class="card-header">
    <p class="card-header-title">${item.name}<p>
    <button 
      type="button"
      class="button button-status card-header-icon ${setClassIfDone(item, 'is-success')}"
    >
      <span class="icon">
        <i class="far fa-square ${setClassIfDone(item, 'fa-check-square')}"></i>
      </span>
    </button>
  </header>
  <div class="card-content">
    <div class="content">
      <p>${item.description}</p>
    </div>
  </div>
</div></section>`;