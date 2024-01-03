import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tooltip/dist/react-tooltip.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import store from './redux/store';
import App from './App';
const helmetContext = {};

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  </Provider>,
  document.getElementById('root')
);
