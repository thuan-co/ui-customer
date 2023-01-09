import { Action, ThunkAction, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducers from '../features/Auth/AuthSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    auth: authReducers,
  },
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: true
    }
  }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
