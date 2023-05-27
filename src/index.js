import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import usersReducer from "./Redux/features/Users";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <Navbar />
        <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
