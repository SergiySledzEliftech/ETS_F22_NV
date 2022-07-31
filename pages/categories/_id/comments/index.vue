<template>
  <div>
    <div v-if="loading" class="progress-circular">
      <progress-circular />
    </div>
    <div v-else>
      <comment-list
        :comments-list="comments"
        :class="comments.length === 0 ? 'd_none' : ''"
      />
      <div
        v-if="comments.length === 0"
        class="d-flex justify-center align-content-center my-12"
      >
        <p class="no-comments">
          There are no comments here yet
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import CommentList from '~/components/good/CommentList';
import ProgressCircular from '~/components/global/Progress';

const { State, Mutation, Action } = namespace('good_comments');

export default @Component({
  components: {
    CommentList,
    ProgressCircular
  }
})
class AllComments extends Vue {
  @State comments
  @State loading

  @Mutation setLoading
  @Action loadComments

  async mounted () {
    this.setLoading(true);
    try {
      await this.loadComments(this.$route.params.id);
    } catch (err) {
      console.error(err.message);
    }
    this.setLoading(false);
  }

  created () {
    console.log(this.comments);
  }
}
</script>

<style lang="scss" scoped>

</style>
