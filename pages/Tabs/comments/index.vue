<template>
  <div>
    <comments-item />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import CommentsItem from '~/components/good/CommentItem'

export default @Component({
  name: 'AllComments',
  layout: 'good',
  components: {
    CommentsItem
  }
})

class AllComments extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
