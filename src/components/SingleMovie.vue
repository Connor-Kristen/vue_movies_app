<template>
  <div class="movie-card bg-gray-700 mx-0.5 w-52">
    <div class=" w-52 h-80">
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
    </div>
  </div>
</template>

<script>
import {projectFirestore} from "@/firebase/config";
import {useRouter} from "vue-router";

export default {
  name: "SingleMovie",
  props: ["movie"],
  setup(props) {
    const router = useRouter()
    const deleteMovie = async () => {
      await projectFirestore.collection('movies')
          .doc(props.movie.id)
          .delete()
      await router.go(0)
    }

    return { deleteMovie }
  }
}

</script>
