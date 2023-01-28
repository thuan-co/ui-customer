import { call, delay, fork, put, take, takeLatest } from "redux-saga/effects";
import { phoneDetailsActions } from "./PhoneSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import PhoneViewApi from "../Api/PhoneApi";
import { GET } from "../../constants/http/methodHttp";

function* handleFetchingPhone(action:PayloadAction<number>) {
    
    yield delay(1000);
    // console.log("Phone id: ", action.payload)
    const [result, error]:any[] = yield call(PhoneViewApi, '/phone',action.type, GET,action.payload)
    if (result) {
        // console.log("Data phone view details: ", result)
        yield put(phoneDetailsActions.successPhoneDetails(result))
    }
    
}

function* workerFetchingPhone() {
    yield takeLatest(phoneDetailsActions.fetchPhoneById, handleFetchingPhone)
}

export function* watcherFetchPhone() {
    yield fork(workerFetchingPhone)
}