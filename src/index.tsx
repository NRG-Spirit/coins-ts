import ReactDOM from 'react-dom/client';

import './index.css';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';

import React from 'react';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
