<template>
  <div class="statistics-wrapper">
    <h3>Statistics</h3>
    <div class="d-flex justify-space-between align-center">
      <StatisticsItem :name="'Users'"/>
      <StatisticsItem :name="'Rent'"/>
      <StatisticsItem :name="'Goods'"/>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';
import StatisticsItem from './StatisticsItem.vue';

export default @Component({
  components: { StatisticsItem }
})

class Statistics extends Vue {}
</script>

<style scoped lang="scss">
h3{
  text-align: center;
  margin-bottom: 55px !important;
}

.statistics-wrapper{
  padding-top: 80px;
  padding-bottom: 70px;
}
</style>
