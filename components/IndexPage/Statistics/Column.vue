<template>
  <div v-if="propHeight===1" class="column tooltip tooltip--top" style="height: 10%" :data-tooltip="`${propHeight}0%`" />
  <div v-else-if="propHeight===2" class="column tooltip tooltip--top" style="height: 20%" :data-tooltip="`${propHeight}0%`" />
  <div v-else-if="propHeight===3" class="column tooltip tooltip--top" style="height: 30%" :data-tooltip="`${propHeight}0%`" />
  <div v-else-if="propHeight===4" class="column tooltip tooltip--top" style="height: 40%" :data-tooltip="`${propHeight}0%`" />
  <div v-else-if="propHeight===5" class="column tooltip tooltip--top" style="height: 50%" :data-tooltip="`${propHeight}0%`" />
  <div v-else-if="propHeight===6" class="column tooltip tooltip--top" style="height: 60%" :data-tooltip="`${propHeight}0%`" />
  <div v-else-if="propHeight===7" class="column tooltip tooltip--top" style="height: 70%" :data-tooltip="`${propHeight}0%`" />
  <div v-else-if="propHeight===8" class="column tooltip tooltip--top" style="height: 80%" :data-tooltip="`${propHeight}0%`" />
  <div v-else-if="propHeight===9" class="column tooltip tooltip--top" style="height: 90%" :data-tooltip="`${propHeight}0%`" />
  <div v-else-if="propHeight===10" class="column tooltip tooltip--top" style="height: 100%" :data-tooltip="`${propHeight}0%`" />
  <div v-else class="column tooltip tooltip--top" style="height: 0%" :data-tooltip="`${propHeight}0%`" />
</template>

<script>
import { Component, Vue, Prop } from 'nuxt-property-decorator';

export default @Component

class Column extends Vue {
  @Prop({ type: Number }) propHeight
}
</script>

<style>
  .column{
    background-color: #E31F26;
    width: 40px;
  }

  .tooltip {
  position: relative;
  text-decoration: underline dotted;
  cursor: help;
  }

  .tooltip::before,
  .tooltip::after {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: opacity .3s ease-in-out;
  }

  .tooltip:hover::before,
  .tooltip:hover::after {
    opacity: 1;
    visibility: visible;
  }

  .tooltip::before {
    content: attr(data-tooltip);
    z-index: 2;
    width: 60px;
    color: #fff;
    background: rgba(0,0,0, .7);
    border-radius: 5px;
    padding: 5px;
    text-align: center;
  }

  .tooltip::after {
    content: "";
    width: 0;
    height: 0;
  }

  .tooltip--top::before,
  .tooltip--top::after {
    bottom: 100%;
    left: 50%;
    transform: translate(-50%);
    margin-bottom: 15px;
  }

  .tooltip--top::after {
    margin-bottom: 8px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 7px solid rgba(0,0,0, .7);
  }
</style>
