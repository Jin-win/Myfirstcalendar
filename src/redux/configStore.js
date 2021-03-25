import { createStore, combineReducers } from "redux";
import myschedule from "./modules/myschedule";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const rootReducer = combineReducers({ myschedule });

const store = createStore(rootReducer);

export default store;
