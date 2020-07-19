export default (item: TodoItem) => `
<li data-id="${item.id}"${item.done ? ' class="done"' : ''}>
	<div>
		<input type="checkbox" ${item.done ? 'checked' : ''}>
    <label>
      <span>${item.name}<span>
      <span>${item.description}</span>
    </label>
		<button class="destroy">x</button>
	</div>
</li>`;