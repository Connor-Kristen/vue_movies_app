<template>
  <Navbar/>
  <router-view/>
  <div id="main-bg">
    <img src="./assets/img/popcorn.jpg" alt="" class="w-full h-full object-cover opacity-20">
  </div>
  <Footer/>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>