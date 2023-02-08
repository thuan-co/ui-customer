import axios from "axios";
import { GET } from "../../constants/http/methodHttp";
import { cityActions } from "../redux-saga/Address/AddressSlice";
import { districtActions } from "../redux-saga/Address/DistrictSlice";
import { communeActions } from "../redux-saga/Address/CommuneSlice";

export default function AddressApi(endpoint:string, action:string, method:string, data:any) {

    const baseUrl = "http://localhost:8088/api/v1"
    let header = {
        "Content-Type": 'application/json',
    }

    if (action === cityActions.fetchingCites.type) {
        
        return axios(
            {
                headers: header,
                url: baseUrl + endpoint,
                method: method,
            }
        ).then(
            response => {
                const result = response.data
                return [result, null]
            }
        ).catch(
            error => {
                const errorRes = error.response.data;
                return [null, errorRes]
            }
        )
    }
    
    if (action === districtActions.fetchingDistricts.type) {
        return axios({
            headers: header,
            url: baseUrl + endpoint,
            method: method
        }).then(
            response => {
                const result = response.data
                return [result, null];
            }
        ).catch(
            error => {
                const errorRes = error.response.data;
                return [null, errorRes]
            }
        )
    }

    if (action === communeActions.fetchCommunes.type) {
        return axios({
            headers: header,
            url: baseUrl + endpoint,
            method: method,
        }).then(
            response => {
                const result = response.data
                return [result, null];
            }
        ).catch(
            error => {
                const errorRes = error.response.data;
                return [null, errorRes]
            }
        )
    }
}