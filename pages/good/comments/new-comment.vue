<template>
  <div>
    <new-comment />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import NewComment from '~/components/good/NewComment'

export default @Component ({
  name: 'NewCommentTab',
  components: {
    NewComment
  }
})
class NewCommentTab extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
