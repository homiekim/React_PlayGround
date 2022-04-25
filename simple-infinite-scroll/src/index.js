import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer from "./reducer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Global } from "@emotion/react";
import { GlobalStyle } from "./index.style";
import { QueryClientProvider, QueryClient } from "react-query";

const store = configureStore({ reducer });
const queryClient = new QueryClient();

ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
      <Global styles={GlobalStyle} />
    </QueryClientProvider>
  </Provider>,
  document.getElementById("root")
);
