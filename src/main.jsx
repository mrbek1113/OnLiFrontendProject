import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Router from "./Router/Router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Router />
  </div>
);
