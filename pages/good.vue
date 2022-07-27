<template>
  <div class="main">
    <div v-if="loading" class="progress-circular">
      <progress-circular />
    </div>
    <div v-if="!loading">
      <info />
      <div class="tabs-wrapper">
        <v-tabs class="tabs" color="var(--primary)" left>
          <v-tab :to="{ name: 'good' }" nuxt exact>
            Description
          </v-tab>
          <v-tab :to="{ name: 'good-comments' }" nuxt>
            Comments
          </v-tab>
        </v-tabs>
      </div>
      <nuxt-child />
      <recommendations />
      <sharing-block />
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';
import Carousel from '~/components/good/Carousel/Carousel';
import Map from '~/components/good/Map';
import Info from '~/components/good/Info';
import SharingBlock from '~/components/good/SharingBlock';
import Recommendations from '~/components/good/Recommendations';
import ProgressCircular from '~/components/global/Progress';

export default @Component({
  components: {
    Carousel,
    Map,
    Info,
    Recommendations,
    SharingBlock,
    ProgressCircular
  }
})

class GoodPage extends Vue {
  loading = true;

  created () {
    this.loading = false;
  }
}
</script>

<style lang="scss">
img{
  font-size: 14px !important;
}
.container{
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
ul, li{
  margin: 0;
  padding: 0;
  text-indent: 0;
  list-style-type: none;
}

.d_none{
  display: none;
}
</style>
