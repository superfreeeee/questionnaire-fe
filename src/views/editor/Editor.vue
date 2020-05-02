<template>
  <el-container class="editor">
    <el-header>Header</el-header>
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
import { mapMutations } from 'vuex';

export default {
  name: 'Editor',
  components: {
    CreatePaper
  },
  methods: {
    ...mapMutations([
      'set_createPaperVisible'
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
    }
  }
}
</script>

<style>
.editor {
  height: 100%;
}
</style>
