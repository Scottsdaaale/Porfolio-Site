import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import vistedSliceReducer from './visitedSlice';
import blogReducer from './blogSlice';

const rootReducer = combineReducers({
  blog: blogReducer,
  visited: vistedSliceReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['blog'], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;