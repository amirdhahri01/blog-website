import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./App/Store";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={Store}>
    <GoogleOAuthProvider clientId="220997474315-j1rbq2ijrsrad2qivt7o3qv3ld72mnes.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Provider>
);
