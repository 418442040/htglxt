import axios from 'axios'

//登录接口
export function login(data){
    return axios({
        url:"http://127.0.0.1/heimamm/public/login",
        method:"post",
        withCredentials: true,
        data
    })
}

//获取短信验证码接口
export function short_message(data){
    return axios({
        url:"http://127.0.0.1/heimamm/public/sendsms",
        method:"post",
        data
    })
}