import axios from '@/utils/request'
const api = {
    answerPre = '/api/answer'
}

export function addAnswersAPI(data) {
    return axios({
        url: `${api.answerPre}/addAnswers`,
        method: 'POST',
        data
    })
}
