<template>
  <div class="monitor">
    <el-container>
      <el-header height="30px">
        <div
          class="title"
          style="float: left; font-size: 30px; font-weight: 700"
        >
          统计&分析 -- {{ monitorPaper.title }}
        </div>
      </el-header>
      <el-divider></el-divider>
      <el-main>
        <div class="analyzeTables" :model="monitorPaper">
          <div style="text-align: left">
            <el-button v-if="monitorPaper.endTime == null && monitorPaper.status === 'START'" type="danger" @click="endCollection()"
              >结束收集</el-button
            >
          </div>
          <div
            v-for="(question, index) in monitorPaper.questionStatistics"
            :key="question.id"
          >
            <h1 class="qusetionTitle" style="font-size: 20px; font-weight: 700">
              第{{ index + 1 }}题--{{ question.title }}
            </h1>
            <el-tag style="color:rgb(37,124,115);margin-bottom:10px;float:left"
              >填写总数：{{ question.filledInNum }}</el-tag
            >
            <el-table
              v-if="question.type === 1 || question.type == 2"
              :data="question.optionStatistics"
              border
              stripe
              style="width:100%; margin-bottom: 10px"
            >
              <el-table-column
                prop="sequence"
                label="选项"
                sortable
              ></el-table-column>
              <el-table-column prop="content" label="选项描述">
                <template slot-scope="scope">
                  <span style="center">{{
                    scope.row[scope.column.property]
                  }}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="selectedNum"
                label="选择人数"
                sortable
              ></el-table-column>
              <el-table-column prop="percent" label="比例"> </el-table-column>
            </el-table>

            <el-table
              v-if="question.type === 3"
              :data="question.answerVOList"
              border
              stripe
              style="width: 100%;margin-bottom: 40px"
            >
              <el-table-column
                label="序号"
                type="index"
                width="100"
              ></el-table-column>
              <el-table-column
                label="答案文本"
                prop="answerContent"
              ></el-table-column>
            </el-table>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Monitor',
  data() {
    return {}
  },
  mounted() {
    const paperId = this.$route.params.paperId
    this.getFullPaperStatistic(paperId).then((res) => {
      if (!res) {
        this.$message.error('问卷统计加载失败，请询问管理员')
      }
    })
  },
  computed: {
    ...mapGetters(['monitorPaper'])
  },
  methods: {
    ...mapActions(['getFullPaperStatistic', 'terminateCollection']),
    endCollection() {
      this.$confirm('确定结束此问卷收集？', '结束收集', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.terminateCollection(this.monitorPaper).then(res => {
            console.log(res)
          })
          this.$message({
            type: 'warning',
            message: '问卷收集结束！'
          })
        })
        .catch(() => {})
    }
  }
}
</script>

<style>
.questionTitle {
  margin-left: 5px;
  display: inline-block;
}
</style>
