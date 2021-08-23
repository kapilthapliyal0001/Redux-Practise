import {create} from "istanbul-reports";
import {createStore} from "redux";
import baseReducer from "../reducers";

const initialState = {
  task: [],
};

export default function configureStore() {
  return createStore(
    baseReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
