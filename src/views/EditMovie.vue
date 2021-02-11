<template>
  <form v-if="genres.length > 0" class="flex flex-col items-center relative">
    <label for="userRating">Current User Rating</label>
    <input id="userRating" type="number" v-model="userRating" class="p-1 w-44 mb-10 mt-2">
    <fieldset ref="select" :class="{'h-8': !expanded}"
              class="flex flex-col absolute items-center w-44 px-1 rounded-sm bg-white overflow-y-hidden top-20">

      <span class="text-center inline-block w-full text-lg h-8 pt-0.5">
        Select Genre
        <span @click="expand" class="material-icons absolute top-1 right-0">expand_more</span>
      </span>
      <label v-for="genre in genreList"
             :key="genre" class="text-right w-full p-1 genre-select">
        {{genre}}
        <input ref="checkbox" type="checkbox" v-model="genres" :value="genre" :checked="genres.includes(genre)">
      </label>
    </fieldset>
    <textarea id="plot" v-model="plot" class="w-80 h-32 my-5"></textarea>
    <label for="plot">{{plot}}</label>
    <button @click.prevent="updateMovie">Save Changes</button>
  </form>
  {{genres.join(", ")}}
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
      isChecked: false
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
        })
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
