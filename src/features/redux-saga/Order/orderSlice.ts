import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ItemDto, OrderDto } from "../../../model/other";

const initialState:OrderDto = {
    id: '',
    createAt: new Date(),
    totalPrice: '',
    status: '',
    customer: null,
    items:[],
    address: null
}

const orderSlice = createSlice({
    name: 'order-phone',
    initialState,
    reducers: {
        checkAvailableItems(state, action:PayloadAction<ItemDto[]>) {},
        makeOrder(state, action:PayloadAction<OrderDto>) {

        },
        makeOrderSuccessful(state, action:PayloadAction<number>) {

        }
    }
})

const orderPhoneReducers = orderSlice.reducer
export default orderPhoneReducers

export const orderPhoneActions = orderSlice.actions