import {applyMiddleware, combineReducers, createStore} from "redux";
import {todosReducer} from "./todosReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    todos: todosReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))