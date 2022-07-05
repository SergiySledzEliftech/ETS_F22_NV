<template>
  <div class="statistics-wrapper">
    <h3>Statistics</h3>
    <div class="d-flex justify-space-between align-center flex-wrap statistics-items-wrapper">
      <StatisticsItem :name="'Users'" />
      <StatisticsItem :name="'Rent'" />
      <StatisticsItem :name="'Goods'" />
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
  margin-bottom: 50px !important;
}

.statistics-wrapper{
  padding-top: 80px;
  padding-bottom: 80px;
}

@media screen and (max-width:1264px){
  .statistics-items-wrapper{
    justify-content: space-around !important;
  }
}
</style>
