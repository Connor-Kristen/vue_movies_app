<template>
  <nav class="nav bg-black bg-opacity-40 overflow-y-hidden"
       :class="{expand: navExpand, collapse: !navExpand}">
    <div class="max-w-4xl mx-auto p-2 flex flex-col">
      <div class="flex items-center justify-center">
        <div class="flex-grow flex items-center">
          <span class="material-icons text-gray-300">movie</span>
          <h1 class="text-green-300 text-lg inline-block">NOTFLIX</h1>
        </div>
        <div class="w-9 h-7 inline-block self-end bar-container" @click="expandNavBar">
          <span class="bar"></span>
        </div>
      </div>
      <div class="flex mx-2 mt-6 flex-col">
        <router-link :to="{name: 'Home'}" class="flex text-sm text-gray-500 items-center">
          <span class="material-icons text-base mr-0.5">home</span>
          HOME
        </router-link>
        <router-link :to="{name: 'Home'}" class="flex text-sm text-gray-500 items-center">
          <span class="material-icons text-base d mr-0.5">add_circle</span>
          ADD MOVIE
        </router-link>
      </div>
    </div>
  </nav>
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
    }
  }
}
</script>
