<template>
  <div class="main good-container">
    <div v-if="loading" class="progress-circular good-circular">
      <progress-circular />
    </div>
    <div v-if="!loading">
      <info :good="good" />
      <div class="tabs-wrapper">
        <v-tabs class="tabs" color="var(--primary)" left>
          <v-tab :to="{ name: 'categories-id'}" nuxt exact>
            Description
          </v-tab>
          <v-tab :to="{ name: 'categories-id-comments'}" nuxt>
            Comments
          </v-tab>
        </v-tabs>
      </div>
      <nuxt-child :good="good" />
      <recommendations :good="good" />
      <sharing-block />
    </div>
  </div>
</template>

<script>
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import Carousel from '~/components/good/Carousel/Carousel';
import Map from '~/components/good/Map';
import Info from '~/components/good/Info';
import SharingBlock from '~/components/good/SharingBlock';
import Recommendations from '~/components/good/Recommendations';
import ProgressCircular from '~/components/global/Progress';

const { State, Mutation, Action } = namespace('good');

export default @Component({
  components: {
    Carousel,
    Map,
    Info,
    Recommendations,
    SharingBlock,
    ProgressCircular
  },
  auth: false
})

class GoodPage extends Vue {
  @State good

  @Mutation setLoading

  @Action loadGood

  loading = true

  async mounted () {
    try {
      await this.loadGood(this.$route.params.id);
    } catch (err) {
      console.error(err.message);
    }
    this.loading = false;
  }

  created () {
  }
}
</script>

<style lang="scss" scoped>
.good-container{
  padding: 0;
  margin: 0 auto;
  max-width: 1280px;
  height: 100%;
}
.main{
  height: 100%;
}
.tabs-wrapper{
  @media only screen and (max-width: 1310px) {
    padding: 0 12px;
  }
}
.progress-circular{
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.good-circular{
  height: 80vh;
}
.v-tabs{
  margin-top: 30px;
  a {
    @include responsive-value("font-size", 14, 12, $bp_tablet);
    @include responsive-value("padding", 16, 10, $bp_tablet);
    font-weight: 500;
    height: 100%;
    &:hover {
      background-color: #aaaaaa2b;
    }
  }
}
</style>
