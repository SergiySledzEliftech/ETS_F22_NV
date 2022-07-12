<template>
  <!--
  <div class="carousel">
    <div class="carousel-wrapper">
      <div class="carousel__top">
        <div class="carousel__top-list">
          <img
            v-for="(image, index) in images"
            :key="index"
            :src=" require('~/assets/img/good-page/' + image ) "
            alt=""
            v-show="currentSlide === index"
            class="carousel__top-img">
        </div>
        <button class="btn-next" @click="nextSlide"></button>
        <button class="btn-prev" @click="prevSlide"></button>
        <button class="btn-fullscreen" @click="fullScreenSlide"></button>
      </div>
      <div class="carousel__bottom-list">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src=" require('~/assets/img/good-page/' + image ) "
          alt=""
          @click="switchToSlide"
          class="carousel__list-item">
      </div>
    </div>
  </div>
  -->
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
import { Component, Vue } from 'nuxt-property-decorator'
import CarouselItem from './CarouselItem'
import CarouselControls from './CarouselControls'
import CarouselIndicators from './Carouselndicators'

export default @Component({
  name: 'Carousel',
  components: {
    CarouselItem,
    CarouselControls,
    CarouselIndicators
  },
  data: () => ({
    slides: [
      'https://picsum.photos/id/1032/900/400',
      'https://picsum.photos/id/1033/900/400',
      'https://picsum.photos/id/1037/900/400',
      'https://picsum.photos/id/1035/900/400',
      'https://picsum.photos/id/1036/900/400'
    ],
    currentSlide: 0,
    direction: 'right',
    indicatorsAmount: 4,
    indicatorsArr: [],
    firstIndicatorIndex: 0,
    lastIndicatorIndex: 0
  }),
  methods: {
    prev (step = -1, switcher = false) {
      this.currentSlide =
        this.currentSlide > 0
          ? this.currentSlide + step
          : this.slides.length - 1
      this.direction = 'left'
      this.changeIndicatorsArr(switcher)
    },
    next (step = 1, switcher = false) {
      this.currentSlide =
        this.currentSlide < this.slides.length - 1
          ? this.currentSlide + step
          : 0
      this.direction = 'right'
      this.changeIndicatorsArr(switcher)
    },
    switchSlide (index) {
      const step = index + this.firstIndicatorIndex - this.currentSlide
      if (step > 0) {
        this.next(step, true)
      } else {
        this.prev(step, true)
      }
    },
    fillIndicatorsArr (firstSlideIndex = 0) {
      if (firstSlideIndex + this.indicatorsAmount - 1 > this.slides.length - 1) {
        const lastSlidesAmount = this.slides.length - firstSlideIndex
        for (let i = 0; i < lastSlidesAmount; i++) {
          this.indicatorsArr[i] = this.slides[firstSlideIndex++]
        }
        for (let i = 0; i < this.indicatorsAmount - this.lastIndicatorIndex - 1; i++) {
          this.indicatorsArr[this.lastIndicatorIndex] = this.slides[i]
        }
      } else {
        for (let i = 0; i < this.indicatorsAmount - 1; i++) {
          this.indicatorsArr[i] = this.slides[firstSlideIndex++]
        }
      }
    },
    changeIndicatorsArr (switcher) {
      if (!switcher) {
        if (this.direction === 'right') {
          if (this.currentSlide === 0) {
            for (let i = 0; i < this.indicatorsAmount; i++) {
              this.indicatorsArr[i] = this.slides[i]
            }
            this.firstIndicatorIndex = 0
            this.lastIndicatorIndex = this.indicatorsAmount - 1
          } else if (this.currentSlide > this.lastIndicatorIndex) {
            let count = this.indicatorsAmount - 1
            for (let i = this.currentSlide; i > this.firstIndicatorIndex; i--) {
              this.indicatorsArr[count--] = this.slides[i]
            }
            this.firstIndicatorIndex++
            this.lastIndicatorIndex++
          }
        } else if (this.direction === 'left') {
          if (this.currentSlide === this.slides.length - 1) {
            let count = this.indicatorsAmount - 1
            for (let i = this.slides.length - 1; i >= this.slides.length - this.indicatorsAmount; i--) {
              this.indicatorsArr[count--] = this.slides[i]
            }
            this.firstIndicatorIndex = this.slides.length - this.indicatorsAmount
            this.lastIndicatorIndex = this.slides.length - 1
          } else if (this.currentSlide < this.firstIndicatorIndex) {
            let count = 0
            for (let i = this.currentSlide; i < this.lastIndicatorIndex; i++) {
              this.indicatorsArr[count++] = this.slides[i]
            }
            this.firstIndicatorIndex--
            this.lastIndicatorIndex--
          }
        }
      }
    }
  },
  created () {
    this.lastIndicatorIndex = this.indicatorsAmount - 1
    for (let i = 0; i < this.indicatorsAmount; i++) {
      this.indicatorsArr[i] = this.slides[i]
    }
  }
})

class Carousel extends Vue {
}
</script>

<style lang="scss" scoped>
.carousel-wrapper{
  display: flex;
  flex-direction: column;
  gap: 30px;
  .carousel__top{
    position: relative;
    display: flex;
    overflow: hidden;
    .carousel__top-list{
      max-width: 640px;
      .carousel__top-img{
        border-radius: 10px;
        width: 640px;
        height: 100%;
      }
    }
    .btn-next,
    .btn-prev,
    .btn-fullscreen{
      position: absolute;
      background: #fff;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.8);
      box-shadow: 0 0 5px rgba(119, 152, 181, 0.25);
      transition: all 0.25s linear;
      &:hover{
        background: rgba(255, 255, 255, 0.9);
        box-shadow: 0 0 5px rgba(119, 152, 181, 0.5);
        transition: all 0.25s linear;
      }
    }
    .btn-next,
    .btn-prev{
      width: 60px;
      height: 60px;
    }
    .btn-next{
      top: 45%;
      right: 10px;
    }
    .btn-prev{
      top: 45%;
      left: 10px;
    }
    .btn-fullscreen{
      width: 40px;
      height: 40px;
      top: 10px;
      right: 10px;
    }
  }
  .carousel__bottom-list{
    display: flex;
    justify-content: space-around;
    gap: 14px;
    .carousel__list-item{
      max-width: 150px;
      height: 110px;
      border-radius: 10px;
      transition: all 0.25s linear;
      &:hover{
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        transition: all 0.25s linear;
        cursor: pointer;
      }
    }
  }
}
.carousel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 640px;
}
.carousel-inner {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
}
</style>
