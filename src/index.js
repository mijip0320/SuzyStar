import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "mobx-react";
import "semantic-ui-css/semantic.min.css";
<<<<<<< HEAD
import Store from "./Store/Store";
=======
import ProductStore from "./Store/ProductStore";
import UserStore from "./Store/UserStore";
>>>>>>> ecd7a54298b9f3bafeea749743a06f9cfa5f43d2

ReactDOM.render(
  <Provider ProductStore={ProductStore} UserStore={UserStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
