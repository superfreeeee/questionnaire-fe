import axios from '@utils/request'
const api = {
    optionsPre = '/api/options'
}

export function addOptionsAPI(data) {
    return axios({
        url: `${api.optionsPre}/addOptions`,
        method: 'POST',
        data
    })
}

export function updateOptionAPI(data) {
    return axios({
        url: `${api.optionsPre}/updateOption`,
        method: 'POST',
        data
    })
}

export function deleteOptionAPI(id) {
    return axios({
        url: `${api.optionsPre}/${id}/deleteOption`,
        method: 'POST',
    })
}
