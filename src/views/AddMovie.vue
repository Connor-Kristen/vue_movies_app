<template>
 <Navbar/>
  <form @submit.prevent="getMovie">
    <label>TITLE</label>
    <input type="text" v-model="title">
    <label>YEAR</label>
    <input type="number" v-model="year">
    <button>ADD MOVIE</button>
  </form>
  <div v-if="error === ''" class="bg-red-400">{{error}}</div>
  {{movieFound}}
</template>

<script>
import Navbar from "@/components/Navbar";
import {ref} from "@vue/reactivity";

export default {
  name: "AddMovie",
  components: {
    Navbar
  },
  setup () {
    const title = ref("")
    const year = ref("")
    let movieFound = ref([])
    let error = ref('');
    const getMovie = async () => {
      try {
        let movies = await fetch(
            `http://www.omdbapi.com/?apikey=${process.env.VUE_APP_OMDB_KEY}&s=${title.value}&y=${year.value}`)
        if (!movies.ok) throw new Error("could not find that movie");
        movieFound.value = await movies.json()
      } catch (e) {
        error.value = e;
      }
    }

    return {title, year, getMovie, movieFound, error}
  }
}
</script>
