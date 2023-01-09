import { all } from "redux-saga/effects";
import { watcherMakeAuth } from "../features/Auth/AuthSaga";

export default function* rootSaga() {
    yield all([ watcherMakeAuth()])
}