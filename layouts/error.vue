<template>
  <div class="page404">
    <h1>404 Not Found</h1>
    <img src="~/assets/img/HelloFromUkraine.png" alt="Hello, we are from Ukraine">
    <h3>Hello, we are from Ukraine</h3>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';

export default @Component({})

class Error extends Vue {}
</script>

<style lang="scss" scoped>
  .page404{
  text-align: center;
    img{
      display: block;
      width: 100%;
      margin: 10px auto 16px auto;
      max-width: 900px;
    }
    h3{
      margin-top: 0!important;
      text-align: center!important;
    }
  }
</style>
