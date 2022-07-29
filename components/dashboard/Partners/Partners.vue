<template>
  <div class="partners-wrapper">
    <h3>Our partners</h3>
    <div class="d-flex align-center flex-wrap justify-space-around partners-wrapper">
      <partners-item
        v-for="el of partnersData"
        :key="el._id"
        :company-name="el.name"
        :img="el.img"
      />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';
import PartnersItem from './PartnersItem.vue';
import { serverApiUrl } from '@/settings/config';

export default @Component({
  components: { PartnersItem }
})

class Partners extends Vue {
  partnersData = [...Array(5).keys()]

  async mounted () {
    try {
      const res = await this.$axios.get(`${serverApiUrl}partners`);
      this.partnersData = res.data;
    } catch (error) {}
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
