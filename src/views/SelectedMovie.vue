<template>
  <div>
    <div>
      <h1>{{title}}</h1>
      <h3>{{year}}</h3>
    </div>
    <div v-for="rating in criticRatings" :key="rating.source">
      <span>{{rating.Source}}</span>
      <span>{{rating.Value}}</span>
    </div>
    <div>
      <span>{{userRating}}</span>
    </div>
    <div v-for="genre in genres" :key="genre">
      <span>{{genre}}</span>
    </div>
    <div>
      <span>{{director}}</span>
      <span>{{actors}}</span>
      <p>{{plot}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectedMovie",
  props: ["id"],
  data() {
    return {
      title: '',
      year: '',
      criticRatings: [],
      userRating: '',
      genres: [],
      director: '',
      plot: '',
      actors: ''
    }
  },
  mounted() {
    fetch(`http://localhost:3000/movies/${this.id}`)
        .then(resp => resp.json())
        .then(data => {
          this.title = data.title
          this.year = data.year
          this.criticRatings = data.criticRatings
          this.userRating = data.userRating
          this.genres = data.genre.split(",");
          this.director = data.director
          this.plot = data.plot
          this.actors = data.actors
        })
  }
}
</script>

