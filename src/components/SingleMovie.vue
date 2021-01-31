<template>
  <div class=" w-48 h-72 mx-0.5">
    <img ref="poster" :src="movie.poster" :alt="'poster for '+movie.title" class="poster w-full h-full object-cover">
    <div>
    <span class="material-icons text-lg text-white w-5 h-5">create</span>
    <span class="material-icons">delete_outline</span>
    <span class="material-icons">check_circle</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleMovie",
  props: ["movie", "index"],
  methods: {

  }
}
</script>
