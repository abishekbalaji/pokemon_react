import { createSelector } from "reselect";

export const userReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
  [userReducer],
  (userSlice) => userSlice.user
);
