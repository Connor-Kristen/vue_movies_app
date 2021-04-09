<template>
  <div class="text-gray-300" v-if="movie !== null">
    <img :src="movie.poster" :alt="'poster for'+movie.poster" class="inline-block">
    <div>
      <h1>{{movie.title}}</h1>
      <h3>{{movie.year}}</h3>
    </div>
    <div>Critic Ratings</div>
    <div v-for="rating in criticRatings" :key="rating.source">
      <span>{{movie.rating.Source}}: </span>
      <span>{{movie.rating.Value}}</span>
    </div>
    <div>
      <span>User Rating: {{movie.userRating}}</span>
    </div>
    <div v-for="genre in genres" :key="genre">
      <span>{{movie.genre}}</span>
    </div>
    <div>
      <span>{{movie.director}}</span>
      <span>{{movie.actors}}</span>
      <p>{{movie.plot}}</p>
    </div>
  </div>
</template>

<script>
import getMovie from '@/composables/getMovie'
export default {
  name: "SelectedMovie",
  props: ["id"],
  setup(props) {
    const {error, movie, load} = getMovie(props.id)
    load()
    return {error, movie}

  }
}
</script>

