<template>
  <div>
    <new-comment />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import NewComment from '~/components/good/NewComment'

export default @Component({
  name: 'NewCommentPage',
  layout: 'good',
  components: {
    NewComment
  }
})

class NewCommentPage extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
