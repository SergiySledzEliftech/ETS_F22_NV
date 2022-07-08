<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" sm="8" md="6" class="mx-auto">
          <v-card class="tab-card">
            <v-tabs
              v-model="tab"
              background-color="#F9F9FA"
              dark
              color="#E31F26"
            >
              <v-tab
                id="signin"
                color="#E31F26"
                class="tab-sign-in"
                @click="addHashToLocation('signin')"
              >
                Sign in
              </v-tab>
              <v-tab
                id="signup"
                color="#E31F26"
                class="tab-sign-up"
                @click="addHashToLocation('signup')"
              >
                Sign Up
              </v-tab>
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
export default
@Component({
  components: { LoginComponent, RegisterComponent }
})
class Auth extends Vue {
  tab = 0;
  mounted () {
    // setTimeout(() => {
    //   this.tab = 1
    // }, 4000)
    this.addHashToLocation('signin')
  }

  // get signin () {
  //   console.log(this.$route.fullPath)
  //   return this.$route.fullPath
  // }

  addHashToLocation (params) {
    history.pushState(
      {},
      null,
      `${this.$route.path}#${encodeURIComponent(params)}`
    )
  }

  // @Watch(this.signin)
  // onChangeHash () {
  //   console.log('kkkkk')
  //   this.tab = 0
  // }
}
</script>
<style lang="scss" scoped>
.v-window {
  overflow: hidden !important;
  border-bottom: 5px;
  border-radius: 30px;
}
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
div.v-tabs-slider {
  color: #e31f26 !important;
}
.tab-card {
  border-radius: 30px !important;
  box-shadow: 0px 0px 10px rgba(33, 33, 33, 0.25) !important;
}
.v-card__subtitle,
.v-card__text,
.v-card__title {
  padding-right: 50px !important;
  padding-left: 50px !important;
}
.v-tab {
  color: #213342 !important;
  width: 100% !important;
}
.tab-sign-in {
  border-radius: 30px 0px 0px 0px !important;
  width: 50%;
  height: 48px;
}
.tab-sign-in:before {
  border-radius: 30px 0px 0px 0px;
}
.tab-sign-up {
  border-radius: 0px 30px 0px 0px !important;
  width: 50%;
  height: 48px;
}
.tab-sign-up:before {
  border-radius: 0px 30px 0px 0px;
}
</style>
