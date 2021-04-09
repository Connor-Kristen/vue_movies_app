<template>
  <div class="w-full flex justify-center">
    <div class="flex flex-col items-center justify-center max-w-lg w-full h-full sm:mt-20">
      <form @submit.prevent="getMovie" class="flex flex-col justify-start bg-blue-400 p-2 w-full h-full">
        <fieldset>
          <label class="flex flex-col items-start">TITLE
            <input class="w-full px-1" type="text" v-model="title">
          </label>
          <label class="flex flex-col my-3 items-start">YEAR
            <input class="w-full px-1" type="number" v-model="year">
          </label>
          <label class="flex flex-col items-start">RATE
            <input class="w-full px-1" type="number" v-model="rating">
          </label>
        </fieldset>
        <div v-if="error !== ''" class="bg-red-400 p-1 text-3xl my-5">{{error}}</div>
        <button class="btn my-3">ADD MOVIE</button>
      </form>
    </div>
  </div>
</template>

<script>
import {ref} from "vue"
import {useRouter} from "vue-router"
import {projectFirestore} from "@/firebase/config";
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
        if (movieFound.value.Error === "Movie not found!") throw new Error("Movie not found");
        const movie = {
          title: movieFound.value.Title,
          movieYear: movieFound.value.Year,
          criticRatings: movieFound.value.Ratings,
          userRating: parseInt(rating.value),
          poster: movieFound.value.Poster,
          genre: movieFound.value.Genre,
          director: movieFound.value.Director,
          plot: movieFound.value.Plot,
          actors: movieFound.value.Actors
        }
        // eslint-disable-next-line no-unused-vars
        const resp = await projectFirestore.collection('movies').add(movie)

        await router.push({name: "Home"})
      } catch (e) {
        const errorString = e.toString()
        error.value = errorString.substring(errorString.indexOf(":")+1);}
    }

    return {title, year, getMovie, movieFound, error, rating}
  }
}
</script>

