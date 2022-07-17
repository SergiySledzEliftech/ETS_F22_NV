<template>
  <div>
    <button class="carousel-control btn-next" @click="$emit('next')">
      <svg
        width="60"
        height="60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g
          filter="url(#a)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35 65c16.569 0 30-13.431 30-30C65 18.431 51.569 5 35 5 18.431 5 5 18.431 5 35c0 16.569 13.431 30 30 30Zm-2.483-39.59 9.051 8.6c.288.273.432.632.432.99s-.144.717-.431.99l-9.052 8.6a1.53 1.53 0 0 1-2.085 0 1.352 1.352 0 0 1 0-1.981L38.44 35l-8.01-7.609a1.352 1.352 0 0 1 0-1.98 1.529 1.529 0 0 1 2.086 0Z"
            fill="#fff"
            fill-opacity=".8"
            shape-rendering="crispEdges"/>
        </g>
        <defs>
          <filter
            id="a"
            x="0"
            y="0"
            width="70"
            height="70"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix values="0 0 0 0 0.466319 0 0 0 0 0.596635 0 0 0 0 0.708333 0 0 0 0.25 0"/>
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_362_174"/>
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_362_174" result="shape"/>
          </filter>
        </defs>
      </svg>
    </button>
    <button class="carousel-control btn-prev" @click="$emit('prev')">
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_362_171)">
          <path fill-rule="evenodd"
                clip-rule="evenodd"
                d="M35 65C51.5685 65 65 51.5685 65 35C65 18.4315 51.5685 5 35 5C18.4315 5 5 18.4315 5 35C5 51.5685 18.4315 65 35 65ZM37.4835 25.4105L28.4317 34.0099C28.144 34.2833 28 34.6417 28 35.0002C28 35.3585 28.1437 35.7166 28.4315 35.9902L37.4832 44.5897C38.059 45.1368 38.9925 45.1368 39.5681 44.5897C40.1437 44.0429 40.1437 43.1561 39.5681 42.609L31.559 35.0001L39.5683 27.391C40.1439 26.8442 40.1439 25.9573 39.5683 25.4105C38.9928 24.8632 38.0592 24.8632 37.4835 25.4105Z"
                fill="white"
                fill-opacity="0.8"
                shape-rendering="crispEdges"/>
        </g>
        <defs>
          <filter id="filter0_d_362_171"
                  x="0"
                  y="0"
                  width="70"
                  height="70"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.466319 0 0 0 0 0.596635 0 0 0 0 0.708333 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_362_171"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_362_171" result="shape"/>
          </filter>
        </defs>
      </svg>

    </button>
    <button class="carousel-control btn-fullscreen" @click="$emit('fullScreen')">
      <svg
        width="40"
        height="40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Zm9-29v8l-3.29-3.29-10 10L19 29h-8v-8l3.29 3.29 10-10L21 11h8Z"
          fill="#fff"
          fill-opacity=".8"/>
      </svg>
    </button>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

export default @Component({
  name: 'CarouselControls',
  components: {},
  emits: ['prev', 'next']
})
class CarouselControls extends Vue {
}
</script>
<style lang="scss" scoped>
.btn-next,
.btn-prev,
.btn-fullscreen{
  position: absolute;
  box-shadow: 0 0 5px rgba(119, 152, 181, 0.25);
  transition: all 0.25s linear;
  &:hover{
    box-shadow: 0 0 5px rgba(119, 152, 181, 0.5);
    transition: all 0.25s linear;
  }
}
/*
.btn-next,
.btn-prev{
  width: 60px;
  height: 60px;
}
*/
.btn-next{
  top: calc(50% - 25px);
  right: 10px;
}
.btn-prev{
  top: calc(50% - 25px);
  left: 10px;
}
.btn-fullscreen{
  top: 10px;
  right: 10px;
}
</style>
