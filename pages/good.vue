<template>
  <div>
    <div v-if="loading" class="text-center progress-circular">
      <v-progress-circular
        :size="60"
        :width="6"
        color="teal"
        indeterminate
      />
    </div>
    <div v-if="!loading">
      <Info />
      <div class="tabs-wrapper">
        <v-tabs class="tabs" color="#E31F26" left>
          <v-tab to="/good/" nuxt exact>
            Description
          </v-tab>
          <v-tab to="/good/comments/" nuxt>
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
import { Vue, Component } from 'nuxt-property-decorator'
import Carousel from '~/components/good/Carousel/Carousel'
import Map from '~/components/good/Map'
import Info from '~/components/good/Info'
import SharingBlock from '~/components/good/SharingBlock'
import Recommendations from '~/components/good/Recommendations'

export default @Component({
  components: {
    Carousel,
    Map,
    Info,
    Recommendations,
    SharingBlock
  },
  data () {
    return {
      loading: true
    }
  },
  created () {
    this.loading = false
  }
})

class Index extends Vue {
  title = 'Good page';
  name = 'goodPage'
}
</script>

<style lang="scss">
.container{
  padding: 0;
  margin: 0 auto;
  max-width: 1280px;
}
.progress-circular{
  display: flex;
  height: 70vh;
  justify-content: center;
  align-items: center;
}
.tabs-wrapper{
  @media only screen and (max-width: 1310px) {
    padding: 0 12px;
  }
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
