<template>
  <div class="card__list">
    <comment-item
      v-for="(comment, i) in commentsList"
      :key="i"
      :index="i"
      :comment="comment"
      class="card__list-item"
      @onDelete="deleteComment($event)"
    />
  </div>
</template>
<script>
import { Vue, Component, Prop, namespace } from 'nuxt-property-decorator';
import CommentItem from '~/components/good/CommentItem';

const { State, Mutation } = namespace('good_comments');

export default @Component({
  components: {
    CommentItem
  }
})
class MyComments extends Vue {
  @Prop() commentsList

  @State userComments
  @State comments

  @Mutation deleteComment
  @Mutation deleteUserComment

  deleteComment (index) {
    if (this.commentsList.length === this.userComments.length) {
      this.deleteComment(index);
      this.commentsList = this.comments;
    } else {
      this.deleteUserComment(index);
      this.commentsList = this.userComments;
    }
  }
}
</script>

<style lang="scss" scoped>
.card__list{
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  @media (max-width: $bp_tablet + px) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: normal;
    @include responsive-value("gap", 50, 30, $bp_laptop);
  }
  .card__list-item{
    flex: 0 1 47.5%;
    @media (max-width: $bp_tablet + px) {
      flex: 0 1 100%;
    }
    &:nth-child(odd){
    }
  }
}
</style>
