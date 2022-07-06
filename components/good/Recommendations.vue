<template>
  <div class="recommendation">
    <h3 class="recommendation-title">Similar objects</h3>
    <div class="recommendation__list">
      <div class="recommendation__list-item"></div>
      <div class="recommendation__list-item"></div>
      <div class="recommendation__list-item"></div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

export default @Component({
  name: 'Recommendations',
  components: {}
})

class Recommendations extends Vue {

}
</script>

<style lang="scss" scoped>
.recommendation{
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  .recommendation__list{
    display: flex;
    gap: 40px;
  }
}
</style>
