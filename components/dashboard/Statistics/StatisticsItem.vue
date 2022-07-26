<template>
  <v-card
    max-width="310px"
    class="mb-10 ml-5 mr-5"
  >
    <div class="card-header">
      <v-card-title
        class="card-title"
      >
        {{ name }} <br> for last 24 hours
      </v-card-title>
    </div>
    <div class="statistics-wrapper">
      <div class="markup d-flex flex-column justify-space-between">
        <hr v-for="i in 11" :key="i">
      </div>
      <div class="markup-numbers d-flex flex-column-reverse justify-space-between">
        <span v-for="i in 11" :key="i">{{ i }}K{{ i == 11 ? '+' : null }}</span>
      </div>
      <div class="statistics d-flex align-end justify-space-between">
        <column v-for="(el, index) of statisticsValue" :key="index" :value="el" :hours="index+1 " />
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
  @Prop()statisticsValue
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
  font-size: 16px;
  line-height: 1.5;
}

.statistics{
  width: 270px;
  height: 180px;

  position: absolute;
  z-index: 10;
}

.markup{
  width: 100%;
  height: 180px;
  left: 0;
  bottom: 0;
  position: absolute;
}

.markup-numbers{
  position: absolute;
  z-index: 3;
  height: 195px;
  width: 30px;
  left: 3px;
  bottom: 0;

  span{
    font-size: 10px;
  }
}
</style>
