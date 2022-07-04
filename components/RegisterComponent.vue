<template>
  <v-app>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="firstName"
        :rules="firstNameRules"
        label="First Name"
        type="text"
        required
        class="input-form mb-6"
        solo
      />

      <v-text-field
        v-model="lastName"
        :rules="lastNameRules"
        label="Last Name"
        type="text"
        required
        class="input-form mb-6"
        solo
      />

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        type="text"
        required
        class="input-form mb-6"
        solo
      />

      <v-text-field
        v-model="password"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="passwordRules"
        :type="show ? 'text' : 'password'"
        :counter="8"
        label="Password"
        required
        class="input-form mb-2"
        solo
        @click:append="show = !show"
      />
      <v-checkbox
        v-model="ex4"
        label="I agree with rules"
        color="#E31F26"
        value="red"
        hide-details
        class="mb-2"
      />
      <v-btn :disabled="!valid" class="btn_primary mt-4" width="100%" @click="validate">
        Sign Up
      </v-btn>
      <!--
        <v-btn color="error" class="mr-4" @click="reset">
          Reset Form
        </v-btn>

        <v-btn color="warning" @click="resetValidation">
          Reset Validation
        </v-btn> -->
    </v-form>
  </v-app>
</template>
<script>
import { Component, Vue } from 'nuxt-property-decorator'

export default
  @Component({
    name: 'RegisterComponent'
  })

class RegisterComponent extends Vue {
    valid = true;
    firstName = '';
    lastName = '';
    password = '';
    show = false;
    email = '';
    firstNameRules = [
      v => !!v || 'First name is required',
      v => (v && v.length <= 10) || 'First name must be valid'
    ];

    lastNameRules = [
      v => !!v || 'Last Name is required',
      v => (v && v.length <= 10) || 'Last name must be valid'
    ];

    emailRules = [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ];

    passwordRules = [
      v => !!v || 'Password is required',
      v => (v && v.length >= 8) || 'Password must be at least 8 characters'
    ];

    validate () {
      this.$refs.form.validate()
    }

    reset () {
      this.$refs.form.reset()
    }

    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
</script>

<style scoped>
.container {
    width: 40%;
    height: auto;
}

.btn_primary {
  background: #E31F26!important;
  color: white!important;
  font-size: 18px!important;
  font-weight: normal;
  border-color: #E31F26!important;
  text-transform: none;
  letter-spacing: normal;
  height: 50px!important;
  padding: 0 20px!important;
  margin-bottom: 16px;
}
.input-form {
  height: 50px;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(33, 51, 66, 0.25);
  border-radius: 10px;
  padding-bottom: 30px !important;
  border-color: #fff !important;
  }

</style>
