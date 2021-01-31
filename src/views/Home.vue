<template>
  <Navbar/>
  <carousel v-if="movies.length > 0" >
    <SingleMovie ref="test" v-for="(movie, i) in movies" :key="movie.id" :movie="movie" :index="i"/>
  </carousel>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar';
import Carousel from "@/components/Carousel";
import SingleMovie from "@/components/SingleMovie";
export default {
  name: 'Home',
  components: {
    Navbar,
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
  }
}
</script>
