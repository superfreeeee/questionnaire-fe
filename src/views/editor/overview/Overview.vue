<template>
  <el-container class='overview'>
    <el-header height = "30px">
      <span class="title" style="float: left; font-size: 30px; font-weight: 700">问卷列表</span>
      <div>
        <el-button type="primary" style="float: right" @click="createPaper()">创建问卷</el-button>
        
      </div>
    </el-header>
    <el-divider></el-divider>

    <el-main class="papers" style="display: flex">
      <el-col
        v-for="(paper, index) in papers"
        :key="index"
        :offset="index > 0 ? 1 : 0">
        <el-card class="paper_card">
          <div slot = "header" class = "clearfix">
            <span style = "fmargin-left: 2px">ID: {{ paper.paperId }}</span>
            <el-button style="float: right; padding: 3px 0" 
              type="text" 
              @click="checkPaperDetail(paper.paperId)">查看问卷</el-button>
          </div>
          <el-button type="text" style="float: left" @click="checkPaperDetail(paper.paperId)" icon="el-icon-edit">查看问卷</el-button>
          <el-button type="text" style="float: left" @click="handleShare()" icon="el-icon-share">发放链接</el-button>
          <el-button type="text" style="float: left" @click="dialogVisible = true" icon="el-icon-delete">删除问卷</el-button>
          <el-dialog
            title="提示"
             :visible.sync="dialogVisible"
             width="30%">
            <span>确认删除该问卷</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="danger" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
        </el-card>
      </el-col>
    </el-main>
  </el-container>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'Overview',
    data() {
      return {
        papers: [{
          paperId: 0,
        }],
        dialogVisible: false
      }
    },
    methods: {
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
