<template>
  <div class="card__list">
    <comment-item class="card__list-item"/>
    <comment-item class="card__list-item"/>
    <comment-item class="card__list-item"/>
    <comment-item class="card__list-item"/>
    <comment-item class="card__list-item"/>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import CommentItem from '~/components/good/CommentItem'

export default @Component({
  name: 'MyCommentsTab',
  components: {
    CommentItem
  }
})
class MyCommentsTab extends Vue {

}
</script>

<style lang="scss" scoped>
.card__list{
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  .card__list-item{
    flex: 0 1 45%;
  }
}
</style>
