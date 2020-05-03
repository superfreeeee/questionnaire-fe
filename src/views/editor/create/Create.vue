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
    <!--<el-button type="primary" @click="addSingle" class="create-btn">單選</el-button>
    <el-button type="primary" @click="addMultiple" class="create-btn">多選</el-button>
    <el-button type="primary" @click="addInput" class="create-btn">填充</el-button>-->
    <div style="margin-bottom: 30px; padding-left: 700px; padding-bottom: 30px">
      <el-button @click="addQues(1)" type="primary">新增問題</el-button>
      <el-button @click="delQues(index)" type="danger">刪除問題</el-button>
    </div>
    <el-form ref="questionList" label-width="100px" v-for="(ques, index) in questionList" :key= 'index'>
      <el-form-item>
        <el-input 
          type = "textarea"
          placeholder="请输入問題"
          v-model="ques.text"
          style="width: 700px; float: left; border: 2px solid"
        >
        </el-input>
        <div v-if="ques.type === 0" style="float: left">
          <el-button style="display: block; margin-top: 10px" 
          type="primary" 
          size="mini"
          icon="el-icon-plus"
          @click="addOption()">
          新增選項
          </el-button>
          <el-checkbox-group v-model="questionList">
            <el-checkbox><el-input v-model="ques.options.option1"></el-input></el-checkbox>
            <el-checkbox><el-input v-model="ques.options.option2"></el-input></el-checkbox>
            <el-checkbox><el-input v-model="ques.options.option3"></el-input></el-checkbox>
            <el-checkbox><el-input v-model="ques.options.option4"></el-input></el-checkbox>
          </el-checkbox-group>
        </div>
        <el-input 
        v-else 
        v-model="ques.answer" 
        type="textarea"
        placeholder="回答"
        style="width: 500px; float: left; margin:10px 0">
        </el-input>
      </el-form-item>
      <el-divider />
    </el-form>
    <div style="padding-bottom: 20px" v-if="Listempty">
      <el-button type="success" @click="submitpaper()">發放問卷 !</el-button>
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
          type: 0, // 選擇
          text: '',
          options: [
            {
              option1: '',
              option2: '',
              option3: '',
              option4: ''
            }
          ]
        },
        {
          type: 1, // 填充
          text: '',
          answer: ''
        },   
        {
          type: 0,
          text: '',
          options: [
            {
              option1: '',
              option2: '',
              option3: '',
              option4: ''
            }
          ]
        },
        {
          type: 1,
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
      if(type === 0) {
        const ques = {
          type: 0, // 選擇
          text: '',
          options: [
            {
              option1: '',
              option2: '',
              option3: '',
              option4: ''
            }
          ]
        }
        this.questionList.push(ques)
      }else {
        const ques = {
          type: 1,
          text: '',
          answer: ''
        }
        this.questionList.push(ques)
      }
    },
    delQues(index) {
      this.questionList.splice(index, 1)
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
  float: left;
}

.el-checkbox {
  display: block;
  margin: 10px;
}

.el-checkbox:last-of-type {
  margin: 0;
}
</style>
