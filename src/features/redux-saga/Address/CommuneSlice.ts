import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Commune, District } from "../../../model/other";

const initialState: Commune[] = []

const communeSlice = createSlice({
    name: "commune",
    initialState,
    reducers: {
        fetchCommunes(state, action: PayloadAction<District>) {},
        successCommunes(state, action: PayloadAction<Commune[]>) {
            let tmp = [...state]
            tmp = [...action.payload]
            return tmp
        },
    }
})

const communeReducers = communeSlice.reducer
export default communeReducers;

export const communeActions = communeSlice.actions;