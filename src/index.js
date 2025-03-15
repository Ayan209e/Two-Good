import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import "./global.css";
import AppRoutes from "./Routes";
import Cursor from "./components/Cursor/Cursor";
import { Navbar } from "./components";
import { Footer } from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Cursor />
      <Navbar />
      <AppRoutes />
      <Footer />
    </PersistGate>
  </Provider>
);
