const api = {
    paperPre: '/api/paper'
}

export function addPaperAPI(data) {
    return axios({
        url: `${api.paperPre}/addPaper`,
        method: 'POST',
        data
    })
}

export function updatePaperAPI(data) {
    return axios({
        url: `${api.paperPre}/updatePaper`,
        method: 'POST',
        data
    })
}

export function invalidatePaperAPI(paperId) {
    return axios({
        url: `${api.paperPre}/${paperId}/invalidatePaper`,
        method: 'GET',
    })
}

export function getUserPapers(userId) {
    return axios({
        url: `${api.paperPre}/${userId}/getUserPapers`,
        method: 'GET',
    })
}

export function checkPaperAPI(paperId) {
    return axios({
        url: `${api.paperPre}/${paperId}/checkPaper`,
        method: 'GET',
    })
}

export function reviewPaperAPI(paperId) {
    return axios({
        url: `${api.paperPre}/${paperId}/reviewPaper`,
        method: 'GET',
    })
}
