<template>
  <v-app>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="registerInfo.first_name"
        :rules="firstNameRules"
        label="First Name"
        type="text"
        required
        class="input-form mb-6"
        solo
      />

      <v-text-field
        v-model="registerInfo.last_name"
        :rules="lastNameRules"
        label="Last Name"
        type="text"
        required
        class="input-form mb-6"
        solo
      />
      <v-text-field
        v-model="registerInfo.phone"
        :rules="phoneRules"
        label="Phone Number"
        type="text"
        required
        class="input-form mb-6"
        solo
      />
      <v-text-field
        v-model="registerInfo.email"
        :rules="emailRules"
        label="E-mail"
        type="text"
        required
        class="input-form mb-6"
        solo
      />

      <v-text-field
        v-model="registerInfo.password"
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
      <v-checkbox
        v-model="checkbox"
        :rules="checkRules"
        label="I agree with rules"
        color="#E31F26"
        value="red"
        hide-details
        class="mb-2 mt-8"
      />
      <v-btn :disabled="!valid" class="btn_secondary mt-4 btn" @click="validateFunction">
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
  registerInfo = {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    password: ''
  }

    valid = true;

    show = false;

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
      v => /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(v) || 'Please enter valid phone number'
    ];

    emailRules = [
      v => !!v || 'E-mail is required',
      v => /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(v) || 'E-mail must be valid'
    ];

    passwordRules = [
      v => !!v || 'Password is required',
      v => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(v) || 'Password must be at least 8 characters, contain at least one lower case, one upper case and one digit'
    ];

    checkRules = [
      value => !!value || 'You must accept rules to continue'
    ];

    validateFunction () {
      if (this.$refs.form.validate()) {
        this.$axios.post('http://localhost:8000/auth/signup', this.registerInfo)
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
        console.log(this.registerInfo)
      }
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
