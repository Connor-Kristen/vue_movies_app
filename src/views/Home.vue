<template>
  <Navbar/>
  <carousel v-if="movies.length > 0" />
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar';
import Carousel from "@/components/Carousel";
export default {
  name: 'Home',
  components: {
    Navbar,
    Carousel
  },
  data () {
    return {
      movies: [0]
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
