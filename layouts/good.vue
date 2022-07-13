<template>
  <v-app>
    <header-comp />
    <v-main>
      <v-container>
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
          <v-tabs class="tabs" color="#E31F26" centered>
            <v-tab v-for="(tab, index) in tabs" :key="index" :to="tab.route" exact>
              {{ tab.name }}
            </v-tab>
          </v-tabs>
          <recommendations />
          <sharing-block />
        </div>
      </v-container>
    </v-main>
    <footer-comp />
  </v-app>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import HeaderComp from '~/components/global/HeaderComponent'
import FooterComp from '~/components/global/FooterComponent'
import Info from '~/components/good/Info'
import SharingBlock from '~/components/good/SharingBlock'
import Recommendations from '~/components/good/Recommendations'
import comp from '~/pages/Tabs'

export default @Component({
  components: {
    HeaderComp,
    FooterComp,
    Info,
    ...comp,
    Recommendations,
    SharingBlock
  },
  data () {
    return {
      loading: true,
      progressInterval: {},
      value: 0
    }
  },
  created () {
    this.loading = false
  }
})

class Good extends Vue {
  name = 'goodPage'
  tabs = [
    { name: 'Description', route: '/Tabs' },
    { name: 'Comments', route: '/Tabs/comments' }
  ]
}
</script>

<style lang="scss">
.tabs a {
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  &:hover{
    background-color: #aaaaaa2b;
  }
}
</style>
