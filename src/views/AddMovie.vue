<template>
  <form @submit.prevent="getMovie">
    <label>TITLE</label>
    <input type="text" v-model="title">
    <label>YEAR</label>
    <input type="number" v-model="year">
    <label>RATE</label>
    <input type="number" v-model="rating">
    <button>ADD MOVIE</button>
  </form>
  <div v-if="error !== ''" class="bg-red-400">{{error}}</div>
</template>

<script>
import {ref} from "vue"
import {useRouter} from "vue-router"
export default {
  name: "AddMovie",
  setup () {
    const title = ref("")
    const year = ref("")
    let movieFound = ref([])
    let error = ref('')
    const rating = ref(null)
    const router = useRouter()
    const getMovie = async () => {
      try {
        let movies = await fetch(`http://www.omdbapi.com/?apikey=${process.env.VUE_APP_OMDB_KEY}&t=${title.value}&y=${year.value}`)
        if (!movies.ok) throw new Error("could not find that movie");
        movieFound.value = await movies.json()
          fetch(" http://localhost:3000/movies",
            {
              method: "POST",
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                title: movieFound.value.Title,
                movieYear: movieFound.value.Year,
                criticRatings: movieFound.value.Ratings,
                userRating: parseInt(rating.value),
                poster: movieFound.value.Poster,
                genre: movieFound.value.Genre,
                director: movieFound.value.Director,
                plot: movieFound.value.Plot,
                actors: movieFound.value.Actors
              })
            }).then(() => {router.push({name: "Home"})})
      } catch (e) {error.value = e;}
    }

    return {title, year, getMovie, movieFound, error, rating}
  }
}
</script>
