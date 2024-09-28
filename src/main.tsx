import { createRoot } from "react-dom/client"

import Router from "./router/Router"

import { Provider } from "react-redux"
import { store } from "./store/store"

import { SpeedInsights } from "@vercel/speed-insights/next"

import "./style/index.css"

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Router />
    <SpeedInsights />
  </Provider>,
)
