import { combineReducers, createStore } from "redux";
import { numberReducer } from "./numberReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    number: numberReducer,
})


export const store = createStore(rootReducer, composeWithDevTools());