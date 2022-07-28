<template>
  <div class="profile-wrap">
    <v-row>
      <v-col lg="6" md="12" sm="12" xs="12" class="profile-title">
        <h4>
          <nuxtLink :to="{ name: 'profile-id', params: { id: $route.params.id}}">
            <div v-if="isMy">
              Hello, {{ user.firstName }} {{ user.lastName }}
            </div>
            <div v-else class="center-align">
              <v-img :src="user.avatar" alt="avtr" class="avtr" contain />
              {{ user.firstName }} {{ user.lastName }}
            </div>
          </nuxtLink>
        </h4>
      </v-col>
      <v-col lg="6" md="12" sm="12" xs="12">
        <v-tabs class="tabs" color="var(--primary)" right show-arrows>
          <v-tab
            v-for="(tab, index) in (isMy ? tabsCurrentUser : tabsOtherUser)"
            :key="index"
            :to="{ name: tab.route, params: { id: $route.params.id}}"
            exact
          >
            <v-icon left>
              mdi-{{ tab.icon }}
            </v-icon>
            {{ tab.title }}
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <NuxtChild :user="user" :is-my="isMy" />
  </div>
</template>

<script>
import { Vue, Component, namespace } from 'nuxt-property-decorator';
const { State, Action } = namespace('profile');

export default @Component({
  components: {}

})

class Profile extends Vue {
  @State user;
  @Action getUser;

  async mounted () {
    try {
      await this.getUser(this.$route.params.id);
    } catch (e) {
      console.log('here: ' + e);
    }
  }

  name = 'profile';

  get isMy () {
    // return this.$auth.user._id === this.$route.params.id;
    return this.$route.params.id === '62dbeb38d387887c0b416ab6';
  };

  tabsCurrentUser = [
    { title: 'Profile', route: 'profile-id', icon: 'account' },
    { title: 'My Ads', route: 'profile-id-ads', icon: 'account-filter' },
    { title: 'My Rent', route: 'profile-id-rent', icon: 'home-clock' },
    { title: 'Favorites', route: 'profile-id-favorites', icon: 'heart' }
  ];

  tabsOtherUser = [
    { title: 'Profile', route: 'profile-id', icon: 'account' },
    { title: 'Ads', route: 'profile-id-ads', icon: 'account-filter' }
  ]
}
</script>

<style lang="scss">
.profile-wrap {

  .row {
    margin: 10px 0;
  }

  .profile-title{
    margin: auto 0;
    .avtr {
      max-width: 50px;
      height: auto;
      box-sizing: border-box;
      clip-path: circle();
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
}
</style>
