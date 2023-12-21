import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import genreResultsDataReducer from './genreResultsDataSlice';
import artistsResultsDataReducer from './artistsResultsDataSlice';
import youtubeDataReducer from './youtubeDataSlice';
import visitedSliceReducer from './visitedSlice';

// Define reducers that need to be persisted
const persistedReducers = {
  genreResultsData: genreResultsDataReducer,
  artistsResultsData: artistsResultsDataReducer,
  youtubeData: youtubeDataReducer,
};

// Create a combined reducer including non-persisted and persisted reducers
const rootReducer = combineReducers({
  ...persistedReducers,
  visitedData: visitedSliceReducer, // Exclude this reducer from persistence
});

// Create a persist config for persisted reducers only
const persistConfig = {
  key: 'root',
  storage,
  whitelist: Object.keys(persistedReducers), // Whitelist only persisted reducers
};

// Create a persisted reducer for only the persisted reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
