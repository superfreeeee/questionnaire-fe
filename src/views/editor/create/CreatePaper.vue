<template>
  <el-dialog 
    :visible="createPaperVisible"
    @cancel="cancel()"  
  >
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
      this.$router.push('/editor/create')
      this.set_createPaperVisible(false)
    },
    cancel() {
      this.set_createPaperVisible(false)
    }
  }
}
</script>

<style>

</style>
