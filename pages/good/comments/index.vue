<template>
  <div>
    <comments />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import Comments from '~/components/good/Comments'

export default @Component ({
  name: 'AllCommentsTab',
  components: {
    Comments
  }
})
class AllCommentsTab extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
