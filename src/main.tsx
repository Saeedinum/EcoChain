import { createRoot } from "react-dom/client";
import Router from "./router/Router";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "./style/index.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Router />
  </Provider>,
);
