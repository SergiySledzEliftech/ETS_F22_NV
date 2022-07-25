<template>
  <div class="statistics-wrapper">
    <h3>Statistics</h3>
    <div class="d-flex justify-space-around align-center flex-wrap statistics-items-wrapper">
      <statistics-item
        name="Users entered"
        :statistics-value="users"
      />
      <statistics-item
        name="Items created"
        :statistics-value="itemsCreated"
      />
      <statistics-item
        name="Items rented"
        :statistics-value="itemsRented"
      />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import StatisticsItem from './StatisticsItem.vue'
import { serverApiUrl } from '@/settings/config'

export default @Component({
  components: { StatisticsItem }
})

class Statistics extends Vue {
  users = [0, 0, 0, 0, 0, 0]
  itemsCreated = [0, 0, 0, 0, 0, 0]
  itemsRented = [0, 0, 0, 0, 0, 0]

  async mounted () {
    try {
      const res = await this.$axios.get(`${serverApiUrl}/statistics`)
      const todayStatistics = res.data.filter(e => e.date === this.getDateTime())

      this.users = todayStatistics[0].users
      this.itemsCreated = todayStatistics[0].itemsCreated
      this.itemsRented = todayStatistics[0].itemsRented
    } catch (error) {}
  }

  getDateTime () {
    return (new Date()).setHours(0, 0, 0, 0)
  }
}
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
