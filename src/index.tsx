import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./store";

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
