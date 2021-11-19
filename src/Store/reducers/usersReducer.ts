import {createAction, createReducer} from '@reduxjs/toolkit';

import {User} from '../../Services';

const sortUsers =
  createAction<{sortBy: keyof User; orderBy: 'asc' | 'desc'}>('sortUsers');
const filterUsers = createAction<{user: User}>('filterUsers');
const fetchUsers = createAction<{users: User[]}>('fetchUsers');
const deleteUsers = createAction<{users: number[]}>('deleteUsers');
const toggleLayout = createAction<{layout: 'grid' | 'list'}>('toggleLayout');
interface StateSlice {
  users: User[];
  filteredUsers: User[];
  sortedUsers: User[];
  layout: 'grid' | 'list';
}

const initialState = {
  users: [],
  filteredUsers: [],
  sortedUsers: [],
  layout: 'grid' as const,
};

export const usersReducer = createReducer<StateSlice>(initialState, builder => {
  builder
    .addCase(sortUsers, (state, action) => {
      state.users = state.users.sort(function (a, b) {
        const sortKey = action.payload.sortBy;
        const first = a?.[sortKey]?.toString().toLowerCase();
        const second = b?.[sortKey]?.toString().toLowerCase();

        if (action.payload.orderBy === 'asc') {
          return first < second ? -1 : 1;
        } else {
          return first < second ? 1 : -1;
        }
      });
    })

    .addCase(filterUsers, (state, action) => {
      if (
        state.filteredUsers
          .map(user => user.id)
          .includes(action.payload.user.id)
      ) {
        state.filteredUsers = state.filteredUsers.filter(
          user => user.id !== action.payload.user.id,
        );
      } else {
        state.filteredUsers = [
          ...state.filteredUsers,
          ...[action.payload.user],
        ];
      }
    })
    .addCase(fetchUsers, (state, action) => {
      state.users = action.payload.users;
      state.sortedUsers = [];
      state.filteredUsers = [];
    })

    .addCase(deleteUsers, (state, action) => {
      state.users = state.users.filter(
        user => !action.payload.users.includes(user.id),
      );
      state.filteredUsers = [];
    })

    .addCase(toggleLayout, (state, action) => {
      state.layout = action.payload.layout;
    })
    .addDefaultCase((state, action) => {
      state.users = state.users;
      // console.log(action);
    });
});
