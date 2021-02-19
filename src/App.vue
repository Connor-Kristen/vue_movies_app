<template>
  <Navbar/>
  <router-view/>
  <div id="main-bg">
    <img src="./assets/img/popcorn.jpg" alt="" class="w-full h-full object-cover opacity-20">
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
export default {
  components: {
    Navbar
  }
}
</script>