import {
  
} from '@/api'

const paper = {
  state: {
    paper: {}, /* Paper */
    paperStatistic: {}
  },
  mutations: {
    set_paper(state, paper) {
      state.paper = paper
    },
    set_paperStatistic(state,paperStatistic){
      state.paperStatistic = paperStatistic
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
    getFullPaperStatistic:({commit},paperId) =>{
      console.log(`get paperStatistic ${paperId}`)
      const paperStatistic = {
        title: '问卷标题question',
        description: '问卷一',
        questionStatisticList: [
          {
            id: 1,
            type: 1,
            title: '单选题一',
            options: [
              {
                id: 1,
                questionId: 1,
                content: '单选选项一',
                selectNum: 5,
                percent: '22%'
              },
              {
                id: 2,
                questionId: 1,
                content: '单选选项二',
                selectNum: 8,
                percent: '35%'
              },
              {
                id: 3,
                questionId: 1,
                content: '单选选项三',
                selectNum: 10,
                percent: '43%'
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
                content: '多选选项一',
                selectNum: 10,
                percent: '43%'
              },
              {
                id: 5,
                questionId: 2,
                content: '多选选项二',
                selectNum: 8,
                percent: '38%'
              },
              {
                id: 6,
                questionId: 2,
                content: '多选选项三',
                selectNum: 19,
                percent: '83%'
              },
              {
                id: 7,
                questionId: 2,
                content: '多选选项4',
                selectNum: 12,
                percent: '52%'
              },
              {
                id: 8,
                questionId: 2,
                content: '多选选项5',
                selectNum: 20,
                percent: '87%'
              },
              {
                id: 9,
                questionId: 2,
                content: '多选选项6',
                selectNum: 5,
                percent: '22%'
              },
            ],
          },
          {
            id: 3,
            type: 3,
            title: '简答',
            options:[{
              id:1,
              content:"今天天气不错"
            },
            {
              id:2,
              content:"今天天气真好"
            },
            {
              id:3,
              content:"啊哈哈哈哈哈"
            }
            ]
          },
        ],
      }
      commit('set_paperStatistic',paperStatistic)
    },
    submitAnswers: (_, answers) => {
      console.log('submit answers in store')
      console.log(answers)
    }
  }
}

export default paper