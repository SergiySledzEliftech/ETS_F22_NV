<template>
  <div>
    <div v-if="loading" class="progress-circular">
      <progress-circular />
    </div>
    <div v-else>
      <comment-list
        :comments-list="userComments"
        :class="userComments.length === 0 ? 'd_none' : ''"
      />
      <div
        v-if="userComments.length === 0"
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
class MyComments extends Vue {
  @State userComments
  @State loading

  @Mutation setLoading
  @Action loadUserComments

  async mounted () {
    this.setLoading(true);
    try {
      await this.loadUserComments({
        userId: this.$auth.user._id,
        goodId: this.$route.params.id
      });
    } catch (err) {
      console.error(err.message);
    }
    this.setLoading(false);
  }
}
</script>

<style lang="scss" scoped></style>
