import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";
import App from "./App";

// Ecmascript vs Javascript vs Node
// Ecmascript:  Syntax standard : ES5 ES6 ES7..
// Javascript: Ecmascript + WebAPI(DOM, fetch ...)
// Node: Ecmascript + NodeAPI(require, fs, crypto, http)

// middleware allows us to write in different patterns
const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
