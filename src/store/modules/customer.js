import {
  
} from '@/api'

const paper = {
  state: {
    paperInfo: {},  /* Paper */
    questionList: []  /* Question[] */
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
    getPaper: async({ commit }, paperId) => {
      commit
      paperId
    }
  }
}

export default paper