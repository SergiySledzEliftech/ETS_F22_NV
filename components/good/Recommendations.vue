<template>
  <div class="recommendation">
    <h3 class="recommendation-title">
      Recommendations
    </h3>
    <div class="recommendation__list">
      <div v-for="recommendation in recommendations" :key="recommendation._id" class="item">
        <single-item
          :item="recommendation"
          :grid="false"
          class="recommendation__list-item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component, namespace, Prop } from 'nuxt-property-decorator';
import SingleItem from '~/components/list/SingleItem';

const { State, Mutation, Action } = namespace('good');

export default @Component({
  components: {
    SingleItem
  }
})

class Recommendations extends Vue {
  @Prop() good;

  @State recommendations;
  @State loading;
  @Mutation setLoading;
  @Action loadRecommendations;

  async mounted () {
    if (this.good.category !== undefined || !isNaN(this.good.price)) {
      this.setLoading(this.loading, true);
      try {
        await this.loadRecommendations({
          id: this.$route.params.id,
          category: this.good.category,
          min: this.good.price * 0.5,
          max: this.good.price * 1.5,
          status: 'available',
          rating: 3
        });
      } catch (err) {
        console.error(err.message);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h3{
  @include responsive-value("font-size", 35, 20, $bp_laptop);
  @include responsive-value_important('margin-top', 40, 5, $bp_laptop);
  @include responsive-value_important('margin-bottom', 40, 5, $bp_laptop);
}
.recommendation{
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  @media only screen and (max-width: 1310px) {
    padding: 0 12px;
  }
  .recommendation__list{
    display: flex;
    gap: 40px;
    .recommendation__list-item{
      width: 380px !important;
    }
  }
}
</style>
