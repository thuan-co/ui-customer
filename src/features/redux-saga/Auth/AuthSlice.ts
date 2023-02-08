import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AccountDto } from "../../../model/AuthLogin";

export interface AuthAccount {
    accountDto: AccountDto,
    isAuth: boolean,
}
export interface LoginDto {
    username: string,
    password: string,
}
const initialState: AuthAccount = {

    accountDto: {
        username: '',
        name: '',
        authorities: [
            {
                authority: ''
            }
        ],
        access_token: '',
        refresh_token: '',
    },
    isAuth: false,
}

const authSlice = createSlice({
    name: 'auth-login',
    initialState,
    reducers:{
        authorityAccount(state,action:PayloadAction<LoginDto>){},
        authSuccessAccount(state, action:PayloadAction<AccountDto>) {
            let tmp = {...state}
            tmp.accountDto = action.payload

            tmp.isAuth = true

            localStorage.setItem('access_token', tmp.accountDto.access_token)
            localStorage.setItem('refresh_token', tmp.accountDto.refresh_token)

            sessionStorage.setItem("email", tmp.accountDto.username)
            sessionStorage.setItem("name", tmp.accountDto.name)
            return tmp;
        },
        logout(state) {
            return initialState
        },
    }
})

// Reducers
const authReducers = authSlice.reducer
export default authReducers
// Actions 
export const authActions = authSlice.actions