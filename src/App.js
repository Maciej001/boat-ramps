import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Dashboard from "./dashoboard/Dashboard";
import store from "./redux/configureStore";
import Theme from "./dashoboard/components/Theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Dashboard />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
