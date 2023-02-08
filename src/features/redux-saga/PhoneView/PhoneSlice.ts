import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PhoneViewDetails } from "../../../model/phone";

const initialState:PhoneViewDetails = {
    id: '',
    name: '',
    price: '',
    dimensionImage: '',
    slides: [],
    storages: [],
    specs: [],
}

export const phoneDetailsSlice = createSlice({
    name: "phone-details",
    initialState,
    reducers: {
        fetchPhoneById(state, action:PayloadAction<number>) {

        },
        successPhoneDetails(state, action:PayloadAction<PhoneViewDetails>) {
            let tmp = {...state};
            tmp = {...action.payload}
            return tmp
        },
    }
})

// reducers
const phoneDetailsReducers = phoneDetailsSlice.reducer
export default phoneDetailsReducers
// actions
export const phoneDetailsActions = phoneDetailsSlice.actions