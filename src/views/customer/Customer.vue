<template>
  <div class="bg">
    <div class='customer'>
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ subtitle }}</div>
      <el-form
        class="questions"
        ref="customerForm"
        :model="paper"
        label-position="top"
      >
        <div
          v-for="(question, index) in paper.questionList"
          :key="question.id"
        >
          <el-divider v-if="index !== 0"></el-divider>
          <el-form-item
            style="text-align: left;"
            :prop="`questionList.${index}.answer`"
            :rules="rules[question.type]"
          >
            <span slot="label" class="questionTitle">{{ question.title }}</span>
            <el-input
              v-if="question.type === 3"
              style="width: 80%;"
              type="textarea"
              size="medium"
              rows="4"
              v-model="question.answer"
              @change="change(question.answer)"
            ></el-input>
            <el-radio-group
              v-else-if="question.type === 1"
              v-model="question.answer"
              @change="change(question.answer)"
            >
              <div
                v-for="option in question.options"
                :key="option.id"
                style="margin-bottom: 10px"
              >
                <el-radio
                  :label="option.content"
                  border
                >{{ option.content }}</el-radio>
              </div>
            </el-radio-group>
            <el-checkbox-group
              v-if="question.type === 2"
              v-model="question.answer"
              @change="change(question.answer)"
            >
              <div
                v-for="option in question.options"
                :key="option.id"
                style="margin-bottom: 10px"
              >
                <el-checkbox
                  :label="option.content"
                  border
                >{{ option.content }}</el-checkbox>
              </div>
            </el-checkbox-group>
          </el-form-item>
        </div>
        
        <el-form-item>
          <el-button type="primary" size="large" @click="submitAnswer()">完成填写！</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
  
</template>

<script>
// import Question from './components/CustomerQuestion'

export default {
  name: 'Customer',
  data() {
    return {
      rules: {
        1: [
          {  required: true, trigger: 'change', message: '必须选择一个' }
        ],
        2: [
          { type: 'array', required: true, trigger: 'change', message: '多选至少选一个' }
        ],
        3: [
          { required: true, trigger: 'blur', message: '输入不可为空' }
        ]
      },
      paperId: -1,
      title: '问卷标题，大概最多会有20个字（。。。）',
      subtitle: '一个大概会有30～50个字的说明一个大概会有30～50个字的说明一个大概会有30～50个字的说明一个大概会有30～50个字的说明一个大概会有30～50个字的说明一个大概会有30～50个字的说明一个大概会有30～50个字的说明一个大概会有30～50个字的说明一个大概会有30～50个字的说明',
      paper: {
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
            answer: ''
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
            answer: []
          },
          {
            id: 3,
            type: 3,
            title: '简答',
            answer: ''
          },
        ],
      }
      
    }
  },
  components: {
    // Question
  },
  mounted() {
    this.paperId = this.$route.params.paperId
    // for(let question of this.paper.questionList) {
    //   if(question.type === 2) {
    //     question.answer = []
    //   } else {
    //     question.answer = ''
    //   }
    // }
    console.log(this.paper.questionList)
  },
  methods: {
    buildAnswers() {
      const answers = []
      for(let question of this.paper.questionList) {
        answers.push({
          questionId: question.id,
          content: question.answer
        })
      }
      return answers
    },
    submitAnswer() {
      this.$refs.customerForm.validate((valid) => {
        if(valid) {
          console.log('valid')
          const answers = this.buildAnswers()
          console.log(answers)
          this.$message.success('提交成功')
          
        } else {
          console.log('Invalid')
          this.$message.error('问卷不可有空栏')
        }
      })
    },
    change(model) {
      console.log(model)
    }
  }
}
</script>

<style>
.bg {
  width: 100vw;
  min-height: 100vh;
  background: #efefef;
}

.customer {
  padding-top: 40px;
  background: white;
  width: 50%;
  min-height: 100vh;
  margin: 0 auto;
}

.customer > .title {
  text-align: center;
  font-size: 40px;
}

.customer > .subtitle {
  font-size: 20px;
  width: 80%;
  margin: 20px auto;
  text-indent: 2em;
  text-align: left;
}

.customer > .questions {
  margin: 0 10%;
}

.questionTitle {
  font-size: 25px;
}

</style>
