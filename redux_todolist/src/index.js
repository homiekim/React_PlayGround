import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import todoReducer from './modules/todos';
import { Provider } from 'react-redux';
import { Global } from "@emotion/react";
import { GlobalStyles } from "./index.style";


const store = createStore(todoReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
    <Global styles={GlobalStyles} />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
