<template>
  <el-container class="editor">
    <el-header style="text-align: right; font-size: 20px">
      <span>{{ userInfo.name }}</span>
      <el-divider direction="vertical"></el-divider>
      <el-button type="text" @click="logout()">登出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu @select="handleMenuSelect">
          <el-menu-item index="overview">
            <i class="el-icon-coin"></i>
            <span>问卷总览</span>
          </el-menu-item>
          <el-menu-item index="create">
            <i class="el-icon-plus"></i>
            <span>新建问卷</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
        <CreatePaper></CreatePaper>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CreatePaper from './create/CreatePaper'
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'Editor',
  components: {
    CreatePaper
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    ...mapMutations([
      'set_createPaperVisible',
      'set_loginState',
      'set_userInfo'
    ]),
    handleMenuSelect(index) {
      if(index === 'overview') {
        const route = this.$route.path
        if(route !== '/editor/overview') {
          this.$router.push({ name: index })
        }
      } else if(index === 'create') {
        this.set_createPaperVisible(true)
      }
    },
    logout() {
      // console.log('logout')
      this.set_loginState(false)
      this.set_userInfo({})
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.editor {
  height: 100%;
}
</style>
