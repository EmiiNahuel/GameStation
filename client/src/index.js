import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Br } from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux'
import {store} from './Store'


ReactDOM.render(
  <Provider store={store}>
    <Br>
      <App />
    </Br>
  </Provider>,
  document.getElementById('root')
);
