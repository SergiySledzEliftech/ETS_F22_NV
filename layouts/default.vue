<template>
  <v-app dark>
    <header-comp />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <footer-comp />
  </v-app>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';
import HeaderComp from '../components/global/HeaderComponent';
import FooterComp from '../components/global/FooterComponent';

export default @Component({
  components: {
    HeaderComp,
    FooterComp
  }
})

class Default extends Vue {
  name = 'defaultLayout';
}
</script>

<style lang="scss">

</style>
