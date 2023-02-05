import SIGN_IN_OR_UP_TYPES from "./signInOrUpTypes";

const SIGN_IN_OR_UP_INITIAL_STATE = {
  signInOrUp: false,
};

const signInOrUpReducer = (
  state = SIGN_IN_OR_UP_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case SIGN_IN_OR_UP_TYPES.SET_SIGN_IN_OR_UP:
      return {
        ...state,
        signInOrUp: payload,
      };
    default:
      return state;
  }
};

export default signInOrUpReducer;
