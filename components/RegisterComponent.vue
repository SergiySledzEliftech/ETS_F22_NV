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
        v-model="phone"
        :rules="phoneRules"
        label="Phone Number"
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
        v-model="checkbox"
        :rules="checkRules"
        label="I agree with rules"
        color="#E31F26"
        value="red"
        hide-details
        class="mb-2"
      />
      <v-btn :disabled="!valid" class="btn_secondary mt-4" width="100%" @click="validateFunction">
        Sign Up
      </v-btn>
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
    phone = '';
    password = '';
    show = false;
    email = '';
    checkbox = false;
    firstNameRules = [
      v => !!v || 'First name is required',
      v => (v && v.length <= 10) || 'First name must be valid'
    ];

    lastNameRules = [
      v => !!v || 'Last Name is required',
      v => (v && v.length <= 10) || 'Last name must be valid'
    ];

    phoneRules = [
      v => !!v || 'Phone Number is required',
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

    checkRules = [
      value => !!value || 'You must accept rules to continue'
    ];

    validateFunction () {
      this.$refs.form.validate()
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

</style>
