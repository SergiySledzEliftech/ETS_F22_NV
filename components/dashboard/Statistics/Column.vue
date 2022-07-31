<template>
  <v-tooltip top color="black">
    <template #activator="{ on, attrs }">
      <v-card
        v-bind="attrs"
        class="column"
        min-width="40"
        color="var(--primary)"
        :height="`${heightValidator(value / 110)}%`"
        v-on="on"
      >
        <div class="animation-div" />
      </v-card>
    </template>
    <span>{{ value }} for last {{ hours * 4 }} hours</span>
  </v-tooltip>
</template>

<script>
import { Component, Vue, Prop } from 'nuxt-property-decorator';

export default @Component

class Column extends Vue {
  @Prop({ type: Number }) value
  @Prop({ type: Number }) hours

  heightValidator (num) {
    return num > 100 ? 100 : num;
  }
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
    .animation-div{
      height: 100%;
    }
  }
</style>
