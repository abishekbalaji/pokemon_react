import {
  createUserDocumentFromAuth,
  signInAuthWithGooglePopup,
} from "../../utils/firebase/firebase";
import createAction from "../../utils/helpers/createAction";
import USER_REDUCER_TYPES from "./userTypes";

export const fetchCurrentUserStart = () =>
  createAction(USER_REDUCER_TYPES.FETCH_CURRENT_USER_START);

export const fetchCurrentUserFailed = (error) =>
  createAction(USER_REDUCER_TYPES.FETCH_CURRENT_USER_FAILED, error);

export const fetchCurrentUserSuccess = (user) =>
  createAction(USER_REDUCER_TYPES.FETCH_CURRENT_USER_SUCCESS, user);

export const onAuthStateChangedCallback = (user) => user;

export const signInAuthUserWithGoogleAsync = () => async (dispatch) => {
  dispatch(fetchCurrentUserStart());
  try {
    const user = await signInAuthWithGooglePopup();
    if (user) {
      console.log("hello");
      await createUserDocumentFromAuth(user.user);
    }
    dispatch(fetchCurrentUserSuccess(user.user));
    // const user = onAuthStateChangedCallback()
  } catch (error) {
    dispatch(fetchCurrentUserFailed(error));
  }
};
