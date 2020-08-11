//定义key
const key = 'mmToke'

//保存token
export function saveToken(token) {
    return window.localStorage.setItem(key,token)
}

//获取token
export function getToken() {
    return window.localStorage.getItem(key)
}

//删除token
export function removeToken() {
    return window.localStorage.removeItem(key)
}
