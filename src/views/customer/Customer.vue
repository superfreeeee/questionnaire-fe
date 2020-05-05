<template>
  <div class="bg">
    <div class='customer'>
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ subtitle }}</div>
      <el-form
        class="questions"
        ref="customerForm"
        :model="paper"
        :rules="rules"
        label-position="top"
      >
        <el-form-item
          v-for="question in paper.questionList"
          :key="question.id"
          style="text-align: left;"
          :prop="getProp(question.type)"
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
            <el-radio
              v-for="option in question.options"
              :key="option.id"
              :label="option.content">{{ option.content }}</el-radio>
          </el-radio-group>
          <el-checkbox-group
            v-if="question.type === 2"
            v-model="question.answer"
            @change="change(question.answer)"
          >
            <el-checkbox
              v-for="option in question.options"
              :key="option.id"
              :label="option.content"
            >{{ option.content }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
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
        single: [
          { 
            validator: (rule, value, callback) => {
              console.log(rule)
              console.log(value)
              console.log(callback)
              if(value.length <= 0) {
                callback(new Error(''))
              }
            },
            trigger: 'change',
            required: true
          }
        ],
        multiple: [
          { type: 'array', required: true, trigger: 'change', message: '多选至少选一个' }
        ],
        text: [
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
            ],
            answer: ''
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
    for(let question of this.paper.questionList) {
      if(question.type === 2) {
        question.answer = []
      } else {
        question.answer = ''
      }
    }
    console.log(this.paper.questionList)
  },
  methods: {
    getProp(type) {
      if(type === 1) {
        return 'sinlge'
      }
      if(type === 2) {
        return 'double'
      }
      if(type === 3) {
        return 'text'
      }
      return 'none'
    },
    submitAnswer() {
      this.$refs.customerForm.validate((valid) => {
        if(valid) {
          console.log('valid')
          console.log(valid)
        } else {
          console.log('Invalid')
          console.log(valid)
        }
      })
      const answers = []
      for(let question of this.paper.questionList) {
        answers.push({
          questionId: question.id,
          content: question.answer
        })
      }
      console.log(answers)
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
