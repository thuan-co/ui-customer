import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OrderHistoryResponse } from "../../../model/history";

const initialState:OrderHistoryResponse[] = []

const historySlice = createSlice({
    name: 'history_order',
    initialState,
    reducers: {
        fetchHistory(state, action:PayloadAction<string>) {
            console.log("Lay lich su dat hang")
        },
        fetchSuccess(state, action:PayloadAction<OrderHistoryResponse[]>){
            let tmp = [...state]
            tmp = [...action.payload]
            return tmp
        }
    }
})

const historyReducers = historySlice.reducer
export default historyReducers

export const historyActions = historySlice.actions