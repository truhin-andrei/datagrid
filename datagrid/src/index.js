import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import App from "./App";
import store from './store/store'
//import * as serviceWorker from './serviceWorker';
import getFakeData from './services/getFakeData'
console.log(getFakeData());

//const store = createStore(()=>console.log(1));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//serviceWorker.unregister();
