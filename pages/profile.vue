<template>
  <div>
    <h3>
      Profile
    </h3>
    <v-tabs class="tabs" color="#E31F26" centered>
      <v-tab v-for="(tab, index) in tabs" :key="index">
        <v-icon left>
          mdi-{{ tab.icon }}
        </v-icon>
        {{ tab.title }}
      </v-tab>

      <v-tab-item v-for="(tab, index) in tabs" :key="index">
        <component :is="tab.component" />
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
// import comps from '@/components/profile'
import MyAds from '~/components/profile/MyAds'
import MyRent from '~/components/profile/MyRent'
import MyFavorites from '~/components/profile/MyFavorites'
import MyConfig from '~/components/profile/MyConfig'

export default @Component({
  name: 'profile',
  components: {
    // ...comps
    MyAds,
    MyRent,
    MyFavorites,
    MyConfig
  }
})

class Profile extends Vue {
  tabs = [
    { title: 'My Ads', component: 'my-ads', icon: 'account-filter' },
    { title: 'My Rent', component: 'my-rent', icon: 'home-clock' },
    { title: 'Favorites', component: 'my-favorites', icon: 'heart' },
    { title: 'Configurations', component: 'my-config', icon: 'cog' }
  ]
}

</script>

<style scoped lang="scss">
@import '~vuetify/src/components/VStepper/_variables.scss';

h3 {
  margin: 40px 0;
}

</style>
