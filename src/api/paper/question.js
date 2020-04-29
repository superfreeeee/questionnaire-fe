import axios from '@utils/request'
const api = {
    questionPre = '/api/question'
}

export function addQuestionsAPI(data) {
    return axios({
        url: `${api.questionPre}/addQuestions`,
        method: 'POST',
        date
    })
}

export function updateQuestionAPI(data) {
    return axios({
        url: `${api.questionPre}/updateQuestion`,
        method: 'POST',
        data
    })
}

export function deleteQuestion(questionId) {
    return axios({
        url: `${api.questionPre}/${questionId}/deleteQuestion`,
        method: 'GET',
    })
}
