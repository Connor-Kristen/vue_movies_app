<template>
  <teleport to="#navbar">
    <div class="nav bg-black bg-opacity-40 overflow-y-hidden"
         :class="{expand: navExpand, collapse: !navExpand}">
      <div class="max-w-4xl mx-auto p-2 flex flex-col sm:flex-row sm:justify-between">
        <div class="flex items-center justify-center">
          <div class="flex-grow flex items-center">
            <span class="material-icons text-gray-300">movie</span>
            <h1 class="text-green-300 text-lg inline-block">NOTFLIX</h1>
          </div>
          <div ref="barContainer" class="w-9 h-7 inline-block self-end sm:hidden bar-container" @click="expandNavBar">
            <span ref="bar" class="bar "></span>
          </div>
        </div>
        <div class="flex mx-2 mt-6 flex-col sm:flex-row sm:mt-0 sm:w-44 sm:justify-between">
          <router-link :to="{name: 'Home'}" class="flex text-sm text-gray-500 items-center">
            <span class="material-icons text-base mr-0.5">home</span>
            HOME
          </router-link>
          <router-link :to="{name: 'AddMovie'}" class="flex text-sm text-gray-500 items-center">
            <span class="material-icons text-base d mr-0.5">add_circle</span>
            ADD MOVIE
          </router-link>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>

export default {
  name: "Navbar",
  components: {

  },
  data() {
    return {
      navExpand: false
    }
  },
  methods: {
    expandNavBar () {
      this.navExpand = !this.navExpand;
      this.$refs.barContainer.classList.toggle("active");
      this.$refs.bar.classList.toggle("bar-active");
    }
  }
}
</script>
