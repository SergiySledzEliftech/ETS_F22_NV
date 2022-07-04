<template>
  <div>
    <h3>Our partners</h3>
    <div class="d-flex align-center flex-wrap justify-space-around partners-wrapper">
    <PartnersItem :url="'https://preview.redd.it/2ssi8ft315b71.png?auto=webp&s=0fbae78f60d85a7c1a1ca510cdc2baaf0852dd9d'"/>
    <PartnersItem :url="'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png'"/>
    <PartnersItem :url="'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png'"/>
  </div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';
import PartnersItem from './PartnersItem.vue';

export default @Component({
  components: { PartnersItem }
})

class Partners extends Vue {}
</script>

<style scoped lang="scss">
  h3{
    text-align: center !important;
    margin-bottom: 55px !important;
  }
</style>
