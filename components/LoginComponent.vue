<template>
  <v-app>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="loginInfo.email"
        :rules="emailRules"
        label="E-mail"
        type="text"
        required
        class="input-form mb-6 mt-6"
        solo
      />
      <v-text-field
        v-model="loginInfo.password"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="passwordRules"
        :type="show ? 'text' : 'password'"
        :counter="8"
        label="Password"
        required
        class="input-form mb-6"
        solo
        @click:append="show = !show"
      />

      <v-btn :disabled="!valid" class="btn_secondary mt-8 btn" @click="validateFunction()">
        Sign In
      </v-btn>
    </v-form>
  </v-app>
</template>
<script>
import { Component, Vue } from 'nuxt-property-decorator'

export default
  @Component({
    name: 'LoginComponent'
  })

class LoginComponent extends Vue {
    valid = true;
    loginInfo = {
      email: '',
      password: ''
    }

    show = false;
    emailRules = [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ];

    passwordRules = [
      v => !!v || 'Password is required',
      v => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(v) || 'Password must be at least 8 characters, contain at least one lower case, one upper case and one digit'
    ];

    async validateFunction () {
      if (this.$refs.form.validate()) {
        try {
          const response = await this.$auth.loginWith('local', { data: this.loginInfo })
          console.log(response)
        } catch (error) {
          console.log(error)
        }
      }
      console.log(this.loginInfo)
    }
  }
</script>

<style lang="scss" scoped>
.input-form {
  height: 50px;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(33, 51, 66, 0.25);
  border-radius: 10px;
  padding-bottom: 30px !important;
  border-color: #fff !important;
  }
  .btn {
    display: block;
    margin: 0 auto;
  }

</style>
