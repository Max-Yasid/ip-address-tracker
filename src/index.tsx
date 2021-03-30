import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import store from './reducers/index';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


