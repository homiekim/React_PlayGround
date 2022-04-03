import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';import {Global} from '@emotion/react';
import {GlobalStyle} from './index.style'

const store = configureStore({reducer});

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Global styles={GlobalStyle} />
  </Provider>,
  document.getElementById('root')
);

