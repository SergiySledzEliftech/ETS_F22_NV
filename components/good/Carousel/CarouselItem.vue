<template>
  <transition name="fade">
    <div
      v-show="currentSlide === index"
      class="carousel-item"
    >
      <img :src="slide" alt="">
    </div>
  </transition>
</template>

<script>
import { Component, Prop, Vue } from 'nuxt-property-decorator'

export default @Component({
  components: {}
})

class CarouselItem extends Vue {
  @Prop() slide
  @Prop() currentSlide
  @Prop() index
  @Prop() direction

  get transitionEffect () {
    return this.direction === 'right' ? 'slide-out' : 'slide-in'
  }
}
</script>

<style lang="scss" scoped>
.carousel-item {
  width: 100%;
  img{
    max-width: 610px;
    height: 100%;
    aspect-ratio: 610 / 400;
  }
}
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}
.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(100%);
}
.slide-out-enter-from {
  transform: translateX(100%);
}
.slide-out-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
