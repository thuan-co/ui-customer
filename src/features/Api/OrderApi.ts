import axios from "axios"
import { orderPhoneActions } from "../redux-saga/Order/orderSlice"
import { historyActions } from "../redux-saga/Order/historySlice"

export default function OrderApi(endpoint:string, action:string, method:string, data:any) {
    const baseUrl = 'http://localhost:8088/api/v1'
    let header={
        "Content-Type":"application/json"
    }
    if (action === orderPhoneActions.makeOrder.type) {
        return axios({
            baseURL: baseUrl + endpoint,
            headers: header,
            method: method,
            data: data,
        }).then(
            response => {
                return [response.data, null]
            }
        ).catch(error => {
            return [null, error]
        })
    }
    else if (action === historyActions.fetchHistory.type) {
        return axios({
            baseURL: baseUrl + endpoint + '?khachhang=' + data,
            headers: header,
            method: method,
        }).then(
            response => {
                return [response.data, null]
            }
        ).catch(error => {
            return [null, error]
        })
    }
}