<template>
  <el-dialog
          title="提示"
          :visible="createPaperVisible"
          :before-close="handleClose"
          @close="close()"
          width="30%"
  >
    <span>创建一个新的问卷</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="set_createPaperVisible(false)">取 消</el-button>
      <el-button type="primary" @click="createPaper()">确 定</el-button>
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
        this.set_createPaperVisible(false)
      }
    }
  }
</script>

<style>

</style>
