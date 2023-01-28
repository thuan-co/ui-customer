import { Action, ThunkAction, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducers from '../features/Auth/AuthSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import phoneDetailsReducers from '../features/PhoneView/PhoneSlice';
import { enableMapSet } from 'immer';

const sagaMiddleware = createSagaMiddleware();

enableMapSet();

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    auth: authReducers,
    phoneDetails: phoneDetailsReducers
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
