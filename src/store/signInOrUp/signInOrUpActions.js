import createAction from "../../utils/helpers/createAction";
import SIGN_IN_OR_UP_TYPES from "./signInOrUpTypes";

const setSignInOrUp = (payload) =>
  createAction(SIGN_IN_OR_UP_TYPES.SET_SIGN_IN_OR_UP, payload);

export default setSignInOrUp;
