<template>
  <div class='overview'>
    <el-row>
      <el-col :span="24">
        <span class="title" style="float: left; font-size: 30px; font-weight: 700">问卷列表</span>
        <div>
          <el-button type="primary" style="text-align: right" @click="createPaper()">创建问卷</el-button>
          <el-divider></el-divider>
        </div>
      </el-col>
    </el-row>
    <div class="papers" style="display: flex">
      <div
              style="width: 200px; height: 200px; border: 1px black solid;"
              v-for="(paper, index) in papers"
              :key="index"
              @click="checkPaperDetail(paper.paperId)"
      >
        <h2>A paper</h2>
        <h3>paperId: {{ paper.paperId }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'Overview',
    data() {
      return {
        papers: [{
          paperId: 0,
        },{
          paperId: 1,
        },{
          paperId: 2,
        }]
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
      }
    }
  }
</script>

<style>

</style>
