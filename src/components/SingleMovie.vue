<template>
<!--    <img ref="poster" :src="movie.poster" :alt="'poster for '+movie.title" class="poster inline-block w-48 h-72 object-cover absolute">-->
  <img ref="poster" src="../assets/logo.png" alt="" class="poster inline-block w-48 h-full object-cover absolute">
</template>

<script>
export default {
  name: "SingleMovie",
  props: ["movie", "index"],
  mounted () {
    let left = this.index * this.$refs.poster.offsetWidth
    if (this.index > 0) left += (5 * this.index)
    this.$refs.poster.style.left = left + "px"
  }
}
</script>
