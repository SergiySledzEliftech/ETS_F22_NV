<template>
  <div class="statistics-wrapper">
    <h3>Statistics</h3>
    <div class="d-flex justify-space-around align-center flex-wrap statistics-items-wrapper">
      <statistics-item
        name="Customers entered"
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
import { Component, Vue, namespace } from 'nuxt-property-decorator';
import StatisticsItem from './StatisticsItem.vue';

const { Action, State } = namespace('dashboard');

export default @Component({
  components: { StatisticsItem }
})

class Statistics extends Vue {
  users = [0, 0, 0, 0, 0, 0]
  itemsCreated = [0, 0, 0, 0, 0, 0]
  itemsRented = [0, 0, 0, 0, 0, 0]

  @Action loadStatistics

  @State statistics

  async mounted () {
    try {
      await this.loadStatistics();
      const todayStatistics = this.statistics.filter(e => e.date === this.getDateTime());
      const tomorrowStatistics = this.statistics.filter(e => e.date === this.getDateTime() - 86400000);
      const statistics = [...(this.fillEmptyStatistics(tomorrowStatistics)), ...(this.fillEmptyStatistics(todayStatistics))];

      this.users = this.getStatisticsFor24Hours(statistics, 'users');
      this.itemsCreated = this.getStatisticsFor24Hours(statistics, 'itemsCreated');
      this.itemsRented = this.getStatisticsFor24Hours(statistics, 'itemsRented');
    } catch (err) {
    }
  }

  getDateTime () {
    return (new Date()).setHours(0, 0, 0, 0);
  }

  getStatisticsFor24Hours (statistics, field) {
    const index = Math.floor(((new Date()).getHours(0, 0, 0, 0)) / 4) + 1;
    statistics = [...statistics[0][field], ...statistics[1][field]].slice(0, index + 6).reverse().slice(0, 6).reverse();
    const res = [];

    for (let i = 0; i < statistics.length; i++) {
      res.push(statistics.slice(i).reduce((e1, e2) => e1 + e2));
    }
    return res.reverse();
  }

  fillEmptyStatistics (arr) {
    if (arr.length === 0) {
      const nullArr = [0, 0, 0, 0, 0, 0];
      arr.push({ users: nullArr, itemsCreated: nullArr, itemsRented: nullArr });

      return arr;
    }

    return arr;
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
