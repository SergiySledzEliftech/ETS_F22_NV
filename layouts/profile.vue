<template>
  <v-app dark>
    <HeaderComp />
    <v-main>
      <v-container>
        <v-row>
          <v-col class="profile-title">
            <h4>
              <nuxtLink :to="/profile/ + $route.params.id">
                <!--<v-img :src="userData.avatar" alt="avtr" class="avtr" contain />-->
                <div v-if="isMy">
                  Hello, {{ userData[currentIndex].name }} {{ userData[currentIndex].lastName }}
                </div>
                <div v-else class="center-align">
                  <v-img :src="userData[currentIndex].avatar" alt="avtr" class="avtr" contain />
                  {{ userData[currentIndex].name }} {{ userData[currentIndex].lastName }}
                </div>
              </nuxtLink>
            </h4>
          </v-col>
          <v-col>
            <v-tabs class="tabs" color="#E31F26" right>
              <v-tab v-for="(tab, index) in (isMy ? tabsCurrentUser : tabsAnotherUser)" :key="index" :to="tab.route + '/' + $route.params.id" exact>
                <v-icon left>
                  mdi-{{ tab.icon }}
                </v-icon>
                {{ tab.title }}
              </v-tab>
            </v-tabs>
          </v-col>
        </v-row>
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
  },
  // data () {
  //   return {
  //     current: ''
  //   }
  // },
  computed: {
    isMy () {
      return this.myId === +this.$route.params.id
    }
  }
  // updated (data) {
  //   this.current = data
  // }
  // mounted () {
  //   this.$on('current', (data) => {
  //     this.current = data
  //   })
  // }
})

class Profile extends Vue {
  name = 'profile';
  myId = 1;
  currentIndex = this.$route.params.id - 1
  // current = '';
  tabsCurrentUser = [
    { title: 'Profile', route: '/profile', icon: 'account' },
    { title: 'My Ads', route: '/profile/ads', icon: 'account-filter' },
    { title: 'My Rent', route: '/profile/rent', icon: 'home-clock' },
    { title: 'Favorites', route: '/profile/favorites', icon: 'heart' }
  ];

  tabsAnotherUser = [
    { title: 'Profile', route: '/profile', icon: 'account' },
    { title: 'Ads', route: '/profile/ads', icon: 'account-filter' }
  ];

  userData = [
    {
      id: 1,
      name: 'John',
      lastName: 'Doe',
      avatar: 'https://avatars.githubusercontent.com/u/17836236'
    },
    {
      id: 2,
      name: 'Jane',
      lastName: 'Doe',
      avatar: 'https://avatars.githubusercontent.com/u/1783623'
    },
    {
      id: 3,
      name: 'Jone',
      lastName: 'Doe',
      avatar: 'https://avatars.githubusercontent.com/u/17836262'
    }
  ]
}
</script>

<style lang="scss">

.row{
  margin: 10px 0;
}

.profile-title{
  margin: auto 0;
  .avtr {
    max-width: 50px;
    border: 1px solid $secondary;
    border-radius: 50%;
    display: inline-block;
    margin-right: 20px;
  }
  .center-align {
    display: flex;
    align-items: center;
  }
  h4 {
    margin: 0;
    padding: 0;
  }
  a{
    display: flex;
    align-items: center;
    font-size: 24px;
    padding: 0;
    margin: 0;
    color: $secondary
  }
}

.tabs a {
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    background-color: #aaaaaa
  }
}

</style>
