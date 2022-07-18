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
import { Component, Prop, Vue } from 'nuxt-property-decorator'

export default @Component({
  components: {}
})
class CarouselIndicators extends Vue {
  @Prop() indicators
  @Prop() currentSlide
  @Prop() firstIndicatorIndex
}
</script>
<style lang="scss" scoped>
.carousel__indicators{
  margin-top: 20px;
  display: flex;
  gap: 15px;
  .carousel__indicators-item{
    height: 110px;
    max-width: 140px;
  }
  .carousel__indicators-item > img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    opacity: 1;
    transition: all 0.25s linear;
    &:hover{
      background: rgba(255, 255, 255, 0.2);
      box-shadow: rgba(3, 126, 214, 0.3) 0 0 5px 5px;
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
