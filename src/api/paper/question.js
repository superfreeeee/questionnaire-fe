const api = {
    questionPre: '/api/question'
}

export function addQuestionsAPI(data) {
    return this.axios({
        url: `${api.questionPre}/addQuestions`,
        method: 'POST',
        data
    })
}

export function updateQuestionAPI(data) {
    return this.axios({
        url: `${api.questionPre}/updateQuestion`,
        method: 'POST',
        data
    })
}

export function deleteQuestion(questionId) {
    return this.axios({
        url: `${api.questionPre}/${questionId}/deleteQuestion`,
        method: 'GET',
    })
}
