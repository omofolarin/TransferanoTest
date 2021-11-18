import {
  AnyAction,
  PayloadAction,
  createAction,
  createReducer,
} from '@reduxjs/toolkit';

import {User} from '../../Services';

const sortUsers =
  createAction<{sortBy: keyof User; orderBy: 'asc' | 'desc'}>('sortUsers');
const filterUsers = createAction<User[]>('filterUsers');
const fetchUsers = createAction<User[]>('fetchUsers');
const deleteUsers = createAction<string[]>('deleteUsers');
const resetUserList = createAction<User[]>('resetUserList');

function isActionWithNumberPayload(
  action: AnyAction,
): action is PayloadAction<number> {
  return typeof action.payload === 'number';
}

export const usersReducer = createReducer<{
  users: User[];
}>(
  {
    users: [],
  },
  builder => {
    builder
      .addCase(sortUsers, (state, action) => {
        // action is inferred correctly here
        state.users = state.users.sort(function (a, b) {
          const sortKey = action.payload.sortBy;
          const first = a?.[sortKey]?.toLowerCase();
          const second = b?.[sortKey]?.toLowerCase();

          if (action.payload.orderBy === 'asc') {
            return first < second ? -1 : 1;
          } else {
            return first < second ? 1 : -1;
          }
        });
      })

      .addCase(filterUsers, (state, action) => {
        state.counter -= action.payload;
      })
      .addCase(fetchUsers, (state, action) => {})

      .addCase(deleteUsers, (state, action) => {})
      .addCase(resetUserList, (state, action) => {})
      .addMatcher(isActionWithNumberPayload, (state, action) => {})

      .addDefaultCase((state, action) => {});
  },
);
