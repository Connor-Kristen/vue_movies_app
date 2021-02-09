<template>
  <form v-if="genres.length > 0">
    <label for="userRating">Current User Rating</label>
    <input id="userRating" type="number" v-model="userRating">
    <fieldset class="flex flex-col w-36 m-auto">
      <label v-for="genre in genreList" :key="genre" class="text-right">
        {{genre}}
        <input type="checkbox" v-model="genres" :value="genre" :checked="genres.includes(genre)">
      </label>
    </fieldset>
    <textarea id="plot" v-model="plot"></textarea>
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
        'Family']
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
    }
  }
}
</script>
