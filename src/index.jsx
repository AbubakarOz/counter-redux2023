import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import "./index.css";

const initialState = {
  number: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "start":
      return {
        ...state,
        number: (state.number = 0),
      };
    case "increment":
      return {
        ...state,
        number: state.number < 100 ? state.number + 1 : state.number,
      };
    case "decrement":
      return {
        ...state,
        number: state.number > 0 ? state.number - 1 : state.number,
      };
    case "random":
      return {
        ...state,
        number: (state.number = action.payload),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
