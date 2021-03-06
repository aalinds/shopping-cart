import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import cartReducer from "./reducers/cartReducer.js";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(cartReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
