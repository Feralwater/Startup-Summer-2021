import {applyMiddleware, combineReducers, createStore} from "redux";
import reposReducer from "./reposReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  repos: reposReducer,
  users: userReducer,

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))