<template>
    <img ref="poster" :src="movie.poster" :alt="'poster for '+movie.title" class="poster inline-block w-44 h-72 object-cover absolute">
</template>

<script>
export default {
  name: "SingleMovie",
  props: ["movie", "index"],
  data() {
    return {
      left: 0
    }
  },
  mounted () {
    console.log(this.index);
  }
}
</script>
