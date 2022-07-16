<template>
  <v-app dark>
    <HeaderComp />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <FooterComp />
  </v-app>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import HeaderComp from '../components/global/HeaderComponent'
import FooterComp from '../components/global/FooterComponent'

export default @Component({
  components: { HeaderComp, FooterComp }
})

class Index extends Vue {
    name = 'defaultLayout';
}
</script>

<style lang="scss">

</style>
