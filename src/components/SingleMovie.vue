<template>
  <div class="movie-card bg-gray-700 mx-0.5 w-48">
    <div class=" w-48 h-72">
      <router-link :to="{name: 'SelectedMovie', params: {id: movie.id}}">
        <img ref="poster" :src="movie.poster" :alt="'poster for '+movie.title" class="poster w-full h-full object-cover">
      </router-link>
    </div>
    <div class="text-gray-300 text-xs overflow-ellipsis h-8 p-1">{{movie.title}}</div>
    <div class="p-1 flex justify-evenly items-center mt-0.5">
      <router-link :to="{name: 'EditMovie', params: {id: movie.id}}" class="flex">
        <span class="material-icons">create</span>
      </router-link>
      <span @click="deleteMovie" class="material-icons">delete_outline</span>
      <span class="material-icons">done</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleMovie",
  props: ["movie"],
  methods: {
    deleteMovie() {
      fetch(`http://localhost:3000/movies/${this.movie.id}`,
          {method: "delete"})
          .then(() => {
            this.$emit("deleteMovie", this.movie.id)
            this.$router.go(0);
      })
    }
  }
}
</script>
