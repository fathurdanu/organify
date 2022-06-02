import { combineReducers } from "redux";
import userReducer from "./userReducer";
import cmsReducer from "./cmsReducer";

export default combineReducers({ userReducer, cmsReducer });