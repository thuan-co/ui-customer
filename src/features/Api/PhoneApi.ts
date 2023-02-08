import axios from "axios";
import { GET } from "../../constants/http/methodHttp";
import { phoneDetailsActions } from "../redux-saga/PhoneView/PhoneSlice";
import { phoneCardActions } from "../redux-saga/PhoneView/PhoneCardSlice";

export default function PhoneViewApi(endpoint:string, action:string, method:string, data:any) {
    const baseUrl = "http://localhost:8080/api/v1"
    let header = {
        "Content-Type": 'application/json',
    }

    if (method === GET && action === phoneDetailsActions.fetchPhoneById.type) {

        return axios({
            method: method,
            // url: baseUrl,
            headers: header,
            url: baseUrl + endpoint + '?phone='+data
        }).then(response => {
            const result = response.data
            return [result, null]
        }).catch(error => {
            if (error.response) {

                const errorRes = error.response;
            }
            
            return [null, error.response]
        })
    }

    else if(method === GET && action === phoneCardActions.fetchPromoteBrand.type) {

        return axios({
            method: method,
            headers: header,
            url: baseUrl + endpoint + '?brand='+data
        }).then(response => {
            
            return [response.data, null]
        }).catch(error => {
            return [null, error.response]
        })
    }
}