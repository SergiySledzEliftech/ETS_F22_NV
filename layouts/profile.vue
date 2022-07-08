<template>
  <v-app dark>
    <HeaderComp />
    <v-main>
      <v-container>
        <h3>
          Profile
        </h3>
        <v-tabs class="tabs" color="#E31F26" right>
          <v-tab v-for="(tab, index) in tabs" :key="index" :to="tab.route" exact>
            <v-icon left>
              mdi-{{ tab.icon }}
            </v-icon>
            {{ tab.title }}
          </v-tab>
        </v-tabs>

        <Nuxt />
      </v-container>
    </v-main>
    <FooterComp />
  </v-app>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import HeaderComp from '../components/global/HeaderComponent'
import FooterComp from '../components/global/FooterComponent'

export default @Component({
  components: {
    HeaderComp,
    FooterComp
  }
})

class Profile extends Vue {
  name = 'profile';
  tabs = [
    { title: 'My Ads', route: '/profile', icon: 'account-filter' },
    { title: 'My Rent', route: '/profile/rent', icon: 'home-clock' },
    { title: 'Favorites', route: '/profile/favorites', icon: 'heart' },
    { title: 'Configurations', route: '/profile/configuration', icon: 'cog' }
  ]
}
</script>

<style lang="scss">
@import '~vuetify/src/components/VStepper/_variables.scss';

h3 {
  margin: 40px 0;
}

.tabs a {
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    background-color: #aaaaaa2b;
  }
}

</style>
