import {
  
} from '@/api'

const paper = {
  state: {
    paperInfo: {},  /* Paper */
    questionList: []  /* Question[] */
  },
  mutation: {
    set_paperInfo(state, paperInfo) {
      state.paperInfo = paperInfo
    },
    set_questionList(state, questionList) {
      state.questionList = questionList
    }
  },
  actions: {
    getPaper: async({ commit }, paperId) => {

    }
  }
}

export default paper