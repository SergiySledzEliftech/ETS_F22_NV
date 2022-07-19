<template>
  <div class="statistics-wrapper">
    <h3>Statistics</h3>
    <div class="d-flex justify-space-around align-center flex-wrap statistics-items-wrapper">
      <statistics-item name="Users" />
      <statistics-item name="Rent" />
      <statistics-item name="Goods" />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import StatisticsItem from './StatisticsItem.vue'

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
  padding-bottom: 10px;
}
</style>
