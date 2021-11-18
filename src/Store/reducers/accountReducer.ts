import {
  AnyAction,
  PayloadAction,
  createAction,
  createReducer,
} from '@reduxjs/toolkit';

const logIn = createAction<number>('logIn');
const logOut = createAction<number>('logOut');

function isActionWithNumberPayload(
  action: AnyAction,
): action is PayloadAction<number> {
  return typeof action.payload === 'number';
}

export const accountReducer = createReducer(
  {
    counter: 0,
    sumOfNumberPayloads: 0,
    unhandledActions: 0,
  },
  builder => {
    builder
      .addCase(logIn, (state, action) => {
        // action is inferred correctly here
        state.counter += action.payload;
      })
      // You can chain calls, or have separate `builder.addCase()` lines each time
      .addCase(logOut, (state, action) => {
        state.counter -= action.payload;
      })
      // You can apply a "matcher function" to incoming actions
      .addMatcher(isActionWithNumberPayload, (state, action) => {})
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {});
  },
);
