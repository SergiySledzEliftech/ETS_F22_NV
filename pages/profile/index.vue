<template>
  <my-ads-list />
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import MyAdsList from '~/components/profile/MyAdsList'

export default @Component({
  name: 'ads',
  layout: 'profile',
  components: {
    MyAdsList
  }
})

class ads extends Vue {

}

</script>

<style scoped lang="scss">

</style>
