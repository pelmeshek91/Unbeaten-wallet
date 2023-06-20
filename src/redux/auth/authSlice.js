import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  loginUserThunk,
  logoutThunk,
  refreshUserThunk,
  registerUserThunk,
} from './authOperations';

const handleUserRegister = state => {
  state.isLoading = false;
  state.error = '';
};
const handleUserLogin = (state, { payload }) => {
  state.email = payload.userData.email;
  state.accessToken = payload.accessToken;
  state.refreshToken = payload.refreshToken;
  state.sid = payload.sid;
  state.error = '';
  state.isLoading = false;
  state.isLogin = true;
};
const handleRefresh = (state, { payload }) => {
  state.accessToken = payload.newAccessToken;
  state.refreshToken = payload.newRefreshToken;
  state.sid = payload.newSid;
  state.error = '';
  state.isLoading = false;
};

const handleLogoutFulfilled = state => {
  state.email = '';
  state.accessToken = null;
  state.refreshToken = null;
  state.sid = null;
  state.error = '';
  state.isLoading = false;
  state.isLogin = false;
};
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { error }) => {
  state.error = error.message;
  state.isLoading = false;
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registerUserThunk.fulfilled, handleUserRegister)
      .addCase(loginUserThunk.fulfilled, handleUserLogin)
      .addCase(logoutThunk.fulfilled, handleLogoutFulfilled)
      .addCase(refreshUserThunk.fulfilled, handleRefresh)
      .addMatcher(
        isAnyOf(
          loginUserThunk.pending,
          registerUserThunk.pending,
          logoutThunk.pending,
          refreshUserThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          loginUserThunk.rejected,
          logoutThunk.rejected,
          registerUserThunk.rejected,
          refreshUserThunk.rejected
        ),
        handleRejected
      ),
});

export const userReducer = userSlice.reducer;