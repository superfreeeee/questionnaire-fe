<template>
  <div class="bg">
    <div class='customer'>
      <div class="title">{{ customerPaper.title }}</div>
      <div class="subtitle">{{ customerPaper.description }}</div>
      <el-form
        class="questions"
        ref="customerForm"
        :model="customerPaper"
        label-position="top"
      >
        <div
          v-for="(question, index) in customerPaper.questionList"
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
            ></el-input>
            <el-radio-group
              v-else-if="question.type === 1"
              v-model="question.answer"
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
import { mapGetters, mapActions } from 'vuex'
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
      paperId: -1
    }
  },
  mounted() {
    this.paperId = this.$route.params.paperId
    this.getFullPaper(this.paperId)
    // console.log(`paperId: ${this.paperId}`)
  },
  computed: {
    ...mapGetters([
      'customerPaper'
    ])
  },
  methods: {
    ...mapActions([
      'getFullPaper',
      'submitAnswers'
    ]),
    buildAnswers() {
      const answers = []
      for(let question of this.customerPaper.questionList) {
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
          // console.log('valid')
          const answers = this.buildAnswers()
          // console.log(answers)
          this.$store.dispatch('submitAnswers', answers)
          this.$message.success('提交成功')
          this.$router.push({ name: 'complete', params: { paperId: this.paperId } })
        } else {
          // console.log('Invalid')
          this.$message.error('问卷不可有空栏')
        }
      })
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
  box-sizing: border-box;
  padding-top: 40px;
  background: white;
  width: 65%;
  min-height: 100vh;
  margin: 0 auto;
  overflow: scroll;
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
