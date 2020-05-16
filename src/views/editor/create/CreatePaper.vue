<template>
  <el-dialog
          title="新增问卷"
          :visible="createPaperVisible"
          :before-close="handleClose"
          @close="close()"
          width="30%"
  >
    <div class="questionnaire-name">
      问卷名称：
      <el-input v-model="input1">
      </el-input>
    </div>
    <div class="questonnaire-explain">
      问卷说明：
      <el-input type="textarea" 
        :autosize="{ minRows: 2, maxRows: 4}" 
        v-model="description">
      </el-input>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="set_createPaperVisible(false)">取 消</el-button>
      <el-button type="success" @click="createPaper()">确 定</el-button>
    </span>

  </el-dialog>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex'

  export default {
    name: 'CreatePaper',
    computed: {
      ...mapGetters([
        'createPaperVisible'
      ])
    },
    data(){
      return {
        input1: "",
        description: "",
        textarea: "",
        dialogVisible: false
      }
    },
    methods: {
      ...mapMutations([
        'set_createPaperVisible'
      ]),
      createPaper() {
        if(this.$route.path !== '/editor/create') {
          this.$router.push('/editor/create')
        }
        this.set_createPaperVisible(false)
      },
      handleClose(done) {
        this.$confirm("确认关闭?").then(_ =>{
          done();
          _;
        })
                .catch(_ =>{_})
      },
      close() {
        // console.log(close)
        this.input1="";
        this.description="";
        this.set_createPaperVisible(false)
      }
    }
  }
</script>

<style>
.questonnaire-explain {
  margin-top: 30px;
}
</style>
