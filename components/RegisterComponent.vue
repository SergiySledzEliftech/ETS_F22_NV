<template>
  <v-app>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="registerInfo.firstName"
        :rules="[emptyValidation(), lengthValidation(10)]"
        label="First Name"
        type="text"
        required
        class="input-form mb-6"
        solo
      />

      <v-text-field
        v-model="registerInfo.lastName"
        :rules="[emptyValidation(), lengthValidation(10)]"
        label="Last Name"
        type="text"
        required
        class="input-form mb-6"
        solo
      />
      <v-text-field
        v-model="registerInfo.phone"
        :rules="[emptyValidation(), phoneNumberValidation(), numberValidation(), equalLengthValidation(10)]"
        label="Phone Number"
        type="text"
        required
        class="input-form mb-6"
        solo
      />
      <v-text-field
        v-model="registerInfo.email"
        :rules="[emptyValidation(), emailValidation()]"
        label="E-mail"
        type="text"
        required
        class="input-form mb-6"
        solo
      />

      <v-text-field
        v-model="registerInfo.passHash"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[emptyValidation(), passwordValidation()]"
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
        :rules="[checkboxValidation()]"
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
import { Component, Vue } from 'nuxt-property-decorator';
import { emptyValidation, emailValidation, passwordValidation, phoneNumberValidation, lengthValidation, checkboxValidation, numberValidation, equalLengthValidation } from '../helpers/validators';

export default @Component({
  name: 'RegisterComponent'
})

class RegisterComponent extends Vue {
  registerInfo = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    passHash: ''
  }

  valid = true;
  show = false;
  checkbox = false;
  data () {
    return { emptyValidation, emailValidation, passwordValidation, phoneNumberValidation, lengthValidation, checkboxValidation, numberValidation, equalLengthValidation };
  }

  async validateFunction () {
    if (this.$refs.form.validate()) {
      try {
        const res = await this.$axios.post('http://localhost:3001/auth/signup', this.registerInfo);
        console.log(res);
        await this.$auth.loginWith('local', {
          data: {
            email: this.registerInfo.email,
            password: this.registerInfo.passHash
          }
        });
        this.$router.push('/');
        // .then(function (response) {
        //   console.log(response)
        // })
        // .catch(function (error) {
        //   console.log(error)
        // })
      } catch (error) {
        console.log(error);
      }
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
