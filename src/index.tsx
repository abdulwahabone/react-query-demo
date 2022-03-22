import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/main';
import './styles/app.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import List from './pages/list';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/list">
            <List />
          </Route>
        </Switch>
        <ReactQueryDevtools />
      </Router>
    </QueryClientProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
