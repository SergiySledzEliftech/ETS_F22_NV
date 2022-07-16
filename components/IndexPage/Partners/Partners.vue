<template>
  <div class="partners-wrapper">
    <h3>Our partners</h3>
    <div class="d-flex align-center flex-wrap justify-space-around partners-wrapper">
      <PartnersItem :company-name="companyName" :url="url" />
      <PartnersItem :company-name="companyName" :url="url" />
      <PartnersItem :company-name="companyName" :url="url" />
      <PartnersItem :company-name="companyName" :url="url" />
      <PartnersItem :company-name="companyName" :url="url" />
    </div>
  </div>
</template>

<script>
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import PartnersItem from './PartnersItem.vue'

export default @Component({
  components: { PartnersItem }
})

class Partners extends Vue {
  @Provide() companyName = 'Company'
  @Provide() url = 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png'
}
</script>

<style scoped lang="scss">
  h3{
    text-align: center !important;
    margin-bottom: 50px !important;
  }

  .partners-wrapper{
    padding-bottom: 10px;
  }
</style>
