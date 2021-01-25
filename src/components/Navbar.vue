<template>
  <nav class="p-2 bg-green-300">
    <div class="flex justify-center">
      <h1 class="flex-grow">NOTFLIX</h1>
      <router-link :to="{name: 'Home'}">HOME</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>
