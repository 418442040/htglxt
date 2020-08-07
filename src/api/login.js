import axios from 'axios'

export function login(data){
    return axios({
        url:"http://127.0.0.1/heimamm/public/login",
        method:"post",
        withCredentials: true,
        data
    })
}