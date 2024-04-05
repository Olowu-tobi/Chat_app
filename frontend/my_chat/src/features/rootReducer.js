import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import loadingReducer from "./slices/loadingSlice";
import conversationReducer from "./slices/conversationSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  loading: loadingReducer,
  messages: conversationReducer,
});

export default rootReducer;
