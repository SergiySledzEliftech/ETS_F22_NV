<template>
  <div class="carousel">
    <div class="carousel-inner">
      <carousel-item
        v-for="(slide, index) in slides"
        :key="`item-${index}`"
        :slide="slide"
        :current-slide="currentSlide"
        :index="index"
        :direction="direction"
      />
      <carousel-controls
        :current-slide="currentSlide"
        :slides="slides"
        @prev="prev"
        @next="next"
      />
    </div>
    <carousel-indicators
      :indicators="indicatorsArr"
      :current-slide="currentSlide"
      :first-indicator-index="firstIndicatorIndex"
      @switch="switchSlide($event)"
    />
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';
import CarouselItem from './CarouselItem';
import CarouselControls from './CarouselControls';
import CarouselIndicators from './Carouselndicators';

export default @Component({
  components: {
    CarouselItem,
    CarouselControls,
    CarouselIndicators
  }
})

class Carousel extends Vue {
  slides = [
    'https://picsum.photos/id/1032/900/400',
    'https://picsum.photos/id/1033/900/400',
    'https://picsum.photos/id/1037/900/400',
    'https://picsum.photos/id/1035/900/400',
    'https://picsum.photos/id/1036/900/400'
  ]

  currentSlide = 0
  direction = 'right'
  indicatorsAmount = 4
  indicatorsArr = []
  firstIndicatorIndex = 0
  lastIndicatorIndex = 0

  prev (step = -1, switcher = false) {
    this.currentSlide =
      this.currentSlide > 0
        ? this.currentSlide + step
        : this.slides.length - 1;
    this.direction = 'left';
    this.changeIndicatorsArr(switcher);
  }

  next (step = 1, switcher = false) {
    this.currentSlide =
      this.currentSlide < this.slides.length - 1
        ? this.currentSlide + step
        : 0;
    this.direction = 'right';
    this.changeIndicatorsArr(switcher);
  }

  switchSlide (index) {
    const step = index + this.firstIndicatorIndex - this.currentSlide;
    if (step > 0) {
      this.next(step, true);
    } else {
      this.prev(step, true);
    }
  }

  changeIndicatorsArr (switcher) {
    if (!switcher) {
      if (this.direction === 'right') {
        if (this.currentSlide === 0) {
          for (let i = 0; i < this.indicatorsAmount; i++) {
            this.indicatorsArr[i] = this.slides[i];
          }
          this.firstIndicatorIndex = 0;
          this.lastIndicatorIndex = this.indicatorsAmount - 1;
        } else if (this.currentSlide > this.lastIndicatorIndex) {
          let count = this.indicatorsAmount - 1;
          for (let i = this.currentSlide; i > this.firstIndicatorIndex; i--) {
            this.indicatorsArr[count--] = this.slides[i];
          }
          this.firstIndicatorIndex++;
          this.lastIndicatorIndex++;
        }
      } else if (this.direction === 'left') {
        if (this.currentSlide === this.slides.length - 1) {
          let count = this.indicatorsAmount - 1;
          for (let i = this.slides.length - 1; i >= this.slides.length - this.indicatorsAmount; i--) {
            this.indicatorsArr[count--] = this.slides[i];
          }
          this.firstIndicatorIndex = this.slides.length - this.indicatorsAmount;
          this.lastIndicatorIndex = this.slides.length - 1;
        } else if (this.currentSlide < this.firstIndicatorIndex) {
          let count = 0;
          for (let i = this.currentSlide; i < this.lastIndicatorIndex; i++) {
            this.indicatorsArr[count++] = this.slides[i];
          }
          this.firstIndicatorIndex--;
          this.lastIndicatorIndex--;
        }
      }
    }
  }

  created () {
    if (this.slides.length < this.indicatorsAmount) {
      this.indicatorsAmount = this.slides.length;
    }
    this.lastIndicatorIndex = this.indicatorsAmount - 1;
    for (let i = 0; i < this.indicatorsAmount; i++) {
      this.indicatorsArr[i] = this.slides[i];
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  height: 100%;
}
.carousel-inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
}
</style>
