import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/main';
import './styles/app.css';

export default function App() {
  return (
    <>
      <Main />
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
