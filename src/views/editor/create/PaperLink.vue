<template>
  <div class="paperlink">
      <div class="paperlink-header">
        <span style="font-size: 25px">問卷發放</span>
      </div>
      <div class="paperlink-URL">
        <span style="display: block; margin-top: 20px">
            問卷鏈接 : 
        </span>
        <div>
            <span id="URL"> {{ paperURL }}</span>
        </div>
        <el-button 
        type="primary" 
        size="small" 
        style="margin-top: 10px" 
        @click="copyURL()"
        icon="el-icon-link">
        複製鏈接
        </el-button>
      </div>
      <el-divider />
      <div style="text-align: left; padding-left: 30px">
        <el-button 
        type="primary" size="small" 
        @click="browsePaper(paperURL)"
        icon="el-icon-view">
        預覽問卷
        </el-button>
      </div>
      <el-divider />
  </div>
</template>

<script>
export default {
  name: 'PaperLink',
  data() {
      return {
          paperId: -1,
          paperURL: `http://localhost:8080/customer/${this.$route.params.paperId}`,
          show: true,
      }
  },
  mounted() {
      this.paperId = this.$route.params.paperId
  },
  methods: {
      copyURL() {
          this.$message({
              message: "複製成功!",
              type: 'success'
          });
      },
      browsePaper(paperURL) {
          console.log(paperURL);
          window.open(paperURL);
      }
  }
}
</script>

<style>
.paperlink {
    height: 100%;
}

.paperlink-header {
    height: 70px;
    line-height: 70px;
    text-align: left;
    padding-left: 30px;
    border-bottom: 1px groove;
}

.paperlink-URL {
    padding-left: 30px;
    text-align: left;
}
</style>