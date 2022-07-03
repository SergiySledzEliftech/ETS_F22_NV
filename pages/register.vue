<template>
  <div>
    <v-row justify="center" align="center">
      <v-col>
        <LoginComponent />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import LoginComponent from '../components/LoginComponent'

export default @Component({
  components: { LoginComponent }
})

class Register extends Vue {
}
</script>
