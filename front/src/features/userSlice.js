import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    isFetching: false,
    isError: false,
    message: "",
    likeList: [],
  },

  reducers: {
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.userInfo = action.payload;
    },
    registerError: (state) => {
      state.isError = true;
      state.isFetching = false;
    },
    logInStart: (state) => {
      state.isFetching = true;
    },
    logInSuccess: (state, action) => {
      state.isFetching = false;
      state.userInfo = action.payload;
    },
    logInError: (state) => {
      state.error = true;
      state.isFetching = false;
    },

    logOutStart: (state) => {
      state.isFetching = true;
    },
    logOutSuccess: (state, action) => {
      state.isFetching = false;
      state.userInfo = null;
      state.message = action.payload;
    },
    logOutError: (state) => {
      state.isError = true;
    },
    addToLikeList: (state, action) => {
      state.likeList.push(action.payload);
    },
  },
});

export const {
  registerStart,
  registerSuccess,
  registerError,
  logInStart,
  logInSuccess,
  logInError,
  logOutStart,
  logOutSuccess,
  logOutError,
  addToLikeList,
} = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
