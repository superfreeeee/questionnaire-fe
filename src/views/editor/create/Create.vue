<template>
  <div class='create'>
    <div class="header">
      <span class="name">【 {{ name }} 】</span>
    </div>
    <el-divider />
    <el-input
        type = "textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入問卷說明"
        v-model="description"
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
        :key= 'index'
      >
        <el-input 
          type = "textarea"
          placeholder="请输入問題"
          v-model="ques.text"
          style="width: 700px; border: 2px solid; display: block"
        >
        </el-input>
        <div v-if="ques.type === 1">
          <el-button style="display: block; margin-top: 10px" 
            type="primary" 
            size="mini"
            icon="el-icon-plus"
            @click="addOption(ques)"
          >
          新增選項
          </el-button>
            <div style="padding-right: 600px; margin-top: 10px;" v-for="(option, index) in ques.options" :key='index'>
              <el-radio style="display: inline-block" disabled=""></el-radio>
              <el-input style="display: inline-block; width: 200px" v-model="option.content"></el-input>
           </div>
        </div>
        <div v-else-if="ques.type === 2">
          <el-button style="display: block; margin-top: 10px" 
            type="primary" 
            size="mini"
            icon="el-icon-plus"
            @click="addOption(ques)"
          >
          新增選項
          </el-button>
            <div style="padding-right: 600px;" v-for="(option, index) in ques.options" :key='index'>
              <el-checkbox style="display: inline-block; margin-right: 10px" disabled=""></el-checkbox>
              <el-input style="display: inline-block; width: 200px" v-model="option.content"></el-input>
           </div>
        </div>
        <el-input 
        v-else 
        type="textarea"
        placeholder="回答"
        style="width: 500px; margin:10px 0; padding-right: 400px;">
        </el-input>
        <div style="padding-left: 600px; margin-top: 30px">
          <el-button @click="delQues(index)" type="danger">刪除問題</el-button>
        </div>
        <el-divider />
      </el-form-item>
    </el-form>
    <!--<div style="margin-bottom: 30px; padding-left: 700px; padding-bottom: 30px">

    </div>-->
    <div style="padding-bottom: 20px" v-if="Listempty">
        <el-button type="success" @click="submitpaper()">發放問卷  !</el-button>
        <el-divider direction = "vertical" />
        <el-dropdown @command="addQues">
          <el-button type="primary">新增問題<i class="el-icon-arrow-down el-icon--right"></i></el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command=1>單選</el-dropdown-item>
            <el-dropdown-item command=2 divided>多選</el-dropdown-item>
            <el-dropdown-item command=3 divided>簡答</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Create',
  data() {
    return {
      name: '問卷一',
      description: '',
      questionList: [
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
    }
  },
  computed: {
    Listempty: function() {
      return this.questionList.length !== 0
    }
  },
  methods: {
    addQues(type) {
      console.log(type)
      if(type == 1) {
        const ques = {
          type: 1, // 單擇
          text: '',
          options: [
            {
              content: ''
            }
          ]
        }
        this.questionList.push(ques)
      }else if(type == 2){
          const ques = {
            type: 2,
            text: '',
            options: [
              {
                content: ''
              }
            ]
          }
          this.questionList.push(ques)
        }else {
          const ques = {
            type: 3,
            text: '',
            answer: ''
          }
          this.questionList.push(ques)
        }
      },
    delQues(index) {
      this.questionList.splice(index, 1)
    },
    addOption(question) {
      question.options.push({ content: '' })
    },
    submitpaper() {

    }
  }
}
</script>

<style>
.create {
  background-color: ghostwhite;
}

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
