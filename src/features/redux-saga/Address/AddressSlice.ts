import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { City } from "../../../model/other";

const initialState: City[] = []
/**
 * Getting all cities
 */
const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        fetchingCites(state) {},
        successFetching(state, action:PayloadAction<City[]>) {
            let tmp = [...state]
            tmp = [...action.payload]
            return tmp
        }
    }
})

const cityReducers = citySlice.reducer;
export default cityReducers;

export const cityActions = citySlice.actions;
