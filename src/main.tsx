// eslint-disable-next-line filename-rules/match,@typescript-eslint/naming-convention
import React from "react";
// eslint-disable-next-line @typescript-eslint/naming-convention
import ReactDOM from "react-dom/client";
import { GiphyExpertApp } from "./GiphyExpertApp.tsx";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GiphyExpertApp />
  </React.StrictMode>,
);
