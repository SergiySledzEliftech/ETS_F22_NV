<template>
  <div>
    <v-row>
      <v-col class="profile-title">
        <h4>
          <nuxtLink :to="/profile/ + $route.params.id">
            <!--<v-img :src="userData.avatar" alt="avtr" class="avtr" contain />-->
            <div v-if="isMy">
              Hello, {{ users[currentIndex].name }} {{ users[currentIndex].lastName }}
            </div>
            <div v-else class="center-align">
              <v-img :src="users[currentIndex].avatar" alt="avtr" class="avtr" contain />
              {{ users[currentIndex].name }} {{ users[currentIndex].lastName }}
            </div>
          </nuxtLink>
        </h4>
      </v-col>
      <v-col>
        <v-tabs class="tabs" color="#E31F26" right>
          <v-tab v-for="(tab, index) in (isMy ? tabsCurrentUser : tabsAnotherUser)" :key="index" :to="'/profile/' + $route.params.id + tab.route" exact>
            <v-icon left>
              mdi-{{ tab.icon }}
            </v-icon>
            {{ tab.title }}
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <NuxtChild :user="users[currentIndex]" :isMy="isMy" />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

export default @Component({
  components: {
  },
  computed: {
    isMy () {
      return this.myId === +this.$route.params.id
    }
  }
})

class Profile extends Vue {
  name = 'profile';

  myId = 1;
  currentIndex = this.$route.params.id - 1

  tabsCurrentUser = [
    { title: 'Profile', route: '/', icon: 'account' },
    { title: 'My Ads', route: '/ads', icon: 'account-filter' },
    { title: 'My Rent', route: '/rent', icon: 'home-clock' },
    { title: 'Favorites', route: '/favorites', icon: 'heart' }
  ];

  tabsAnotherUser = [
    { title: 'Profile', route: '/', icon: 'account' },
    { title: 'Ads', route: '/ads', icon: 'account-filter' }
  ];

  users = [
    {
      id: 1,
      name: 'John',
      lastName: 'Doe',
      nickname: 'GloMaRe',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt libero quidem quos ullam! Commodi, eius.',
      avatar: 'https://avatars.githubusercontent.com/u/17836236',
      email: 'JohnDoe@glomail.com',
      phone: '0987773377',
      optionalPhone: '0677773377',
      address: 'Ukraine, Kyiv, Bohdana Khmelnytskogo St., 3',
      locationX: '50.44469383287712',
      locationY: '30.52002110354918',
      rating: 10
    },
    {
      id: 2,
      name: 'Jane',
      lastName: 'Doe',
      nickname: 'GloBale',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt libero quidem quos ullam! Commodi, eius.',
      avatar: 'https://avatars.githubusercontent.com/u/1783623',
      email: 'JohnDoe@glomail.com',
      phone: '0987773377',
      optionalPhone: '0677773377',
      address: 'Ukraine, Kyiv, Bohdana Khmelnytskogo St., 3',
      locationX: '50.44469383287712',
      locationY: '30.52002110354918',
      rating: 10
    },
    {
      id: 3,
      name: 'Jone',
      lastName: 'Doe',
      nickname: 'GloMaLe',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt libero quidem quos ullam! Commodi, eius.',
      avatar: 'https://avatars.githubusercontent.com/u/17836262',
      email: 'JohnDoe@glomail.com',
      phone: '0987773377',
      optionalPhone: '0677773377',
      address: 'Ukraine, Kyiv, Bohdana Khmelnytskogo St., 3',
      locationX: '50.44469383287712',
      locationY: '30.52002110354918',
      rating: 10
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
