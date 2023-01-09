import axios from "axios"
import { GET, POST } from "../../constants/http/methodHttp"
import { authActions } from "../Auth/AuthSlice"

export default function LoginApi(endpoint: string, action: string, method:string, data:any) {
    const baseUrl = "http://localhost:8087/api/v1"
    let header = {
        "Content-Type": 'application/json',
    }
    if (method === GET) {
        return axios({
            method: method,
            url: baseUrl + endpoint,
            headers: header,
        }).then(
            response => {
                const result = response.data
                return [result, null]
            }
        ).catch(error => {
            if (error.response) {

                const errorRes = error.response;
            }
            
            return [null, error.response]
        })
    }

    else if (method === POST && action === authActions.authorityAccount.type) {
        return axios({
            method: method,
            url: baseUrl + endpoint,
            headers: header,
            data: data
        }).then(
            response => {
                const result = response.data
                return [result, null]
            }
        ).catch(error => {
            if (error.response) {

                const errorRes = error.response.data;
            }
            
            return [null, error.response.data]
        })
    }
}