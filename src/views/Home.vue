<template>
  <Navbar/>
  <carousel v-if="movies.length > 0">
      <SingleMovie v-for="(movie, i) in 10" :key="movie.id" :movie="movie" :index="i"/>
  </carousel>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar';
import SingleMovie from "@/components/SingleMovie";
import Carousel from "@/components/Carousel";
export default {
  name: 'Home',
  components: {
    Navbar,
    SingleMovie,
    Carousel
  },
  data () {
    return {
      movies: [0]
    }
  },
  mounted () {
   return fetch(" http://localhost:3000/movies")
    .then(res => res.json())
    .then(data => this.movies = data)
    .catch(console.log)
  }
}
</script>
