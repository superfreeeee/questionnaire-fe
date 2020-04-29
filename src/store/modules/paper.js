import {
  
} from '@/api'

const paper = {
  state: {
    paperList: [],  /* Paper[] */
    currentPaperId: '',
    questionList: []  /* Question[] */
  },
  mutation: {
    set_paperList(state, paperList) {
      state.paperList = paperList
    },
    set_currentPaperId(state, paperId) {
      state.currentPaperId = paperId
    },
    set_questionList(state, questionList) {
      state.questionList = questionList
    },
    add_question(state, question) {
      state.questionList.push(question)
    }
  },
  actions: {
    // 浏览相关
    getAllPapers: async({ commit }, userId) => {

    },
    showPaperQuestions: async({ commit }, paperId) => {
      
    },
    // 创建相关
    createPaper: async({ commit }, userId) => {

    },
    addQuestion: async({ commit }, question/* Question */) => {

    },
  }
}

export default paper