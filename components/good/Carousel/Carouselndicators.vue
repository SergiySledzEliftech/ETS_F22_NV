<template>
  <div class="carousel__indicators">
    <button
      v-for="(indicator, index) in indicators"
      :key="index"
      class="carousel__indicators-item"
      :class="{ active: currentSlide - firstIndicatorIndex === index }"
      @click="$emit('switch', index)"
    >
      <img :src="indicator" alt="">
    </button>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

export default @Component({
  name: 'CarouselIndicators',
  props: [
    'indicators', 'currentSlide', 'firstIndicatorIndex'
  ],
  components: {}
})
class CarouselIndicators extends Vue {
}
</script>
<style lang="scss" scoped>
.carousel__indicators{
  margin-top: 20px;
  display: flex;
  gap: 13px;
  .carousel__indicators-item > img{
    max-width: 150px;
    height: 110px;
    border-radius: 10px;
    opacity: 1;
    transition: all 0.25s linear;
    &:hover{
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      transition: all 0.25s linear;
      cursor: pointer;
    }
    &:active{
      opacity: 0.7;
      transition: all 0.25s linear;
    }
  }
  .active{
    opacity: 0.7;
    transition: all 0.25s linear;
  }
}
</style>
