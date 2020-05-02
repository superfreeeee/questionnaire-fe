<template>
  <div class='custormer'>
    <h1>Customer</h1>
    <h2>paperId: {{ paperId }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Customer',
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
