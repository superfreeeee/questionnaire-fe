<template>
  <div class='custormer'>Customer</div>
</template>

<script>
export default {
  name: 'Customer',
  mounted() {
    const paperId = this.$route.params.paperId
    console.log(paperId)
  }
}
</script>

<style>

</style>
