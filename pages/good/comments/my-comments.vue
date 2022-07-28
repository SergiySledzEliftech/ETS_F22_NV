<template>
  <div>
    <div v-if="loading" class="progress-circular">
      <progress-circular />
    </div>
    <div v-else>
      <comment-list
        :comments-list="userComments"
      />
    </div>
  </div>
</template>

<script>
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import CommentList from '~/components/good/CommentList';
import ProgressCircular from '~/components/global/Progress';

const { State, Action } = namespace('good_comments');

export default @Component({
  components: {
    CommentList,
    ProgressCircular
  }
})
class MyComments extends Vue {
  @State userComments
  @State loading

  @Action loadUserComments

  async mounted () {
    try {
      await this.loadUserComments();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err.message);
    }
  }
}
</script>

<style lang="scss" scoped></style>
