import { all } from "redux-saga/effects";
import { watcherMakeAuth } from "../features/Auth/AuthSaga";
import { watcherFetchPhone } from "../features/PhoneView/PhoneDetailsSaga";

export default function* rootSaga() {
    yield all([ watcherMakeAuth(), watcherFetchPhone()])
}