import { call, delay, fork, put, take, takeLatest } from "redux-saga/effects";
import AddressApi from "../../Api/AddressApi";
import { PayloadAction } from "@reduxjs/toolkit";
import { City, Commune, District } from "../../../model/other";
import { GET } from "../../../constants/http/methodHttp";
import { cityActions } from "./AddressSlice";
import { districtActions } from "./DistrictSlice";
import { communeActions } from "./CommuneSlice";

// call api and handle response its. Response is list of cities.
function* handleFetchingCities() {

    const [result, error]:any[] = yield call(AddressApi, '/cities', cityActions.fetchingCites.type, GET, null)
    if (result) {
        yield put(cityActions.successFetching(result))
    }
    // Catching errors
}

function* workerFetchingCities() {
    yield take(cityActions.fetchingCites)
    yield call(handleFetchingCities)
}

// saga getting all cities
export function* watcherFetchCities() {
    yield fork(workerFetchingCities);
}

/**
 * call api and get response its
 * @param action contains City object to call API 
 */
function* handleFetchingDistricts(action: PayloadAction<City | null>) {
    
    const [result, error]:any[] = yield call(AddressApi, '/districts?city='+action.payload?.id, action.type, GET, null);
    if (result) {
        yield put(districtActions.successfulDistricts(result))
    }
}

function* workerFetchingDistricts() {
    
    yield takeLatest(districtActions.fetchingDistricts, handleFetchingDistricts) 
}

// Saga getting all districts of city
export function* watcherFetchDistricts() {
    yield fork(workerFetchingDistricts)
}

/**
 * 
 * @param action contains District object to call API, which gets communes
 */
function* handleFetchingCommunes(action: PayloadAction<District>) {

    const [result, error]:any[] = yield call(AddressApi, '/communes?district='+action.payload.id, action.type, GET, null)

    if (result) {
        yield put(communeActions.successCommunes(result))
    }
}

function* workerFetchingCommunes() {
    yield takeLatest(communeActions.fetchCommunes, handleFetchingCommunes)
}

// saga getting all communes of city
export function* watcherFetchCommune() {
    yield fork(workerFetchingCommunes)
}