<template>
  <div class='monitor'>
    <h1>Monitor</h1>
    <h2>paperId: {{ paperId }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Monitor',
  data() {
    return {
      paperId: -1
    }
  },
  mounted() {
    this.paperId = this.$route.params.paperId
  }
}
</script>

<style>

</style>
