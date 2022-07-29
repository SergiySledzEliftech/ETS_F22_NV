<template>
  <div class="card__list">
    <comment-item
      v-for="(comment, i) in commentsList"
      :key="i"
      :index="i"
      :comment="comment"
      class="card__list-item"
      @onDelete="onDeleteComment($event)"
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
  @Mutation setListAllComments
  @Mutation setListUserComments

  onDeleteComment (index) {
    if (this.commentsList.length === this.userComments.length) {
      this.deleteUserComment(index);
      this.setListUserComments(this.commentsList);
    } else if (this.commentsList.length === this.comments.length) {
      this.deleteComment(index);
      this.setListAllComments(this.commentsList);
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
