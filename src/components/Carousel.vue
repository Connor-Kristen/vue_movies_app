<template>
  <div class="relative h-72">
    <slot></slot>
    <button class="h-full block absolute w-9 bg-black bg-opacity-50 rounded-xl">
      <span class="material-icons text-4xl text-gray-400">chevron_left</span>
    </button>
    <button class="h-full block absolute w-9 bg-black bg-opacity-50 right-0 rounded-xl">
      <span class="material-icons text-4xl text-gray-400 ">chevron_right</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: ["imgs"],
  mounted () {
    console.log(this.imgs);
  }
}
</script>
