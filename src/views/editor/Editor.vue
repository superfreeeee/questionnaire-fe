<template>
  <el-container class="editor">
    <el-header>Header</el-header>
    <el-container style="height: 100%">
      <el-aside width="200px">
        <el-menu router>
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
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Editor',
}
</script>

<style>
.editor {
  height: 100%;
}
</style>
