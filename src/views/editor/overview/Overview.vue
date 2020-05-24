<template>
  <el-container class='overview'>
    <el-header height = "30px">
      <span class="title" style="float: left; font-size: 30px; font-weight: 700">问卷列表</span>
      <div>
        <el-button type="primary" style="float: right" @click="createPaper()">创建问卷</el-button>
        
      </div>
    </el-header>
    <el-divider></el-divider>

    <el-main class="papers">
      <div
        v-for="paper in allPapers"
        :key="paper.paperInfo.id"
        style="display:block"
        >
        <el-card class="paper_card" style="margin-bottom:30px">
          <div slot = "header" class = "clearfix">
            <span style = "fmargin-left: 2px">ID: {{ paper.paperInfo.id }}</span>
            <label style="float: right">填写总数：</label>
          </div>
          <el-button type="text" style="float: left" @click="checkPaperDetail(paper.paperInfo.id)" icon="el-icon-edit">查看问卷</el-button>
          <el-button type="text" style="float: left" @click="handleShare()" icon="el-icon-share">发放链接</el-button>
          <el-button type="text" style="float: left" @click="dialogVisible = true" icon="el-icon-delete">删除问卷</el-button>
          <el-dialog
            title="提示"
             :visible.sync="dialogVisible"
             width="30%">
            <span>确认删除该问卷</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="danger" @click="handleDelete(paper.paperInfo.id)">确 定</el-button>
            </span>
          </el-dialog>
        </el-card>
      </div>
    </el-main>

  </el-container>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    name: 'Overview',
    data() {
      return {
        dialogVisible: false,
        userId: -1
      }
    },
    mounted() {
      this.userId=this.$route.userId,
      this.getAllPapers(this.userId)
    },
    computed:{
      ...mapGetters([
        'allPapers'
      ])
    },
    methods: {
      ...mapActions([
        'getAllPapers'
      ]),
      ...mapMutations([
        'set_createPaperVisible'
      ]),
      createPaper() {
        console.log(this.set_createPaperVisible)
        this.set_createPaperVisible(true)
      },
      checkPaperDetail(paperId) {
        console.log(paperId)
        this.$router.push({ name: 'monitor', params: { paperId }})
      },
      handleShare(){
        this.$router.push({ name: 'paperlink'})
      },
      handleDelete(){
        
      }
    }
  }
</script>

<style>

.paper_card{
  width:100%;
}
</style>
