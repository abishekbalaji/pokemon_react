import { combineReducers } from "redux";
import signInOrUpReducer from "./signInOrUp/signInOrUpReducer";

const rootReducer = combineReducers({
  signInOrUp: signInOrUpReducer,
});

export default rootReducer;
