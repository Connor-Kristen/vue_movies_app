<template>
  <carousel v-if="movies.length > 0" >
      <SingleMovie @deleteMovie="deleteMovie" ref="test" v-for="(movie, i) in movies" :key="movie.id" :movie="movie" :index="i"/>
  </carousel>
</template>

<script>
// @ is an alias to /src

import Carousel from "@/components/Carousel";
import SingleMovie from "@/components/SingleMovie";
export default {
  name: 'Home',
  components: {
    Carousel,
    SingleMovie
  },
  data () {
    return {
      movies: []
    }
  },
  mounted () {
    fetch(" http://localhost:3000/movies")
    .then(res => res.json())
    .then(data => this.movies = data)
    .catch(console.log)
  },
  methods: {
    deleteMovie(id) {
      this.movies = this.movies.filter(movie => movie.id !== id);
      this.$router.push({ name: "Home"})
    }
  }
}
</script>
