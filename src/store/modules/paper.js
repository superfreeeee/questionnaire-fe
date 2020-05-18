import { addPaperAPI } from '../../api/paper/paper'
import { addQuestionsAPI } from '../../api/paper/question'
import { updateQuestionAPI } from '../../api/paper/question'

const paper = {
  state: {
    paperList: [],  /* Paper[] */
    currentPaper: {
      paperInfo: {}, /* Paper */
      questionList: [  /* Question[] */
        {
          type: 1, // 單擇
          text: '',
          options: [
            {
              content: ''
            }
          ]
        },
        {
          type: 3, // 文字
          text: '',
          answer: ''
        },   
        {
          type: 2, // 多選
          text: '',
          options: [
            {
              content: ''
            }
          ]
        },
        {
          type: 3,
          text: '',
          answer: ''
        }
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

    },
    // 创建相关
    createNewPaper: async({ state, commit, getters }, paper/* Paper */) => {
      // const res = await addPaperAPI(paper)
      // const paperId = res.data.cotent
      const paperId = '12345'
      const paperInfo = {
        id: paperId,
        userId: getters.userInfo.id,
        title: '',
        description: '',
        start_time: null,
        end_time: null,
        status: 0,
        ...paper
      }
      // console.log(paperInfo)
      commit('set_paperInfo', paperInfo)
      commit('set_questionList', [])
    },
    // createQuestion: async({ commit }, question/* Question */) => {
    //   commit
    //   question
    // },
    createQuestion: async({ commit }, type) => {
      // const res = await addQuestionsAPI()
      console.log(type)
      const questionId = 1
      const newQues = {
        questionId,
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
    updateQuestion: async({ commit }, ques) => {
      // const res = await updateQuestionAPI(ques)
      console.log(ques)
      const res = {
        data: {
          success: true,
          message: '',
          content: ''
        }
      }
      const success = res.data.success
      return success
    }
  }
}

export default paper
