import { Action, ThunkAction, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducers from '../features/redux-saga/Auth/AuthSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import phoneDetailsReducers from '../features/redux-saga/PhoneView/PhoneSlice';
import { enableMapSet } from 'immer';
import cityReducers from '../features/redux-saga/Address/AddressSlice';
import districtReducers from '../features/redux-saga/Address/DistrictSlice';
import communeReducers from '../features/redux-saga/Address/CommuneSlice';
import { persistReducer, persistStore } from 'redux-persist';
import orderPhoneReducers from '../features/redux-saga/Order/orderSlice';
import phoneCardReducers from '../features/redux-saga/PhoneView/PhoneCardSlice';

const sagaMiddleware = createSagaMiddleware();

enableMapSet();

// const authPersistConfig = {
//   key: 'auth',
//   storage: sessionStorage,
// }

// const persistedAuthReducer = persistReducer(authPersistConfig, authReducers)

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    auth: authReducers,
    // persistedAuthReducer,
    phoneDetails: phoneDetailsReducers,
    city: cityReducers,
    district: districtReducers,
    commune: communeReducers,
    orderPhone: orderPhoneReducers,
    oppoPromote: phoneCardReducers,
  },
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: true
    }
  }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga)

// export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
