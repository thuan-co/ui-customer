import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, put, takeLatest } from "redux-saga/effects";
import { GET, POST } from "../../../constants/http/methodHttp";
import { OrderDto } from "../../../model/other";
import OrderApi from "../../Api/OrderApi";
import { historyActions } from "./historySlice";
import { orderPhoneActions } from "./orderSlice";

function* handleMakingOrder(action:PayloadAction<OrderDto>) {

    const [result, error]:any[] = yield call(OrderApi, '/order', action.type, POST, action.payload)
    if (result) {
        yield put(orderPhoneActions.makeOrderSuccessful(result.id))
    }
    // TODO: catching errors 
}

function* workerMakingOrder() {
    
    yield takeLatest(orderPhoneActions.makeOrder, handleMakingOrder)
}

/**
 * Saga for ordering a item
 */
export function* watcherMakeOrder() {
    yield fork(workerMakingOrder);
}

function* handleFetchingOrderHistory(action:PayloadAction<string>) {
    
    const [result, error]:any[] = yield call(OrderApi, '/lichsu',historyActions.fetchHistory.type, GET, action.payload)
    // console.log("Lich su dat hang", result)
    if (result) {
        yield put(historyActions.fetchSuccess(result))
    }
}

function* workerFetchingOrderHistory() {
    yield takeLatest(historyActions.fetchHistory, handleFetchingOrderHistory)
}

/**
 * Saga for get The ordered history
 * @author thng1642
 * @version 1.00
 */
export function* watcherFetchingOrderedHistory() {
    yield fork(workerFetchingOrderHistory)
}