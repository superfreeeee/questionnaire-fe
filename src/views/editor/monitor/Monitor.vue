<template>
  <div class='monitor'>
    <el-container>
      <el-header height='30px'>
        <div class="title" style="float: left; font-size: 30px; font-weight: 700">统计&分析 -- paperId:{{paperId}}</div>

      </el-header>
      <el-divider></el-divider>
      <el-main>
        <div class='analyzeTables' :model="monitorPaper">
          <div
          v-for="(question) in monitorPaper.questionStatisticList"
          :key="question.id"
          >

            <h1 class="qusetionTitle" style="font-size: 20px; font-weight: 700">第{{question.id}}题--{{question.title}}</h1>
            <el-table v-if="question.type === 1 || question.type == 2" :data="question.options" border stripe  style="width:100%; margin-bottom: 30px">
              <el-table-column prop="id" label="选项" sortable ></el-table-column>
              <el-table-column prop="content" label="选项描述">
                <template slot-scope="scope">
                  <span style="center">{{scope.row[scope.column.property]}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="selectNum" label="选择人数" sortable ></el-table-column>
              <el-table-column prop="percent" label="比例">
              
              </el-table-column>
            </el-table>

          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'Monitor',
    data() {
      return {
        paperId: -1,
        totalNum: 0
      }
    },
    mounted() {
      this.paperId = this.$route.params.paperId
      this.getFullPaperStatistic(this.paperId)
    },
    computed:{
      ...mapGetters([
        'monitorPaper'
      ])
    },
    methods: {
      ...mapActions([
        'getFullPaperStatistic'
      ])
    }
  }
</script>

<style>
.questionTitle {
  margin-left: 5px;
}
</style>
