<template>
  <Navbar/>
  <div v-if="movies.length > 0" class="relative">
      <SingleMovie v-for="(movie, i) in movies" :key="movie.id" :movie="movie" :index="i"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar';
import SingleMovie from "@/components/SingleMovie";
export default {
  name: 'Home',
  components: {
    Navbar,
    SingleMovie
  },
  data () {
    return {
      movies: []
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
