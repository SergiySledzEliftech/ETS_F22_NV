<template>
  <div class="partners-wrapper">
    <h3>Our partners</h3>
    <div class="d-flex align-center flex-wrap justify-space-around partners-wrapper">
      <partners-item
        v-for="i in 6"
        :key="i"
        :company-name="companyName"
        :url="url"
      />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';
import PartnersItem from './PartnersItem.vue';

export default @Component({
  components: { PartnersItem }
})

class Partners extends Vue {
  companyName = 'Company'
  url = 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png'
}
</script>

<style scoped lang="scss">
  h3{
    text-align: center !important;
    margin-bottom: 50px !important;
  }

  .partners-wrapper{
    padding-bottom: 10px;
    gap:50px;
  }
</style>
