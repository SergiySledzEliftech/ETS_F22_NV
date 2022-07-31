<template>
  <div class="partners-wrapper">
    <h3>Our partners</h3>
    <div class="d-flex align-center flex-wrap justify-space-around partners-wrapper">
      <partners-item
        v-for="el of partnersData"
        :key="el._id"
        :company-name="el.name"
        :img="el.img"
        :is-loading="loading"
      />
    </div>
  </div>
</template>

<script>
import { Component, Vue, namespace } from 'nuxt-property-decorator';
import PartnersItem from './PartnersItem.vue';

const { Action, State } = namespace('dashboard');

export default @Component({
  components: { PartnersItem }
})

class Partners extends Vue {
  partnersData = [...Array(5).keys()]

  @Action loadPartners

  @State partners
  @State loading

  async mounted () {
    try {
      await this.loadPartners();
      this.partnersData = this.partners;
    } catch (err) {
    }
  }
}
</script>

<style scoped lang="scss">
  h3{
    text-align: center !important;
    margin-bottom: 50px !important;
  }

  .partners-wrapper{
    padding-bottom: 10px;
    gap:20px 0;
  }
</style>
