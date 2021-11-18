import {
  AnyAction,
  PayloadAction,
  createAction,
  createReducer,
} from '@reduxjs/toolkit';

const sortUsers = createAction<number>('sortUsers');
const filterUsers = createAction<number>('filterUsers');
const fetchUsers = createAction<number>('fetchUsers');

function isActionWithNumberPayload(
  action: AnyAction,
): action is PayloadAction<number> {
  return typeof action.payload === 'number';
}

export const usersReducer = createReducer(
  {
    counter: 0,
    sumOfNumberPayloads: 0,
    unhandledActions: 0,
  },
  builder => {
    builder
      .addCase(sortUsers, (state, action) => {
        // action is inferred correctly here
        state.counter += action.payload;
      })
      // You can chain calls, or have separate `builder.addCase()` lines each time
      .addCase(filterUsers, (state, action) => {
        state.counter -= action.payload;
      })
      .addCase(fetchUsers, (state, action) => {})
      // You can apply a "matcher function" to incoming actions
      .addMatcher(isActionWithNumberPayload, (state, action) => {})
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {});
  },
);
