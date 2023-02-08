import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PhoneView } from "../../../model/phone";

const initialState:PhoneView[] = []

const phoneCard = createSlice({
    name: 'oppo',
    initialState,
    reducers: {
        fetchPromoteBrand(state, action:PayloadAction<string>) {},
        fetchSuccess(state, action:PayloadAction<PhoneView[]>) {
            let tmp = [...state]
            tmp = [...action.payload]
            return tmp
        }
    }
})

const phoneCardReducers = phoneCard.reducer
export default phoneCardReducers

export const phoneCardActions = phoneCard.actions
