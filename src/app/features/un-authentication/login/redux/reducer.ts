/* eslint-disable @typescript-eslint/no-explicit-any */
import { SLICE_NAME } from '@config/type';
import { MainUnsplashModel } from '@model/login';
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import * as Action from './actionType';
export interface LoginState {
  loading: boolean;
  count: number;
  data: MainUnsplashModel | null;
}
const initialState: LoginState = {
  loading: false,
  count: 0,
  data: null,
};
const loginSlice = createSlice({
  name: SLICE_NAME.LOGIN,
  initialState: initialState,
  reducers: {
    reset: () => {
      return { ...initialState };
    },
    onStart: () => {
      /// TODO
    },
    onSuccess: (state, { payload }: PayloadAction<any>) => {
      /// TODO
      state.data = payload;
      return state;
    },
  },
});
const onLogin = createAction(Action.LOGIN, () => ({
  payload: {},
}));
export const actions = { ...loginSlice.actions, onLogin };
export const loginReducer = loginSlice.reducer;
