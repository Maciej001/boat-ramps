import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Dashboard from "./dashoboard/Dashboard";
import store from "./redux/configureStore";

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
