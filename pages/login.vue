<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input v-model="login.username" type="text">
      </div>
      <div>
        <label>Password</label>
        <input v-model="login.password" type="text">
      </div>
      <div>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

export default
@Component({
  components: {}
})
class Login extends Vue {
      login = {
        username: 'libraolena@gmail.com',
        password: '12345678'
      }

      async userLogin () {
        try {
          const response = await this.$auth.loginWith('local', { data: this.login })
          console.log(response)
        } catch (err) {
          console.log(err)
        }
      }
}
</script>
