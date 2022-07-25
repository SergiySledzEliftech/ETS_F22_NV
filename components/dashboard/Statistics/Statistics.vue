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

// 86400000 - day

class Statistics extends Vue {
  users = [0, 0, 0, 0, 0, 0]
  itemsCreated = [0, 0, 0, 0, 0, 0]
  itemsRented = [0, 0, 0, 0, 0, 0]

  async mounted () {
    try {
      const res = await this.$axios.get(`${serverApiUrl}/statistics`)
      const statistics = res.data.filter(e => e.date === this.getDateTime() || e.date === this.getDateTime() - 86400000)

      this.users = this.getStatisticsFor24Hours(statistics, 'users')
      this.itemsCreated = this.getStatisticsFor24Hours(statistics, 'itemsCreated')
      this.itemsRented = this.getStatisticsFor24Hours(statistics, 'itemsRented')
    } catch (error) {}
  }

  getDateTime () {
    return (new Date()).setHours(0, 0, 0, 0)
  }

  getStatisticsFor24Hours (statistics, field) {
    const hours = Math.floor((new Date()).getHours() / 4)
    const todayStatistics = [...statistics[0][field], ...statistics[1][field]].slice(hours, hours + 6).reverse()

    const result = []
    for (let i = 0; i < todayStatistics.length; i++) {
      result.unshift(todayStatistics.slice(i).reduce((e1, e2) => e1 + e2))
      console.log(todayStatistics.slice(i))
    }

    return result
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
