<template>
  <div>
    <v-row justify="center" align="center">
      <h1 class="headline">
        {{ title }}
      </h1>
    </v-row>
    <TestComp />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import TestComp from '../components/TestComponent'

export default @Component({
  components: { TestComp }
})

class Index extends Vue {
  title = 'Welcome to the ETS_F22_NV project!';
}
</script>
