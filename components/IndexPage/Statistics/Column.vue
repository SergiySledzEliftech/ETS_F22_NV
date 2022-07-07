<template>
  <v-tooltip top color="black">
    <template v-slot:activator="{ on, attrs }">
    <v-card
      v-bind="attrs"
      v-on="on"
      class="column"
      min-width="40"
      color="#E31F26"
      :height="`${propHeight}%`" >
        <div class="animation-div"/>
      </v-card>
    </template>
    <span>{{propHeight}}%</span>
  </v-tooltip>
</template>

<script>
import { Component, Vue, Prop } from 'nuxt-property-decorator';

export default @Component

class Column extends Vue {
  @Prop({ type: Number }) propHeight
}
</script>

<style scoped lang="scss">
  .animation-div{
    background-color: #00000044;
    width: 40px;
    height: 0;
    position: absolute;
    bottom: 0;
    transition: 0.5s;
  }

  .column:hover{
    cursor: help;
    .animation-div{
      height: 100%;
    }
  }
</style>
