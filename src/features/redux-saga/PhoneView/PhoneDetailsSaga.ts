import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, put, takeLatest } from "redux-saga/effects";
import { GET } from "../../../constants/http/methodHttp";
import PhoneViewApi from "../../Api/PhoneApi";
import { phoneCardActions } from "./PhoneCardSlice";
import { phoneDetailsActions } from "./PhoneSlice";

/**
 * get all specifications and some relative information
 * @param action contains id of phone
 */
function* handleFetchingPhone(action:PayloadAction<number>) {
    
    const [result, error]:any[] = yield call(PhoneViewApi, '/phone',action.type, GET,action.payload)
    if (result) {
        yield put(phoneDetailsActions.successPhoneDetails(result))
    }
    // TODO: handle error when occurs
}

function* workerFetchingPhone() {
    yield takeLatest(phoneDetailsActions.fetchPhoneById, handleFetchingPhone)
}

// Saga show up details a phone
export function* watcherFetchPhone() {
    yield fork(workerFetchingPhone)
}

/**
 * Getting all promotes phone of brand (param)
 * @param action contains name brand
 */
function* handlePromoteCards(action:PayloadAction<string>) {
    const [result, error]:any[] = yield call(PhoneViewApi, '/phonecard', action.type, GET, action.payload)
    if (result) {
        yield put(phoneCardActions.fetchSuccess(result))
    }
    // TODO: handle error when occurs
}

function* workerPromoteCards() {
    yield takeLatest(phoneCardActions.fetchPromoteBrand,handlePromoteCards)
}

// Saga promote for brand Oppo
export function* watcherPromoteCards() {
    yield fork(workerPromoteCards)
}