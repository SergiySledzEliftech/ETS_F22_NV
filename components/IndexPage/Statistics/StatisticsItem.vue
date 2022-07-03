<template>
  <v-card
    max-width="310px"
  >
    <div class="card-header">
      <v-card-title
        class="card-title"
      >
        {{ name }} statistics
      </v-card-title>
    </div>
    <div class="statistics-wrapper">
      <div class="markup">
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
      </div>
      <div class="markup-numbers">
        <span>0</span>
        <span>10</span>
        <span>20</span>
        <span>30</span>
        <span>40</span>
        <span>50</span>
        <span>60</span>
        <span>70</span>
        <span>80</span>
        <span>90</span>
        <span>100</span>
      </div>
      <div class="statistics">
        <Column :prop-height="6"/>
        <Column :prop-height="1"/>
        <Column :prop-height="3"/>
        <Column :prop-height="10"/>
        <Column :prop-height="8"/>
      </div>
    </div>
  </v-card>
</template>

<script>
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import Column from './Column.vue';

export default @Component({
  components: { Column }
})

class StatisticsItem extends Vue {
  @Prop() name
}
</script>

<style scoped lang="scss">
.statistics-wrapper{
  height: 200px;
  padding-left: 30px;
  padding-right: 10px;
  padding-top: 20px;
  width: 310px;
}

.card-header{
  background-color: $secondary;
}

.card-title{
  color: white;
}

.statistics{
  width: 270px;
  height: 180px;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: absolute;
  z-index: 10;
}

.markup{
  width: 100%;
  height: 180px;
  left: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.markup-numbers{
  position: absolute;
  z-index: 3;
  height: 195px;
  width: 20px;
  left: 3px;
  bottom: 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  span{
    font-size: 10px;
  }
}
</style>
