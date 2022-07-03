<template>
  <my-favorites />
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import MyFavorites from '~/components/profile/MyFavorites'

export default @Component({
  name: 'Favorites',
  layout: 'profile',
  components: {
    MyFavorites
  }
})

class Favorites extends Vue {

}

</script>

<style scoped lang="scss">

</style>
