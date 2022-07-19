<template>
  <div class="statistics-wrapper">
    <h3>Statistics</h3>
    <div class="d-flex justify-space-around align-center flex-wrap statistics-items-wrapper">
      <statistics-item
        name="Users entered"
        :statistics-value="[8000, 3300, 5900, 9200, 10000, 4600]"
      />
      <statistics-item
        name="Users entered"
        :statistics-value="[9000, 11000, 4000, 9200, 11000, 4600]"
      />
      <statistics-item
        name="Users entered"
        :statistics-value="[3000, 3300, 7900, 3200, 10000, 11000]"
      />
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
