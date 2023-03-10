import {call, delay, fork, put, take, takeLatest} from 'redux-saga/effects'
import { LoginDto, authActions } from './AuthSlice'
import { PayloadAction } from '@reduxjs/toolkit'
import LoginApi from '../../Api/LoginApi'
import { POST } from '../../../constants/http/methodHttp'
import axios from 'axios'
import { AccountDto } from '../../../model/AuthLogin'
import { customHistory } from '../../../router/CustomRouter'

/**
 * This interface type error returned when call API
 */
interface AuthError {
    status: string,
    timestamp: string,
    message: string,
}

/**
 * Checking type of error
 * @param obj data needed check
 * @returns true or false
 */
function instanceOfAuthError(obj: any): obj is AuthError {
    return 'timestamp' in obj && 'status' in obj && 'message' in obj
}

/**
 * The func handle authorities data user input
 * @param action information dispatched
 */
function* handleMakeAuth(action:PayloadAction<LoginDto>) {
    
    try {
        const [result, error] : any[] = yield call(LoginApi, '/login', action.type, POST,action.payload)
        
        if (result) {
            const tmp:AccountDto = {...result}

            // Login successful
            yield put(authActions.authSuccessAccount(tmp))
            // customHistory.push('/')
            customHistory.back()
        }
    
        // Tài khoản chưa tồn tại - Account not existed
        else if (instanceOfAuthError(error)){
            console.log("Error: ", error);
        }   
    }
    catch(e:any) {

        // Wrong password
        if (e instanceof TypeError) {
            console.log("TypeError!")
        }
        // Error server
        else if (axios.isAxiosError(e)) {
            console.log("Error Server!")
        }
    }
    
}

/**
 * Logic log-out, not yet completed
 */
function* handleLogoutAccount() {
    
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    yield delay(1000)
    customHistory.push('/')
}

/**
 * Tracking actions dispatched
 */
function* workerMakeAuth() {

    while (true) {

        const isLoggedIn = Boolean(localStorage.getItem('access_token'))

        if (!isLoggedIn) {
            yield takeLatest(authActions.authorityAccount, handleMakeAuth)
        }

        yield take(authActions.logout)
        yield call(handleLogoutAccount)
    }
}

/**
 * Saga responsibility for authentication account (log-in and log-out)
 */
export function* watcherMakeAuth() {
    yield fork(workerMakeAuth)
}