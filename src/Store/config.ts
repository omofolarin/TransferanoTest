import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import {accountReducer, usersReducer} from './reducers';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {persistConfig} from './persist';
import {userApi} from '../Services';

const reducers = combineReducers({
  root: combineReducers({
    account: accountReducer,
    users: usersReducer,
  }),
  [userApi.reducerPath]: userApi.reducer,
});

export const persistedReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducers,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(userApi.middleware)
      .concat(__DEV__ && require('redux-flipper').default()),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
