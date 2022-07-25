<template>
  <div class="recommendation">
    <h3 class="recommendation-title">
      Similar objects
    </h3>
    <div class="recommendation__list">
      <div class="recommendation__list-item" />
      <div class="recommendation__list-item" />
      <div class="recommendation__list-item" />
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';

export default @Component({
  components: {}
})

class Recommendations extends Vue {

}
</script>

<style lang="scss" scoped>
h3{
  @include responsive-value("font-size", 35, 20, $bp_laptop);
}
.recommendation{
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  @media only screen and (max-width: 1310px) {
    padding: 0 12px;
  }
  .recommendation__list{
    display: flex;
    gap: 40px;
  }
}
</style>
