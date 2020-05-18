<template>
  <div class='monitor'>
    <el-container>
      <el-header height='30px'>
        <span class="title" style="float: left; font-size: 30px; font-weight: 700">统计&分析 -- paperId:{{paperId}}</span>
        
      </el-header>
      <el-divider></el-divider>
      <el-main>
        <span class="title" style="font-size: 20px; font-weight: 700">第1题 -- 题目描述</span>
        <el-table :data="table" border stripe  style="width:80%">
          <el-table-column 
            prop="option"
            label="选项"
            width="350"></el-table-column>
          <el-table-column 
            prop="count"
            label="小计"
            width="100"></el-table-column>
          <el-table-column 
            prop="percent"
            label="比例">
            <el-progress :percentage="percent"></el-progress>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Monitor',
  data() {
    return {
      
      table:[{
        option:"选项一",
        count: 0,
        percent:50,
      },
      {
        option:"选项二",
        count: 0,
        percent:20,
      }
      ],
      paperId: -1
    }
  },
  mounted() {
    this.paperId = this.$route.params.paperId
  }
}
</script>

<style>
.title {
  margin: 5px;
}
</style>
