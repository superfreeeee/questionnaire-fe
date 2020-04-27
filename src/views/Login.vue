<template>
  <div class='login'>
    <el-card class="board" v-if="currentPage === 'login'">
      <div slot="header">
        <span class="title">登入</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="goto('register')">
          新用户？前往注册
        </el-button>
      </div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item>
          <el-button style="width: 80%" type="primary" @click="submitLogin">登入</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="board" v-if="currentPage === 'register'">
      <div slot="header">
        <span class="title">注册</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="goto('login')">
          已注册？前往登入
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      currentPage: 'login',
      form: {}
    }
  },
  mounted() {
    // console.log('mounted')
    document.onkeypress = e => {
      // console.log(e)
      if(e.charCode === 13) {
        this.submitLogin()
      }
    }
  },
  destroyed() {
    // console.log('destroyed')
    document.onkeypress = null
  },
  methods: {
    goto(page) {
      this.currentPage = page
    },
    submitLogin() {
      console.log(this.form)
      this.$router.push('editor')
    }
  }
}
</script>

<style scoped>
.board {
  width: 40vw;
  margin: 10vh auto 0;
  text-align: left;
}

.title {
  font-size: 20px;
  margin-left: 10%;
}
</style>
