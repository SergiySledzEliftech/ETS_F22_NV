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
import { Component, Prop, Vue } from 'nuxt-property-decorator';

export default @Component({
  components: {}
})

class CarouselItem extends Vue {
  @Prop() slide
  @Prop() currentSlide
  @Prop() index
  @Prop() direction

  get transitionEffect () {
    return this.direction === 'right' ? 'slide-out' : 'slide-in';
  }
}
</script>

<style lang="scss" scoped>
.carousel-item {
  @include responsive-value('width', 610, 500, 1310);
  border-radius: 10px;
  @media only screen and (max-width: $bp_tablet + px) {
    width: 100%;
    height: 100%;
  }
  img{
    width: 100%;
    @include responsive-value('min-height', 500, 300, 1310);
    @media only screen and (max-width: $bp_tablet + px) {
      min-height: 0;
      height: 100%;
    }
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
