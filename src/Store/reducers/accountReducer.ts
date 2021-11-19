import {createAction, createReducer} from '@reduxjs/toolkit';

import {User} from '../../Services';

const logIn = createAction<Partial<StateSlice>>('logIn');
const logOut = createAction<null>('logOut');

interface StateSlice {
  jwtToken?: string | null;
  isAuthenticated: boolean;
  account?: User | null;
}

const initialState = {
  jwtToken: null,
  isAuthenticated: false,
  account: null,
};

export const accountReducer = createReducer<StateSlice>(
  initialState,
  builder => {
    builder
      .addCase(logIn, (state, action) => {
        state.jwtToken = action.payload.jwtToken;
        state.isAuthenticated =
          action.payload.isAuthenticated ?? state.isAuthenticated;
        state.account = action.payload.account ?? state.account;
      })

      .addCase(logOut, state => {
        state.isAuthenticated = false;
        state.jwtToken = null;
      })

      .addDefaultCase(state => {
        state.isAuthenticated = false;
        state.jwtToken = null;
        state.account = null;
      });
  },
);
