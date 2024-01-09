import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AppRouter />
      </Router>
    </Provider>
  </React.StrictMode>
);

