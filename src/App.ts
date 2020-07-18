import TodoComponent from './components/TodoComponent';

async function App() {
  const template = document.createElement('template');
  template.innerHTML = `
    <div class="container">
      ${TodoComponent()}
    </div>
  `;
  return template.content.cloneNode(true);
}

export default App;