<template>
  <el-dialog 
    :visible="createPaperVisible"
    @close="close()"
  >
    <h1>Create Paper</h1>
    <el-button @click="createPaper()">create</el-button>
  </el-dialog>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'CreatePaper',
  computed: {
    ...mapGetters([
      'createPaperVisible'
    ])
  },
  methods: {
    ...mapMutations([
      'set_createPaperVisible'
    ]),
    createPaper() {
      if(this.$route.path !== '/editor/create') {
        this.$router.push('/editor/create')
      }
      this.set_createPaperVisible(false)
    },
    close() {
      // console.log(close)
      this.set_createPaperVisible(false)
    }
  }
}
</script>

<style>

</style>
