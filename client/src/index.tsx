import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Ensure the root element exists and type it correctly
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found. Make sure it exists in your HTML.");
}

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
