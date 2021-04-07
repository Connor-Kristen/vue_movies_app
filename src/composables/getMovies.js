import { ref } from 'vue';
import { projectFirestore } from "@/firebase/config";

const getMovies = () => {
    const movies = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const resp = await projectFirestore.collection('movies').get()
            movies.value = resp.docs.map(doc => {
                return {...doc.data(), id: doc.id}
            })
        }
        catch (err) {
            error.value = err.message
        }
    }

    return { movies, error, load}
}

export default getMovies