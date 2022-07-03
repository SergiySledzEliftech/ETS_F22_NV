<template>
  <my-rent />
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import MyRent from '~/components/profile/MyRent'

export default @Component({
  name: 'rent',
  layout: 'profile',
  components: {
    MyRent
  }
})

class Rent extends Vue {

}

</script>

<style scoped lang="scss">

</style>
