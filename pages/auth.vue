<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" sm="8" md="6" class="mx-auto card-text" height="fit-content">
          <v-card>
            <v-tabs
              v-model="tab"
              background-color="#F9F9FA"
              dark
              color="#E31F26"
            >
              <v-tab width="50%" color="#E31F26" class="tab-sign-in">
                Sign in
              </v-tab>
              <v-tab width="50%" color="#E31F26" class="tab-sign-up">
                Sign Up
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-card flat>
                  <v-card-text class="card-text">
                    <login-component />
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
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
import RegisterComponent from '../components/RegisterComponent'
import LoginComponent from '../components/LoginComponent'

export default @Component({
  components: { LoginComponent, RegisterComponent }
})

class Auth extends Vue {
  tab = null;
}
</script>
<style scoped>
div.v-tabs-slider{
  color: #E31F26 !important;
}
.card-text {
  height: fit-content !important;
}
div.v-application--wrap {
  min-height: 0vh !important;
  height: 500px !important;
}
div.v-card {
  height: 500px !important;
  border-radius: 30px 10px 30px 30px !important;
  box-shadow: 0px 0px 10px rgba(33, 33, 33, 0.25) !important;
}
div.v-card--flat {
  border-radius: 0px !important;
}
.v-card__subtitle, .v-card__text, .v-card__title {
  padding-right: 50px !important;
  padding-left: 50px !important;
}
.v-card > *:last-child:not(.v-btn):not(.v-chip):not(.v-avatar) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.v-tab {
  color:#213342 !important;
  width: 100% !important;
 }
 .v-tab--active.v-tab:nth-child(1):not(:focus)::before {
  border-radius: 30px 0px 0px 0px;
}
 .v-tab--active.v-tab:nth-child(3):not(:focus)::before {
  border-radius: 0px 10px 0px 0px;
}
.v-tab:nth-child(2):before {
  border-radius: 30px 0px 0px 0px;
}
.v-tab:nth-child(3):before {
  border-radius: 0px 10px 0px 0px;
}
.tab-sign-in {
  border-radius: 30px 0px 0px 0px !important;
 }
.tab-sign-up {
  border-radius: 0px 10px 0px 0px !important;
 }
</style>
