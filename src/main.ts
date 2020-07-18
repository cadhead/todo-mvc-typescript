import App from './App';

const app = async () => {
  let root = document.getElementById('root');

  root !== null
    ? root.appendChild(await App())
    : console.error('Cannot fined root element');
};

app();
