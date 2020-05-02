import {
  
} from '@/api'

const paper = {
  state: {
    paper: {}, /* Paper */
    questions: [], /* Questions */
    answers: [] /* Answer[] */
  },
  mutations: {
    set_paperInfo(state, paperInfo) {
      state.paperInfo = paperInfo
    },
    set_questionList(state, questionList) {
      state.questionList = questionList
    }
  },
  actions: {
    getPaper: () => {

    },
    getQuestions: () => {

    },
    submitAnswers: () => {
      
    }
  }
}

export default paper