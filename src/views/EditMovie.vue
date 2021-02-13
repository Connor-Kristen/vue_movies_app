<template>
  <form v-if="genres.length > 0" class="flex flex-col items-center rounded-xl relative p-1.5 bg-blue-400 mx-1.5 mb-10 mt-20">
    <label for="userRating">Current User Rating</label>
    <input id="userRating" type="number" v-model="userRating" class="p-1 w-44 mb-5 mt-2">
    <div class=" bg-white mt-5 mb-3 flex items-center flex-wrap w-full max-w-lg mx-1">
      <span v-for="genre in genres" :key="genre" class="p-1.5 border border-black m-0.5">{{genre}}</span>
    </div>
    <div class="relative max-w-lg w-full">
      <fieldset ref="select" :class="{'max-h-8': !expanded, 'max-h-96': expanded}"
                class="flex flex-col absolute items-end flex-wrap w-full rounded-lg bg-white overflow-hidden">

        <span class="text-center absolute inline-block w-full flex items-center justify-evenly text-lg h-8 bg-gray-600">
          Select Genre
          <span @click="expand" class="arrow material-icons absolute text-right w-full top-1 h-8 right-0">expand_more</span>
        </span>
        <label ref="checkbox" v-for="genre in genreList"
               :key="genre" class="p-1 genre-select">
          {{genre}}
          <input type="checkbox" v-model="genres" :value="genre" :checked="genres.includes(genre)">
        </label>
      </fieldset>
    </div>
    <textarea id="plot" v-model="plot" class="w-full h-40 max-w-2xl mb-5 mt-12 resize-none px-1"></textarea>
    <label for="plot" class="my-3">{{plot}}</label>
    <button @click.prevent="updateMovie" class="btn">Save Changes</button>
  </form>
</template>

<script>

export default {
  name: "EditMovie",
  props: ['id'],
  data() {
    return {
      userRating: '',
      genres: [],
      plot: '',
      genreList: ['Action',
        'Sci-Fi',
        'Adventure',
        'Animation',
        'Comedy',
        'Crime',
        'Drama',
        'Fantasy',
        'Historical',
        'Historical Fiction',
        'Horror',
        'Mystery',
        'Political',
        'Romance',
        'Thriller',
        'Western',
        'Slice of life',
        'Sports',
        'War',
        'Musical',
        'Documentary',
        'Family'],
      expanded: false,
    }
  },
  mounted() {
    fetch(`http://localhost:3000/movies/${this.id}`)
        .then(resp => resp.json())
        .then(data => {
          this.userRating = data.userRating
          this.genres = data.genre
              .split(",")
              .map(genre => genre.trim())
          this.plot = data.plot
        }).catch(console.log)
  },
  methods: {
    updateMovie() {
      const body = {
        genre: this.genres.join(", "),
        userRating: parseInt(this.userRating),
        plot: this.plot
      }
      fetch(`http://localhost:3000/movies/${this.id}`,
          {method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
          }
      ).then(() => {this.$router.push(`/movie/${this.id}`)})
    },
    expand() {
      this.expanded = !this.expanded
    }
  }
}
</script>
