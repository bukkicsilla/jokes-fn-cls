import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import AppFn from "./AppFn";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppFn />
  </React.StrictMode>
);
registerServiceWorker();
