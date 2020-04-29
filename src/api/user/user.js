const api = {
    userPre: '/api/user'
}

export function loginAPI(data) {
    return this.axios({
        url: `${api.userPre}/login`,
        method: 'POST',
        data
    })
}

export function registerAPI(data) {
    return this.axios({
        url: `${api.userPre}/register`,
        method: 'POST',
        data
    })
}
