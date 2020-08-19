import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "mobx-react";
import "semantic-ui-css/semantic.min.css";
import ProductStore from "./Product/Store/ProductStore";
import UserStore from "./User/Store/UserStore";
<<<<<<< HEAD
=======
import MainStore from "./MainPage/MainStore";
>>>>>>> 88726eb65d9c8f8521fd510733e6f10667324d71

ReactDOM.render(
  <Provider
    MainStore={MainStore}
    ProductStore={ProductStore}
    UserStore={UserStore}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
