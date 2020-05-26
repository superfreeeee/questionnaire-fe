<template>
  <div class="create">
    <div class="header">
      <span class="name">【 {{ paperInfo.title }} 】</span>
    </div>
    <el-divider />
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4 }"
      placeholder="请输入問卷說明"
      v-model="paperInfo.description"
      style="width: 800px; padding-right: 100px"
    >
    </el-input>
    <el-divider />
    <el-form>
      <el-form-item
        style="text-align: left"
        ref="questionList"
        label-width="100px"
        v-for="(ques, index) in questionList"
        :key="index"
      >
        <el-input
          type="textarea"
          placeholder="请输入問題"
          v-model="ques.text"
          style="width: 700px; border: 2px solid; display: block"
        >
        </el-input>
        <div v-if="ques.type === 1">
          <el-button
            style="display: block; margin-top: 10px"
            type="primary"
            size="mini"
            icon="el-icon-plus"
            @click="addOption(ques)"
          >
            新增選項
          </el-button>
          <div
            style="padding-right: 600px; margin-top: 10px;"
            v-for="(option, index) in ques.options"
            :key="index"
          >
            <el-radio style="display: inline-block" disabled=""></el-radio>
            <el-input
              style="display: inline-block; width: 200px"
              v-model="option.content"
            ></el-input>
          </div>
        </div>
        <div v-else-if="ques.type === 2">
          <el-button
            style="display: block; margin-top: 10px"
            type="primary"
            size="mini"
            icon="el-icon-plus"
            @click="addOption(ques)"
          >
            新增選項
          </el-button>
          <div
            style="padding-right: 600px;"
            v-for="(option, index) in ques.options"
            :key="index"
          >
            <el-checkbox
              style="display: inline-block; margin-right: 10px"
              disabled=""
            ></el-checkbox>
            <el-input
              style="display: inline-block; width: 200px"
              v-model="option.content"
            ></el-input>
          </div>
        </div>
        <el-input
          v-else
          type="textarea"
          placeholder="回答"
          style="width: 500px; margin:10px 0; padding-right: 400px;"
        >
        </el-input>
        <div style="display: flex; justify-content: flex-end;">
          <el-button @click="delQues(index)" type="danger">刪除</el-button>
          <el-button @click="updQues(index)" type="success">保存</el-button>
          <div style="flex: 0 1 20%"></div>
        </div>
        <el-divider />
      </el-form-item>
    </el-form>
    <!--<div style="margin-bottom: 30px; padding-left: 700px; padding-bottom: 30px">

    </div>-->
    <div style="padding-bottom: 20px" v-if="Listempty">
      <el-button type="success" @click="submitpaper()">發放問卷 !</el-button>
      <el-divider direction="vertical" />
      <el-dropdown @command="addQues">
        <el-button type="primary"
          >新增問題<i class="el-icon-arrow-down el-icon--right"></i
        ></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="1">單選</el-dropdown-item>
          <el-dropdown-item command="2" divided>多選</el-dropdown-item>
          <el-dropdown-item command="3" divided>簡答</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div style="padding-bottom: 20px" v-else>
      <el-dropdown @command="addQues">
        <el-button type="primary"
          >新增問題<i class="el-icon-arrow-down el-icon--right"></i
        ></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="1">單選</el-dropdown-item>
          <el-dropdown-item command="2" divided>多選</el-dropdown-item>
          <el-dropdown-item command="3" divided>簡答</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Create',
  data() {
    return {}
  },
  mounted() {
    console.log('Create with paperInfo & questionList')
    console.log(this.paperInfo)
    console.log(this.questionList)
  },
  computed: {
    ...mapGetters(['paperInfo', 'questionList']),
    Listempty() {
      return this.questionList.length !== 0
    }
  },
  methods: {
    ...mapActions(['createQuestion', 'updateQuestion']),
    addQues(type) {
      this.createQuestion(Number(type))
    },
    delQues(index) {
      this.questionList.splice(index, 1)
    },
    updQues(index) {
      const ques = this.questionList[index]
      const success = this.updateQuestion(ques)
      success.then((res) => {
        console.log(res)
        if (res) {
          this.$message.success('保存成功')
        } else {
          this.$message.error('保存失敗')
        }
      })
      /*if(success) {
        this.$message.success('保存成功')
      }else{
        this.$message.error('保存失敗')
      }*/
    },
    addOption(question) {
      question.options.push({ content: '' })
    },
    submitpaper() {
      console.log('submitPaper')
      console.log(this.paperInfo.id)
      this.$router.push({
        name: 'paperlink',
        params: { paperId: this.paperInfo.id }
      })
    }
  }
}
</script>

<style>
.header {
  height: 50px;
  padding: 0 20px;
  line-height: 47px;
}

.name {
  float: left;
  font-size: 20px;
}

.el-checkbox-group {
  padding-right: 700px;
}

.el-checkbox {
  display: block;
  margin: 10px;
}

.el-checkbox:last-of-type {
  margin: none;
}

.el-radio {
  margin: 0;
}
</style>
