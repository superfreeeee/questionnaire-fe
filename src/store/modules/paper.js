import {
  
} from '@/api'

const paper = {
  state: {
    paperList: [],  /* Paper[] */
    currentPaperId: '',
    questionList: [],  /* Question[] */
    createPaperVisible: false
  },
  mutations: {
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
    },
    set_createPaperVisible(state, bool) {
      state.createPaperVisible = bool
    }
  },
  actions: {
    // 浏览相关
    getAllPapers: async({ commit }, userId) => {
      commit
      userId
    },
    showPaperQuestions: async({ commit }, paperId) => {
      commit
      paperId
    },
    // 创建相关
    createPaper: async({ commit }, userId) => {
      commit
      userId
    },
    addQuestion: async({ commit }, question/* Question */) => {
      commit
      question
    },
  }
}

export default paper