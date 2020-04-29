const api = {
    answerPre: '/api/answer'
}

export function addAnswersAPI(data) {
    return this.axios({
        url: `${api.answerPre}/addAnswers`,
        method: 'POST',
        data
    })
}
