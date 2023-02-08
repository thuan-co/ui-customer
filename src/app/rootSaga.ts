import { all } from "redux-saga/effects";
import { watcherMakeAuth } from "../features/redux-saga/Auth/AuthSaga";
import { watcherFetchPhone, watcherPromoteCards } from "../features/redux-saga/PhoneView/PhoneDetailsSaga";
import { watcherFetchCities, watcherFetchCommune, watcherFetchDistricts } from "../features/redux-saga/Address/AddressSaga";
import { watcherMakeOrder } from "../features/redux-saga/Order/orderSaga";

export default function* rootSaga() {
    yield all([ watcherMakeAuth(), watcherFetchPhone(), watcherFetchCities(), watcherFetchDistricts(), watcherFetchCommune(), watcherMakeOrder(),watcherPromoteCards()])
}