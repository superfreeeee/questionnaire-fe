import {
  addQuestionsAPI
} from '@/api'

const paper = {
  state: {
    paperList: [],  /* Paper[] */
    questionList: [  /* Question[] */
      
    ],
    createPaperVisible: false
  },
  mutations: {
    set_paperList(state, paperList) {
      state.paperList = paperList
    },
    set_questionList(state, questionList) {
      state.questionList = questionList
    },
    add_paper(state, paper) {
      state.paper.push(paper)
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
    getAllQuestions: async({ commit }, paperId) => {
      commit
      paperId
    },
    // 创建相关
    createPaper: async({ commit }, paper/* Paper */) => {
      commit
      paper
    },
    createQuestion: async({ commit }, question/* Question */) => {
      commit
      question
    },
    updateQuestion: async() => {
      
    }
  }
}

export default paper