import {
  getUserPapersAPI,
  checkPaperAPI,
  reviewPaperAPI,
  addPaperAPI,
  updatePaperAPI
} from '../../api/paper/paper'

import {
  addQuestionsAPI,
  updateQuestionAPI,
  deleteQuestion
} from '../../api/paper/question'

const paper = {
  state: {
    paperList: [] /* Paper[] */,
    currentPaper: {
      paperInfo: {} /* Paper */,
      questionList: [
        /* Question[] */
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
      ]
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
    // 查看用户所有问卷
    getAllPapers: async ({ commit }, userId) => {
      console.log(`get paperList with userId: ${userId}`)
      // const res = await getUserPapersAPI(userId)
      const res = {
        data: {
          success: true,
          content: [
            {
              paperInfo: {
                id: '123',
                userId: userId,
                title: '问卷一',
                description: '',
                start_time: '5月12日',
                end_time: null,
                status: 0
              },
              questionList: []
            },
            {
              paperInfo: {
                id: '128',
                userId: userId,
                title: '问卷二',
                description: '',
                start_time: '5月18日',
                end_time: null,
                status: 0
              },
              questionList: []
            },
            {
              paperInfo: {
                id: '1289',
                userId: userId,
                title: '问卷三',
                description: '',
                start_time: '5月29日',
                end_time: null,
                status: 0
              },
              questionList: []
            }
          ]
        }
      }
      if(res && res.data && res.data.success) {
        const paperList = res.data.content
        console.log(paperList)
        commit('set_paperList', paperList)
      }
    },
    // 创建问卷
    createNewPaper: async ({ state, commit, getters }, paper /* Paper */) => {
      // const res = await addPaperAPI(paper)
      // const paperId = res.data.cotent
      const paperInfo = {
        id: Math.floor(Math.random() * 100),
        userId: getters.userInfo.id,
        title: '',
        description: '',
        start_time: null,
        end_time: null,
        status: 1,
        ...paper
      }
      // console.log(paperInfo)
      commit('set_paperInfo', paperInfo)
      commit('set_questionList', [])
    },
    // 创建问题
    createQuestion: async ({ commit }, type) => {
      // const res = await addQuestionsAPI()
      console.log(type)
      const questionId = 1
      const newQues = {
        questionId,
        type,
        text: ''
      }
      if (type <= 2) {
        // 是單選或多選才有選項
        newQues.options = [
          {
            content: ''
          }
        ]
      }
      commit('add_question', newQues)
    },
    // 更新问题
    updateQuestion: async ({ commit }, ques) => {
      // const res = await updateQuestionAPI(ques)
      console.log(ques)
      const res = {
        data: {
          success: false,
          message: '',
          content: ''
        }
      }
      const success = res.data.success
      return success
    },
    // 删除问题
    deleteQuestion: async ({ commit }, questionId) => {
      console.log(`delete question, questionId = ${questionId}`)
    }
  }
}

export default paper
