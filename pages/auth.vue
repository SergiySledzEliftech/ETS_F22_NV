<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" sm="8" md="6" class="mx-auto card-text" height="fit-content">
          <v-card class="tabCard">
            <v-tabs
              v-model="tab"
              background-color="#F9F9FA"
              dark
              color="#E31F26"
            >
              <!-- <nuxt-link :to="{path: '/auth', hash: '#signin'}" class="tab-sign-in"> -->
              <v-tab
                id="signin"
                color="#E31F26"
                class="tab-sign-in"
                @click="addHashToLocation('signin')"
              >
                Sign in
              </v-tab>
              <!-- </nuxt-link> -->
              <!-- <nuxt-link :to="{path: '/auth', hash: '#signup'}" class="tab-sign-up"> -->
              <v-tab
                id="signup"
                color="#E31F26"
                class="tab-sign-up"
                @click="addHashToLocation('signup')"
              >
                Sign Up
              </v-tab>
              <!-- </nuxt-link> -->
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-card>
                  <v-card-text class="card-text">
                    <login-component />
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card>
                  <v-card-text class="card-text">
                    <register-component />
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import Router from 'vue-router'
import RegisterComponent from '../components/RegisterComponent'
import LoginComponent from '../components/LoginComponent'
Vue.use(Router)
export default @Component({
  components: { LoginComponent, RegisterComponent }
})

class Auth extends Vue {
  tab = null;
  mounted () {
    this.addHashToLocation('signin')
  }

  addHashToLocation (params) {
    history.pushState(
      {},
      null,
        `${this.$route.path}#${encodeURIComponent(params)}`
    )
  }
}
</script>
<style scoped>

.v-window {
  overflow: hidden !important;
  border-bottom: 5px;
  border-radius: 30px;
}
.v-application--wrap {
  flex: 1 1 auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 50vh !important;
  max-width: 100%;
  position: relative;
}
div.v-tabs-slider{
  color: #E31F26 !important;
}
.tabCard {
  border-radius: 30px 10px 30px 30px !important;
  box-shadow: 0px 0px 10px rgba(33, 33, 33, 0.25) !important;
}
.v-card__subtitle, .v-card__text, .v-card__title {
  padding-right: 50px !important;
  padding-left: 50px !important;
}
.v-tab {
  color:#213342 !important;
  width: 100% !important;
 }
/* .tab-sign-in:not(:focus)::before {
  border-radius: 30px 0px 0px 0px;
}
.tab-sign-up:not(:focus)::before {
  border-radius: 0px 10px 0px 0px;
} */
.tab-sign-in {
  border-radius: 30px 0px 0px 0px !important;
  width:50%;
  height: 48px;
 }
 .tab-sign-in:before{
  border-radius: 30px 0px 0px 0px;
 }
.tab-sign-up {
  border-radius: 0px 10px 0px 0px !important;
  width:50%;
  height: 48px;
 }
 .tab-sign-up:before {
  border-radius: 0px 10px 0px 0px;
}
</style>
