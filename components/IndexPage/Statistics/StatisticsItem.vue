<template>
  <v-card
    max-width="310px"
    class="mb-10 ml-5 mr-5"
  >
    <div class="card-header">
      <v-card-title
        class="card-title"
      >
        {{ name }} statistics
      </v-card-title>
    </div>
    <div class="statistics-wrapper">
      <div class="markup d-flex flex-column justify-space-between">
        <hr v-for="i in 11" :key="i">
      </div>
      <div class="markup-numbers d-flex flex-column-reverse justify-space-between">
        <span v-for="i in 11" :key="i">{{ (i+"0")-10 }}</span>
      </div>
      <div class="statistics d-flex align-end justify-space-between">
        <Column v-for="(el, index) of statisticsValue" :key="index" :prop-height="el" />
      </div>
    </div>
  </v-card>
</template>

<script>
import { Component, Vue, Prop, Provide } from 'nuxt-property-decorator';
import Column from './Column.vue';

export default @Component({
  components: { Column }
})

class StatisticsItem extends Vue {
  @Prop() name
  @Provide() statisticsValue = [65, 21, 59, 92, 22]
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
  width: 20px;
  left: 3px;
  bottom: 0;

  span{
    font-size: 10px;
  }
}
</style>
