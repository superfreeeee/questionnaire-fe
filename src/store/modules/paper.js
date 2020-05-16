import {
  
} from '@/api'
import { addPaperAPI } from '../../api/paper/paper'
import { addQuestionsAPI } from '../../api/paper/question'

const paper = {
  state: {
    paperList: [],  /* Paper[] */
    currentPaper: {
      paperInfo: {}, /* Paper */
      questionList: [  /* Question[] */
      
      ],
    },
    createPaperVisible: false // show createPaper Component
  },
  mutations: {
    set_paperList(state, paperList) {
      state.paperList = paperList
    },
    set_paperInfo(state, paperInfo) {
      state.currentPaper.paperInfo = paperInfo
    },
    set_questionList(state, questionList) {
      state.currentPaper.questionList = questionList
    },
    add_question(state, question) {
      state.currentPaper.questionList.push(question)
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
      // const res = await addPaperAPI(paper)
      const paperId = '12345'
      // other operation
    },
    // createQuestion: async({ commit }, question/* Question */) => {
    //   commit
    //   question
    // },
    createQuestion: async({ commit }, type) => {
      // const res = await addQuestionsAPI()
      const questionId = 1
      const newQues = {
        type,
        text: ''
      }
      if(type <= 2) { // 是單選或多選才有選項
        newQues.options = [
          {
            content: ''
          }
        ]
      }
      commit('add_question', newQues)
    },
    updateQuestion: async() => {
      
    }
  }
}

export default paper