import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import loadingReducer from "./slices/loadingSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  loading: loadingReducer,
});

export default rootReducer;
