import { ref } from 'vue'
import {projectFirestore} from "@/firebase/config";

const getMovie = (id) => {
    const movie = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            let resp = await projectFirestore.collection('movies').doc(id).get()
            movie.value = { ...resp.data(), id: resp.id }
        }
        catch (err) {
            error.value = err.message
        }
    }

    return { movie, error, load}
}

export default getMovie