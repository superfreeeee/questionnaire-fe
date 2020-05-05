import {
  
} from '@/api'

const paper = {
  state: {
    paper: {}, /* Paper */
  },
  mutations: {
    set_paper(state, paper) {
      state.paper = paper
    }
  },
  actions: {
    getFullPaper: ({ commit }, paperId) => {
      console.log(`get paper ${paperId}`)
      const paper = {
        title: '问卷标题，大概最多会有20个字（。。。）',
        description: '一个大概会有30～50个字的说明一个大概会有30～50个字的说明一个大概会有30～50个字的说明一个大概会有30～50个字的说明一个大概会有30～50个字的说明一个大概会有30～50个字的说明一个大概会有30～50个字的说明一个大概会有30～50个字的说明一个大概会有30～50个字的说明',
        questionList: [
          {
            id: 1,
            type: 1,
            title: '单选题一',
            options: [
              {
                id: 1,
                questionId: 1,
                content: '单选选项一'
              },
              {
                id: 2,
                questionId: 1,
                content: '单选选项二'
              },
              {
                id: 3,
                questionId: 1,
                content: '单选选项三'
              },
            ],
          },
          {
            id: 2,
            type: 2,
            title: '多选题一',
            options: [
              {
                id: 4,
                questionId: 2,
                content: '多选选项一'
              },
              {
                id: 5,
                questionId: 2,
                content: '多选选项二'
              },
              {
                id: 6,
                questionId: 2,
                content: '多选选项三'
              },
              {
                id: 7,
                questionId: 2,
                content: '多选选项4'
              },
              {
                id: 8,
                questionId: 2,
                content: '多选选项5'
              },
              {
                id: 9,
                questionId: 2,
                content: '多选选项6'
              },
            ],
          },
          {
            id: 3,
            type: 3,
            title: '简答',
          },
        ],
      }
      for(let question of paper.questionList) {
        if(question.type === 2) {
          question.answer = []
        } else {
          question.answer = ''
        }
      }
      // console.log('get paper in actions')
      // console.log(paper)
      commit('set_paper', paper)
    },
    submitAnswers: (_, answers) => {
      console.log('submit answers in store')
      console.log(answers)
    }
  }
}

export default paper