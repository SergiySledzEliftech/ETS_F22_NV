<template>
  <div>
    <button class="carousel-control btn-next" @click="$emit('next')">
      <img src="#" alt="">
    </button>
    <button class="carousel-control btn-prev" @click="$emit('prev')">
      <img src="#" alt="">
    </button>
    <button class="carousel-control btn-fullscreen" @click="$emit('fullScreen')">
      <img src="#" alt="">
    </button>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

export default @Component({
  components: {}
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
