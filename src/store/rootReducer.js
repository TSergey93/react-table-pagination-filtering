import {
    combineReducers,
    configureStore,
    getDefaultMiddleware
} from "@reduxjs/toolkit";

import logger from "redux-logger";

import {userReducer} from "./User/reducer";

const reducer = combineReducers({
    users: userReducer
});

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
    reducer,
    middleware
});
