<template>
  <div class="relative h-96">
    <Flickity ref="flickity" :options="options">
      <slot></slot>
    </Flickity>
    <button @click="previous" class="prevNextBtn prevBtn">
      <span class="material-icons flex justify-center arrow text-7xl text-gray-200">chevron_left</span>
    </button>
    <button @click="next" class="prevNextBtn right-0 nextBtn">
      <span class="material-icons arrow flex justify-center text-7xl text-gray-200 ">chevron_right</span>
    </button>
  </div>
</template>

<script>
import Flickity from 'vue-flickity';
export default {
  name: "Carousel",
  components: {Flickity},
  data () {
    return {
      options: {
        wrapAround: true,
        prevNextButtons: false,
        imagesLoaded: true
      }
    }
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    },
    test() {
      console.log('element clicked')
    }
  },
  updated() {
    console.log(this.$refs.flickity.flickity().reposition());
  }
}
</script>
