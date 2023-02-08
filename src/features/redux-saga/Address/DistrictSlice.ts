import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { City, District} from "../../../model/other";

const initialState: District[] = []

const districtSlice = createSlice({
    name: 'district',
    initialState,
    reducers: {
        fetchingDistricts(state, action:PayloadAction<City | null>) {},
        successfulDistricts(state, action:PayloadAction<District[]>) {
            let tmp = [...state]
            tmp = [...action.payload]
            return tmp;
        },
    }
})

const districtReducers = districtSlice.reducer;
export default districtReducers;

export const districtActions = districtSlice.actions;