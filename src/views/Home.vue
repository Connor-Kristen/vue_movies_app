<template>
  <div class="mt-3 text-gray-200 my-10 mt-18">
    <h2 class="text-left">ALL MOVIES</h2>
    <carousel v-if="movies.length > 0">
      <SingleMovie @deleteMovie="deleteMovie" ref="test" v-for="movie in movies" :key="movie.id" :movie="movie"/>
    </carousel>
  </div>
  <div class=" text-gray-200 my-10">
    <h2 class="text-left">ANIMATION</h2>
    <carousel v-if="movies.length > 0" >
      <SingleMovie @deleteMovie="deleteMovie" ref="test" v-for="movie in filteredMovies.Animation" :key="movie.id" :movie="movie"/>
    </carousel>
  </div>
  <div class=" text-gray-200 my-10">
    <h2>COMEDY</h2>
    <carousel v-if="movies.length > 0">
      <SingleMovie @deleteMovie="deleteMovie" ref="test" v-for="movie in filteredMovies.Comedy" :key="movie.id" :movie="movie"/>
    </carousel>
  </div>
  <div class=" text-gray-200 my-10">
    <h2>SCI-FI</h2>
    <carousel v-if="movies.length > 0">
      <SingleMovie @deleteMovie="deleteMovie" ref="test" v-for="movie in filteredMovies.SciFi" :key="movie.id" :movie="movie"/>
    </carousel>
  </div>
  <div class=" text-gray-200 my-10">
    <h2>FANTASY</h2>
    <carousel v-if="movies.length > 0">
      <SingleMovie @deleteMovie="deleteMovie" ref="test" v-for="movie in filteredMovies.Fantasy" :key="movie.id" :movie="movie"/>
    </carousel>
  </div>
  <div class=" text-gray-200 mt-10 mb-14">
    <h2>HORROR</h2>
    <carousel v-if="movies.length > 0">
      <SingleMovie @deleteMovie="deleteMovie" ref="test" v-for="movie in filteredMovies.Horror" :key="movie.id" :movie="movie"/>
    </carousel>
  </div>
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
      movies: [],

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
    }
  },
  computed: {
    filteredMovies() {
      let genres = {
        SciFi:[],
        Animation:[],
        Comedy:[],
        Fantasy:[],
        Horror:[],
      }
      for (const movie of this.movies) {
        if (typeof movie.genre !== 'object') {
          movie.genre = movie.genre.split(",").map(genre => genre.trim());
          switch (true) {
            case movie.genre.includes("Animation"):
              genres.Animation = this.movies.filter(movie => movie.genre.includes("Animation"));
              break;
            case movie.genre.includes("Sci-Fi") && !movie.genre.includes("Horror"):
              genres.SciFi = this.movies.filter(movie => movie.genre.includes("Sci-Fi"));
              break;
            case movie.genre.includes("Comedy"):
              genres.Comedy = this.movies.filter(movie => movie.genre.includes("Comedy"));
              break;
            case movie.genre.includes("Fantasy"):
              genres.Fantasy = this.movies.filter(movie => movie.genre.includes("Fantasy"));
              break;
            case movie.genre.includes("Horror"):
              genres.Horror = this.movies.filter(movie => movie.genre.includes("Horror"));
              break;
          }
        }
      }
      return genres
    }
  }
}
</script>
