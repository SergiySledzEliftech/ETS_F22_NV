<template>
  <div>
    <button class="carousel-control btn-next" @click="$emit('next')"></button>
    <button class="carousel-control btn-prev" @click="$emit('prev')"></button>
    <button class="carousel-control btn-fullscreen" @click="$emit('fullScreen')"></button>
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
  top: calc(50% - 25px);
  right: 10px;
}
.btn-prev{
  top: calc(50% - 25px);
  left: 10px;
}
.btn-fullscreen{
  width: 40px;
  height: 40px;
  top: 10px;
  right: 10px;
}
</style>
