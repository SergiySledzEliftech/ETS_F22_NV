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
import { Component, Prop, Vue } from 'nuxt-property-decorator';

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
  display: flex;
  gap: 17px;
  @media only screen and (max-width: $bp_tablet + px) {
    display: none;
  }
  .carousel__indicators-item{
    @include responsive-value_restrained('height', 110, 80, $bp_tablet, 1310);
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
