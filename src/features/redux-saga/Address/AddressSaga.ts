import { call, delay, fork, put, take, takeLatest } from "redux-saga/effects";
import AddressApi from "../../Api/AddressApi";
import { PayloadAction } from "@reduxjs/toolkit";
import { City, Commune, District } from "../../../model/other";
import { GET } from "../../../constants/http/methodHttp";
import { cityActions } from "./AddressSlice";
import { districtActions } from "./DistrictSlice";
import { communeActions } from "./CommuneSlice";

function* handleFetchingCities() {

    const [result, error]:any[] = yield call(AddressApi, '/cities', cityActions.fetchingCites.type, GET, null)
    if (result) {
        yield put(cityActions.successFetching(result))
    }
    // console.log("Cities: ", result)
}

function* workerFetchingCities() {
    yield take(cityActions.fetchingCites)
    yield call(handleFetchingCities)
    
}

export function* watcherFetchCities() {
    yield fork(workerFetchingCities);
}

function* handleFetchingDistricts(action: PayloadAction<City | null>) {
    
    const [result, error]:any[] = yield call(AddressApi, '/districts?city='+action.payload?.id, action.type, GET, null);
    if (result) {
        yield put(districtActions.successfulDistricts(result))
    }
}

function* workerFetchingDistricts() {
    
    yield takeLatest(districtActions.fetchingDistricts, handleFetchingDistricts) 
}

export function* watcherFetchDistricts() {
    yield fork(workerFetchingDistricts)
}

function* handleFetchingCommunes(action: PayloadAction<District>) {

    const [result, error]:any[] = yield call(AddressApi, '/communes?district='+action.payload.id, action.type, GET, null)

    if (result) {
        yield put(communeActions.successCommunes(result))
    }
}

function* workerFetchingCommunes() {
    yield takeLatest(communeActions.fetchCommunes, handleFetchingCommunes)
}

export function* watcherFetchCommune() {
    yield fork(workerFetchingCommunes)
}