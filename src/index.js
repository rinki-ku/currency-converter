import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

import { updateRates } from "./store/actions/currencyActions";
import store from "./store";

store.dispatch(updateRates());

setInterval(() => {
  store.dispatch(updateRates());
}, 10 * 1000); // refresh every 10 secs

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.unregister();
