import axios from 'axios'

const api = {
    answerPre: '/api/answer'
}

// 填写问卷
export function addAnswersAPI(data) {
    return axios({
        url: `${api.answerPre}/addAnswers`,
        method: 'POST',
        data
    })
}
