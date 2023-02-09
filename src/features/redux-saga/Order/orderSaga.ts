import { call, fork, put, takeLatest } from "redux-saga/effects";
import { orderPhoneActions } from "./orderSlice";
import OrderApi from "../../Api/OrderApi";
import { PayloadAction } from "@reduxjs/toolkit";
import { OrderDto } from "../../../model/other";
import { POST } from "../../../constants/http/methodHttp";

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