<template>
<!--    <img ref="poster" :src="movie.poster" :alt="'poster for '+movie.title" class="poster inline-block w-48 h-72 object-cover absolute">-->
  <img ref="poster" :style="'background:'+bgColor()" src="../assets/logo.png" alt="" class="poster inline-block w-48 h-full object-cover absolute">
</template>

<script>
export default {
  name: "SingleMovie",
  props: ["movie", "index"],
  mounted () {
    let left = (this.index * this.$refs.poster.offsetWidth) - (this.$refs.poster.offsetWidth / 3);
    if (this.index > 0) left += (5 * this.index)
    this.$refs.poster.style.left = left + "px"
  },
  methods: {
    bgColor () {
      let red = Math.ceil(Math.random() * 255)
      let green =Math.ceil(Math.random() * 255)
      let blue =Math.ceil(Math.random() * 255)
      return `rgb(${red}, ${green}, ${blue})`
    }
  }
}
</script>
