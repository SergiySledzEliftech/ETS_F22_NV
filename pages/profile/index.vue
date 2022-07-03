<template>
  <my-ads />
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import MyAds from '~/components/profile/MyAds'

export default @Component({
  name: 'ads',
  layout: 'profile',
  components: {
    MyAds
  }
})

class ads extends Vue {

}

</script>

<style scoped lang="scss">

</style>
