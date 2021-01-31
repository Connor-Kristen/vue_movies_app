<template>
  <div class="relative h-72">
      <slot></slot>
    <button @click="moveLeft" class="btn h-full block absolute w-9 bg-black bg-opacity-50 rounded-r-xl">
      <span class="material-icons text-4xl text-gray-400">chevron_left</span>
    </button>
      <button @click="moveRight" class="btn h-full block absolute w-9 bg-black bg-opacity-50 right-0 rounded-l-xl">
        <span class="material-icons text-4xl text-gray-400 ">chevron_right</span>
      </button>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  methods: {
    moveRight() {
      const children =  Array.from(this.$el.children)
      for(const [i, el] of children.entries()) {
        if (!el.classList.contains("btn")) {
          let left = parseInt( el.style.left);
          left -= el.offsetWidth;
          el.style.left = left + "px";
          console.log(i);
          // if (parseInt( el.style.left) < -(el.offsetWidth * 2)) {
          //   let newLeft = (parseInt(this.$el.children[this.$el.children.length - 3].style.left))
          //       + (el.offsetWidth * i)
          //   // console.log(parseInt(this.$el.children[this.$el.children.length - 3].style.left));
          //   console.log(newLeft);
          //   el.style.opacity = 0
          //   el.style.left =  newLeft + "px";
          // } else  el.style.opacity = 1
        } else {
          el.disabled = true
          setTimeout(() => {el.disabled = false}, 600);
        }
      }
    },
    moveLeft() {
      for(let el of this.$el.children) {
        if (!el.classList.contains("btn")) {
          let left = parseInt( el.style.left);
          left += el.offsetWidth;
          el.style.left = left + "px";
        } else {
          el.disabled = true
          setTimeout(() => {el.disabled = false}, 600);
        }
      }
    }
  }
}
</script>
