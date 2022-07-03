<template>
  <my-config />
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import MyConfig from '~/components/profile/MyConfig'

export default @Component({
  name: 'config',
  layout: 'profile',
  components: {
    MyConfig
  }
})

class ads extends Vue {

}

</script>

<style scoped lang="scss">

</style>
