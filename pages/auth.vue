<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" sm="8" md="6" class="mx-auto">
          <v-card class="tab-card">
            <v-tabs
              :value="tab"
              background-color="#F9F9FA"
              dark
              color="var(--primary)"
              @change="changeTab"
            >
              <v-tab
                id="signin"
                color="var(--primary)"
                class="tab-sign-in"
                @click="addHashToLocation('signin')"
              >
                Sign in
              </v-tab>
              <v-tab
                id="signup"
                color="var(--primary)"
                class="tab-sign-up"
                @click="addHashToLocation('signup')"
              >
                Sign Up
              </v-tab>
            </v-tabs>
            <v-tabs-items :value="tab">
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
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import Router from 'vue-router';
import RegisterComponent from '../components/auth/RegisterComponent';
import LoginComponent from '../components/auth/LoginComponent';

const { State, Mutation } = namespace('global');

Vue.use(Router);
export default @Component({
  components: { LoginComponent, RegisterComponent }
})
class Auth extends Vue {
  @State tab
  @Mutation changeTab

  addHashToLocation (params) {
    history.pushState(
      {},
      null,
      `${this.$route.path}#${encodeURIComponent(params)}`
    );
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/variables.scss';
.v-window {
  overflow: hidden !important;
  border-bottom: 5px;
  border-radius: 10px;
}
.container {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tab-card {
  border-radius: 10px !important;
  box-shadow: 0px 0px 10px rgba(33, 33, 33, 0.25) !important;
}
.v-card__subtitle,
.v-card__text,
.v-card__title {
  padding-right: 20px !important;
  padding-left: 20px !important;
}
.v-tab {
  color: #213342 !important;
  width: 100% !important;
  max-width: 100% !important;
}
.tab-sign-in {
  border-radius: 10px 0px 0px 0px !important;
  width: 50% !important;
  height: 48px;
}
.tab-sign-in:before {
  border-radius: 10px 0px 0px 0px;
}
.tab-sign-up {
  border-radius: 0px 10px 0px 0px !important;
  width: 50% !important;
  height: 48px;
}
.tab-sign-up:before {
  border-radius: 0px 10px 0px 0px;
}
</style>
