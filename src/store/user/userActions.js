import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthWithGooglePopup,
  signInAuthWithUserAndPassword,
  signOutUser,
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
      await createUserDocumentFromAuth(user.user);
    }
    dispatch(fetchCurrentUserSuccess(user.user));
  } catch (error) {
    dispatch(fetchCurrentUserFailed(error));
  }
};

export const signUpUserWithEmailAndPasswordAsync =
  (email, password, displayName) => async (dispatch) => {
    dispatch(fetchCurrentUserStart());
    try {
      const user = await createAuthUserWithEmailAndPassword(email, password);
      console.log(user.user);
      if (user) {
        await createUserDocumentFromAuth(user.user, { displayName });
      }
      dispatch(fetchCurrentUserSuccess(user.user));
    } catch (error) {
      dispatch(fetchCurrentUserFailed(error));
    }
  };

export const signInUserWithEmailAndPasswordAsync =
  (email, password) => async (dispatch) => {
    dispatch(fetchCurrentUserStart());
    try {
      const user = await signInAuthWithUserAndPassword(email, password);
      console.log(user.user);
      dispatch(fetchCurrentUserSuccess(user.user));
    } catch (error) {
      dispatch(fetchCurrentUserFailed(error));
    }
  };

export const signOutUserAsync = () => async (dispatch) => {
  dispatch(fetchCurrentUserStart());
  try {
    await signOutUser();
    dispatch(fetchCurrentUserSuccess(null));
  } catch (error) {
    dispatch(fetchCurrentUserFailed(error));
  }
};
